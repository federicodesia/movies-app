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
    production_companies: ProductionCompany[];
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