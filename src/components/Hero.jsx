import { useState, useRef } from "react";
import { useUIStore } from '../store/useUIStore';
import playIcon from "../assets/logo/play-circle.png";
import infoIcon from "../assets/logo/information-outline.png";
import muteIcon from "../assets/logo/mute.png"; 
import volumeIcon from "../assets/logo/volume.png";
import heroCover from "../assets/image/hero_cover.png";

const Hero = () => {
    const { isMuted, toggleGlobalMute } = useUIStore();
    const [isPlaying, setIsPlaying] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const playerRef = useRef(null);

    const sendCommand = (command) => {
        if (!isReady || !playerRef.current) return;
        try {
            playerRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: command, args: [] }),
                '*'
            );
        } catch (err) {
            if (import.meta.env.DEV) {
                console.warn('[Hero] postMessage failed:', err);
            }
        }
    };

    const toggleMute = () => {
        const command = isMuted ? 'unMute' : 'mute';
        sendCommand(command);
        toggleGlobalMute(); 
    };

    const togglePlay = () => {
        const command = isPlaying ? 'pauseVideo' : 'playVideo';
        sendCommand(command);
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="relative h-[60vh] md:h-[95vh] w-full overflow-hidden bg-[#181818]">
            {/* Background Container */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10 opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#181818]/60 to-transparent z-10"></div>
                
                {videoError ? (
                    <img
                        src={heroCover}
                        alt="Duty After School"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <iframe
                        ref={playerRef}
                        className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] md:w-[150vw] md:h-[150vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-100 transition-opacity duration-500"
                        src="https://www.youtube.com/embed/U0MOoyI7pIM?autoplay=1&controls=0&showinfo=0&autohide=0&loop=1&playlist=U0MOoyI7pIM&mute=1&enablejsapi=1&vq=hd1080"
                        title="Duty After School - Trailer"
                        allow="autoplay; encrypted-media"
                        onLoad={() => setIsReady(true)}
                        onError={() => setVideoError(true)}
                        loading="lazy"
                    ></iframe>
                )}
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-[20%] left-[20px] md:left-[80px] z-20 w-[90%] md:w-[50%] flex flex-col gap-3 md:gap-5">
                <h1 className="text-white text-[32px] md:text-[56px] font-bold leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                    Duty After School
                </h1>
                <p className="text-white/90 text-[14px] md:text-[18px] font-medium max-w-[500px] leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
                    <button
                        onClick={togglePlay}
                        className="bg-[#2F80ED] hover:bg-[#2F80ED]/80 text-white px-6 py-1.5 md:px-8 md:py-2.5 rounded-full flex items-center gap-2 transition duration-300 shadow-[0_0_15px_rgba(47,128,237,0.4)] font-bold text-[14px] md:text-base hover:scale-105 active:scale-95"
                        aria-label={isPlaying ? "Pause trailer" : "Play trailer"}
                    >
                        <img src={playIcon} alt="" className="w-4 h-4 md:w-5 md:h-5" />
                        {isPlaying ? "Pause" : "Mulai"}
                    </button>
                    <button 
                        className="bg-[#2F3334]/80 hover:bg-[#2F3334] text-white px-4 py-1.5 md:px-6 md:py-2.5 rounded-full flex items-center gap-2 transition duration-300 font-semibold backdrop-blur-md text-[14px] md:text-base hover:scale-105 active:scale-95"
                        aria-label="Lihat informasi selengkapnya"
                    >
                        <img src={infoIcon} alt="" className="w-4 h-4 md:w-5 md:h-5 invert" />
                        Selengkapnya
                    </button>
                    <div className="flex items-center gap-2 md:gap-3">
                        <span 
                            className="border border-white/60 text-white flex items-center justify-center w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full text-[12px] md:text-[14px] font-bold bg-black/20"
                            aria-label="Rating usia 18 tahun ke atas"
                        >
                            18+
                        </span>
                        <button
                            onClick={toggleMute}
                            className="transition transform active:scale-90 hover:scale-110"
                            aria-label={isMuted ? "Aktifkan suara" : "Matikan suara"}
                        >
                            <img
                                src={isMuted ? muteIcon : volumeIcon}
                                alt=""
                                className="w-[35px] md:w-[40px] h-auto drop-shadow-md"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
