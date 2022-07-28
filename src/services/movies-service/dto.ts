export interface Movie {
    poster_path?: string
    adult?: boolean
    overview?: string
    release_date?: string
    genre_ids?: number[]
    id?: number
    original_title?: string
    original_language?: string
    title?: string
    backdrop_path?: string
    popularity?: number
    vote_count?: number
    video?: boolean
    vote_average?: number
}

export interface MovieList {
    page: number
    results: Movie[]
    total_results: number
    total_pages: number
}

export interface Genre {
    id: number
    name: string
}

export interface GenreList {
    genres: Genre[]
}

export interface MovieDetail {
    adult?: boolean;
    backdrop_path?: string;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    spoken_languages?: SpokenLanguage[];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface ProductionCompany {
    name?: string;
    id?: number;
    logo_path?: string;
    origin_country?: string;
}

export interface ProductionCountry {
    iso_3166_1?: string;
    name?: string;
}

export interface SpokenLanguage {
    iso_639_1?: string;
    name?: string;
}

export interface MovieCredits {
    id?: number;
    cast?: Cast[];
    crew?: Cast[];
}

export interface Cast {
    adult?: boolean;
    gender?: number;
    id?: number;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    cast_id?: number;
    character?: string;
    credit_id?: string;
    order?: number;
    job?: string;
}