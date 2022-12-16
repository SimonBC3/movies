import { MovieInfo } from "./movieInfo.interface";

export interface apiAnswer {
    page: bigint;
    results: MovieInfo[];
    total_pages: bigint;
    total_results: bigint;
}