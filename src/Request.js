const key = "e9e9d8da18ae29fc430845952232787"

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}c&language=en-US&page=1 `,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}c&language=en-US&page=1`,
    requestUpCome: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}c&language=en-US&page=1 `,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}c&language=en-US&page=1 `
}

export default requests