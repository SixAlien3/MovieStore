import { Genre } from './genre';
import { Trailer } from './trailer';

export class Movie {
    id: number;
    title: string;
    posterUrl: string;
    revenue: number;
    imdbId: string;
    releaseDate: string;
    averageVote: number;
    overview: string;
    tagline: string;
    backdropUrl: string;
    externalId: number;
    genres: Genre[];
    trailers: Trailer[];
}
