import { Genre } from './genre';
import { Trailer } from './trailer';

export class Movie {
    id: number;
    title: string;
    posterUrl: string;
    budget: number;
    revenue: number;
    imdbId: string;
    homepage: string;
    releaseDate: string;
    averageVote: number;
    overview: string;
    tagline: string;
    backdropUrl: string;
    externalId: number;
    runTime: number;
    status: string;
    genres: Genre[];
    trailers: Trailer[];
}
