import MovieRow from '../components/MovieRow';
import SEO from '../components/SEO';
import requests from '../api/apiRequests';

const FilmPage = () => {
    return (
        <div className="w-full bg-[#181818] min-h-screen overflow-x-hidden pt-[80px]">
            <SEO 
                title="Film" 
                description="Jelajahi koleksi film terbaik di Chill Movie." 
            />
            <div className="px-4 md:px-[80px] pt-8 pb-4">
                <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight">
                    Film
                </h1>
                <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-2xl">
                    Temukan film dari berbagai genre, dari aksi hingga romantis.
                </p>
            </div>
            <div className="flex flex-col gap-6 pb-20">
                <MovieRow 
                    title="Film Populer" 
                    variant="portrait" 
                    fetchUrl={requests.fetchPopular} 
                />
                <MovieRow 
                    title="Film Top Rating" 
                    variant="portrait" 
                    fetchUrl={requests.fetchTopRated} 
                />
                <MovieRow 
                    title="Sedang Tayang di Bioskop" 
                    variant="continue" 
                    fetchUrl={requests.fetchNowPlaying} 
                />
                <MovieRow 
                    title="Film Aksi" 
                    variant="portrait" 
                    fetchUrl={requests.fetchActionMovies} 
                />
                <MovieRow 
                    title="Film Komedi" 
                    variant="portrait" 
                    fetchUrl={requests.fetchComedyMovies} 
                />
                <MovieRow 
                    title="Film Horror" 
                    variant="portrait" 
                    fetchUrl={requests.fetchHorrorMovies} 
                />
                <MovieRow 
                    title="Film Romantis" 
                    variant="portrait" 
                    fetchUrl={requests.fetchRomanceMovies} 
                />
            </div>
        </div>
    );
};

export default FilmPage;
