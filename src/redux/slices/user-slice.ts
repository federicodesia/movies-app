import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
import { firebaseAuth, firebaseDb } from "../../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { arrayRemove, arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";

interface UserState {
    user: User | null
    favoriteMoviesId: number[]
};

const initialState: UserState = {
    user: null,
    favoriteMoviesId: []
};

export const login = createAsyncThunk(
    'user/login',
    async () => {
        const authProvider = new GoogleAuthProvider()
        return await signInWithPopup(firebaseAuth, authProvider)
            .then(result => result.user)
            .catch(_ => null)
    }
)

const tryWithLoggedUser = async <T>(
    fn: (user: User) => Promise<T>,
    onError?: T
) => {
    try {
        const user = store.getState().userReducer.user
        if (!user) return onError
        return await fn(user)
    }
    catch (e) {
        return onError
    }
}

export const fetchFavoriteMovies = createAsyncThunk(
    'movies/fetchFavoriteMovies',
    async () => tryWithLoggedUser(async (user) => {
        const docRef = doc(firebaseDb, 'users', user.uid)
        const docSnapshot = await getDoc(docRef);
        const favorite = docSnapshot.data()?.favoriteMoviesId
        return (favorite ?? []) as number[]
    }, [])
)

export const addFavoriteMovie = createAsyncThunk(
    'movies/addFavoriteMovie',
    async (movieId: number) => tryWithLoggedUser(async (user) => {
        const docRef = doc(firebaseDb, 'users', user.uid)
        await setDoc(docRef, {
            favoriteMoviesId: arrayUnion(movieId),
        }, { merge: true })
    })
)

export const removeFavoriteMovie = createAsyncThunk(
    'movies/removeFavoriteMovie',
    async (movieId: number) => tryWithLoggedUser(async (user) => {
        const docRef = doc(firebaseDb, 'users', user.uid)
        await setDoc(docRef, {
            favoriteMoviesId: arrayRemove(movieId)
        }, { merge: true });
    })
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
        logout: (state) => {
            signOut(firebaseAuth)
        }
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload) state.user = action.payload
        }),
        builder.addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
            if (action.payload) state.favoriteMoviesId = action.payload
        }),
        builder.addCase(addFavoriteMovie.pending, (state, action) => {
            state.favoriteMoviesId = [...state.favoriteMoviesId, action.meta.arg]
        }),
        builder.addCase(removeFavoriteMovie.pending, (state, action) => {
            state.favoriteMoviesId = state.favoriteMoviesId.filter(m => m !== action.meta.arg)
        })
    }
});

onAuthStateChanged(firebaseAuth, (user) => {
    store.dispatch(setUser(user))
    store.dispatch(fetchFavoriteMovies())
})

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;