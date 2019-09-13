export interface comments {
    _id: any,
    name: string,
    email: string,
    movie_id: string,
    text: string,
    date: any
}

export interface movie {
    _id: string,
    plot: string,
    genres: string[],
    runtime: number,
    rated: string,
    cast: string[],
    num_mflix_comments: number,
    title: string,
    fullplot: string,
    languages: string[],
    released: any,
    directors: string[],
    writers: string[],
    awards: {wins: number, nominations: number, text: string},
    lastupdated: any,
    year: number,
    imdb: {rating: number, votes: number, id: number},
    countries: string[],
    type: string,
    tomatoes: {viewer: {rating: number, numReviews: number, meter: number}, dvd: any, lastupdated: any}
}

