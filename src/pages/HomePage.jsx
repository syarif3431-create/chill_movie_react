import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import SEO from '../components/SEO';
import requests from '../api/apiRequests';

const HomePage = () => {
    return (
        <div className="w-full bg-[#181818] min-h-screen overflow-x-hidden">
            <SEO 
                title="Beranda" 
                description="Chill adalah platform streaming modern dengan ribuan film, series, dan konten orisinal eksklusif." 
            />
            <div className="-mt-[70px] md:-mt-[80px]">
                <Hero />
            </div>
            <div className="flex flex-col relative z-20 -mt-[30px] md:-mt-[100px] gap-6 pb-20">
                <MovieRow 
                    title="Melanjutkan Tonton Film" 
                    variant="continue" 
                    fetchUrl={requests.fetchPopular} 
                />
                <MovieRow 
                    title="Top Rating Film dan Series Hari ini" 
                    variant="portrait" 
                    fetchUrl={requests.fetchTopRated} 
                />
                <MovieRow 
                    title="Film Trending" 
                    variant="portrait" 
                    fetchUrl={requests.fetchTrending} 
                />
                <MovieRow 
                    title="Rilis Baru" 
                    variant="portrait" 
                    fetchUrl={requests.fetchNowPlaying} 
                />
                <MovieRow 
                    title="Series Populer" 
                    variant="portrait" 
                    fetchUrl={requests.fetchTVPopular} 
                />
            </div>
        </div>
    );
};

export default HomePage;
