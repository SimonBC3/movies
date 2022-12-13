import { companies } from "./companies.interface"
import { countries } from "./countries.interface"
import { genre } from "./genre.interface"
import { languages } from "./languages.interface"

export interface movieInfo {
    adult: string,
    backdrop_path: string
    belongs_to_collection: string,
    budget: bigint,
    genres: genre,
    homepage: string,
    id: Int32Array,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: Float32Array,
    poster_path: string,
    production_companies: companies,
    production_countries: countries,
    release_date: string,
    revenue: Float32Array,
    runtime: Int16Array,
    spoken_languages: languages,
    status: string,
    tagline: string,
    title: string,
    video: string,
    vote_average: Float32Array,
    vote_count: bigint
}