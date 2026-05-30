import SEO from '../components/SEO';
import { FaDownload, FaAd, FaGlobe, FaTv, FaClosedCaptioning } from 'react-icons/fa';
import { MdHighQuality } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

const features = [
    { icon: <FaDownload size={28} />, label: 'Download Konten Pilihan' },
    { icon: <FaAd size={28} />, label: 'Tidak Ada Iklan' },
    { icon: <FaGlobe size={28} />, label: 'Tonton Semua Konten' },
    { icon: <MdHighQuality size={28} />, label: 'Kualitas Maksimal Sampai Dengan 4K' },
    { icon: <FaTv size={28} />, label: 'Tonton di TV, Tablet, Mobile, dan Laptop' },
    { icon: <FaClosedCaptioning size={28} />, label: 'Subtitle Untuk Konten Pilihan' },
];

const plans = [
    {
        name: 'Individual',
        price: 'Rp49.990',
        period: '/bulan',
        devices: '1 Akun',
        benefits: ['Tidak ada iklan', 'Kualitas 720p', 'Download konten pilihan'],
    },
    {
        name: 'Berdua',
        price: 'Rp79.990',
        period: '/bulan',
        devices: '2 Akun',
        benefits: ['Tidak ada iklan', 'Kualitas 1080p', 'Download konten pilihan'],
    },
    {
        name: 'Keluarga',
        price: 'Rp129.990',
        period: '/bulan',
        devices: '5-7 Akun',
        benefits: ['Tidak ada iklan', 'Kualitas 4K', 'Download konten pilihan'],
    },
];

const SubscriptionPage = () => {
    return (
        <div className="w-full bg-[#0f0f0f] min-h-screen overflow-x-hidden pt-[70px] md:pt-[90px] pb-10">
            <SEO title="Berlangganan" description="Pilih paket berlangganan Chill Movie." />

            {/* Hero Banner */}
            <div className="w-full bg-gradient-to-b from-[#1a1a2e] to-[#0f0f0f] py-10 md:py-16 px-4">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h1 className="text-white text-2xl md:text-3xl font-bold mb-10 md:mb-14">
                        Kenapa Harus Berlangganan?
                    </h1>

                    {/* Features Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-10 max-w-[700px] mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 text-center">
                                <div className="text-white/80">
                                    {feature.icon}
                                </div>
                                <p className="text-white/70 text-[11px] md:text-sm leading-tight">
                                    {feature.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="w-full bg-[#1a1a1a] py-12 md:py-16 px-4 mt-8">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
                            Pilih Paketmu
                        </h2>
                        <p className="text-white/50 text-sm">
                            Temukan paket sesuai kebutuhanmu
                        </p>
                    </div>

                    {/* Plans Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[900px] mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="bg-[#3b5fe0] rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden"
                            >
                                {/* Decorative */}
                                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                {/* Plan Name Badge */}
                                <div className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-bold rounded-full w-fit mb-4">
                                    {plan.name}
                                </div>

                                {/* Price */}
                                <div className="mb-1">
                                    <span className="text-white/60 text-xs">Mulai dari </span>
                                    <span className="text-white text-lg md:text-xl font-bold">{plan.price}</span>
                                    <span className="text-white/60 text-xs">{plan.period}</span>
                                </div>
                                <p className="text-white/50 text-xs mb-5">{plan.devices}</p>

                                {/* Benefits */}
                                <div className="flex flex-col gap-2.5 mb-6 flex-1">
                                    {plan.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <FaCheck size={10} className="text-white/70 flex-shrink-0" />
                                            <span className="text-white/80 text-xs md:text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="w-full py-2.5 bg-white text-[#3b5fe0] font-bold text-sm rounded-full hover:bg-white/90 transition mb-2">
                                    Langganan
                                </button>
                                <p className="text-white/40 text-[10px] text-center">
                                    Syarat dan Ketentuan Berlaku
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPage;
