const requests = {
    // Movies
    fetchTrending: '/trending/all/week',
    fetchTopRated: '/movie/top_rated',
    fetchPopular: '/movie/popular',
    fetchNowPlaying: '/movie/now_playing',
    fetchActionMovies: '/discover/movie?with_genres=28',
    fetchAdventureMovies: '/discover/movie?with_genres=12',
    fetchAnimationMovies: '/discover/movie?with_genres=16',
    fetchComedyMovies: '/discover/movie?with_genres=35',
    fetchCrimeMovies: '/discover/movie?with_genres=80',
    fetchDocumentaries: '/discover/movie?with_genres=99',
    fetchDramaMovies: '/discover/movie?with_genres=18',
    fetchFamilyMovies: '/discover/movie?with_genres=10751',
    fetchFantasyMovies: '/discover/movie?with_genres=14',
    fetchHistoryMovies: '/discover/movie?with_genres=36',
    fetchHorrorMovies: '/discover/movie?with_genres=27',
    fetchMusicMovies: '/discover/movie?with_genres=10402',
    fetchMysteryMovies: '/discover/movie?with_genres=9648',
    fetchRomanceMovies: '/discover/movie?with_genres=10749',
    fetchSciFiMovies: '/discover/movie?with_genres=878',
    fetchTVMovies: '/discover/movie?with_genres=10770',
    fetchThrillerMovies: '/discover/movie?with_genres=53',
    fetchWarMovies: '/discover/movie?with_genres=10752',
    fetchWesternMovies: '/discover/movie?with_genres=37',

    // TV Series
    fetchTVPopular: '/tv/popular',
    fetchTVTopRated: '/tv/top_rated',
    fetchTVOnTheAir: '/tv/on_the_air',
    fetchTVTrending: '/trending/tv/week',
};

export default requests;