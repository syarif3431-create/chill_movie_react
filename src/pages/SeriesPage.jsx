import MovieRow from '../components/MovieRow';
import SEO from '../components/SEO';

const SeriesPage = () => {
    return (
        <div className="w-full bg-[#181818] min-h-screen overflow-x-hidden pt-[80px]">
            <SEO 
                title="Series" 
                description="Jelajahi koleksi series terbaik di Chill Movie." 
            />
            <div className="px-4 md:px-[80px] pt-8 pb-4">
                <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight">
                    Series
                </h1>
                <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-2xl">
                    Temukan series populer, trending, dan rekomendasi terbaik untuk kamu.
                </p>
            </div>
            <div className="flex flex-col gap-6 pb-20">
                <MovieRow 
                    title="Series Populer" 
                    variant="portrait" 
                    fetchUrl="/tv/popular" 
                />
                <MovieRow 
                    title="Series Top Rating" 
                    variant="portrait" 
                    fetchUrl="/tv/top_rated" 
                />
                <MovieRow 
                    title="Series Sedang Tayang" 
                    variant="continue" 
                    fetchUrl="/tv/on_the_air" 
                />
                <MovieRow 
                    title="Series Trending Minggu Ini" 
                    variant="portrait" 
                    fetchUrl="/trending/tv/week" 
                />
            </div>
        </div>
    );
};

export default SeriesPage;
