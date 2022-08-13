import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
import { firebaseAuth } from "../../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";

interface UserState {
    user: User | null;
};

const initialState: UserState = {
    user: null,
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
        })
    }
});

onAuthStateChanged(firebaseAuth, (user) => {
    store.dispatch(setUser(user))
})

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;