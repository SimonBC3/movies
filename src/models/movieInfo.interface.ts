import { Companies } from "./companies.interface"
import { Countries } from "./countries.interface"
import { Genre } from "./genre.interface"
import { Languages } from "./languages.interface"

export interface MovieInfo {
    adult: string;
    backdrop_path: string;
    belongs_to_collection: string[];
    budget: bigint;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: Float32Array;
    poster_path: string;
    production_companies: Companies[];
    production_countries: Countries[];
    release_date: string;
    revenue: Float32Array;
    runtime: Int16Array;
    spoken_languages: Languages[];
    status: string;
    tagline: string;
    title: string;
    video: string;
    vote_average: Float32Array;
    vote_count: bigint;
}
