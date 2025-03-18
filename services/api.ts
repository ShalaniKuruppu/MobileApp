export const TMDB_CONFIG  ={
    BASE_URL : 'https://api.themoviedb.org/3/',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY ,
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchPopularMovies = async ({ query}: {query: string}) => {
    const endpoint = query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; 

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });

    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    };

    const data = await response.json();
    return data.results;



}


// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjU5ZjY0ZGNlOWY3NjA2NjZiOTUzYjg0YmQwN2MzNSIsIm5iZiI6MTc0MjIyMjgzNS4zNzEsInN1YiI6IjY3ZDgzNWYzMzE2NzhjYzNmODAxYjYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7GRRveYMHVstxNOp3ELBK4K-O1d5AKuG1VzZdB-YLmo'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));