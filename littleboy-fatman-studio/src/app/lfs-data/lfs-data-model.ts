export interface comments {
    _id: any,
    name: string,
    email: string,
    movie_id: string,
    text: string,
    date: any
}

export interface movie {
    _id?: object,
    plot?: string,
    genres?: string[],
    runtime?: number,
    rated?: string,
    cast?: string[],
    num_mflix_comments?: number,
    poster?: string,
    title?: string,
    fullplot?: string,
    languages?: string[],
    released?: any,
    directors?: string[],
    writers?: string[],
    awards?: {wins: number, nominations: number, text: string},
    lastupdated?: any,
    year?: number,
    imdb?: {rating: number, votes: number, id: number},
    countries?: string[],
    type?: string,
    tomatoes?: {
        viewer?: {
            rating?: number, numReviews?: number, meter?: number
        }, 
        fresh?: number,
        rotten?: number,
        critic?: {
            rating?: number, numReviews?: number, meter?: number    
        }
        lastupdated?: any,
        boxoffice?: string,
        consensus?: string,
        dvd?: string,
        production?: string,
        website?: string
    }
}

