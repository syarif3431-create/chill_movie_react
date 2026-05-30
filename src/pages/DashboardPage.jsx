import { useState } from 'react';
import useWatchlistStore from '../store/useWatchlistStore';
import SEO from '../components/SEO';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const DashboardPage = () => {
    const { watchlist, removeFromWatchlist, addToWatchlist } = useWatchlistStore();

    // State for add/edit modal
    const [showModal, setShowModal] = useState(false);
    const [editingMovie, setEditingMovie] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        rating: '',
        image: ''
    });

    const handleDelete = (id) => {
        removeFromWatchlist(id);
    };

    const handleEdit = (movie) => {
        setEditingMovie(movie);
        setFormData({
            title: movie.title || '',
            genre: movie.genres?.[0] || '',
            rating: movie.rating?.toString() || '',
            image: movie.image || ''
        });
        setShowModal(true);
    };

    const handleAdd = () => {
        setEditingMovie(null);
        setFormData({ title: '', genre: '', rating: '', image: '' });
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        if (editingMovie) {
            // Remove old and add updated
            removeFromWatchlist(editingMovie.id);
            addToWatchlist({
                id: editingMovie.id,
                title: formData.title.trim(),
                genres: formData.genre ? [formData.genre.trim()] : [],
                rating: parseFloat(formData.rating) || 0,
                image: formData.image.trim(),
                variant: editingMovie.variant || 'portrait'
            });
        } else {
            // Add new
            addToWatchlist({
                id: Date.now(),
                title: formData.title.trim(),
                genres: formData.genre ? [formData.genre.trim()] : [],
                rating: parseFloat(formData.rating) || 0,
                image: formData.image.trim(),
                variant: 'portrait'
            });
        }

        setShowModal(false);
        setEditingMovie(null);
        setFormData({ title: '', genre: '', rating: '', image: '' });
    };

    return (
        <div className="w-full bg-[#181818] min-h-screen overflow-x-hidden pt-[90px] pb-20">
            <SEO title="Dashboard" description="Admin Dashboard - Kelola film di Chill Movie." />

            <div className="max-w-[1000px] mx-auto px-4 md:px-8">
                {/* Page Title */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-white text-3xl md:text-4xl font-black italic">
                        Admin Dashboard
                    </h1>
                    <button
                        onClick={handleAdd}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#2F80ED] text-white font-bold text-sm rounded-lg hover:bg-[#2F80ED]/80 transition"
                    >
                        <FaPlus size={12} />
                        Tambah Film
                    </button>
                </div>

                {/* Table */}
                <div className="w-full overflow-x-auto rounded-lg border border-white/10">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#2b2b2b] border-b border-white/10">
                                <th className="px-6 py-4 text-white/60 text-sm font-semibold uppercase tracking-wider">
                                    Cover
                                </th>
                                <th className="px-6 py-4 text-white/60 text-sm font-semibold uppercase tracking-wider">
                                    Judul
                                </th>
                                <th className="px-6 py-4 text-white/60 text-sm font-semibold uppercase tracking-wider">
                                    Genre
                                </th>
                                <th className="px-6 py-4 text-white/60 text-sm font-semibold uppercase tracking-wider">
                                    Rating
                                </th>
                                <th className="px-6 py-4 text-white/60 text-sm font-semibold uppercase tracking-wider text-center">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchlist.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-white/40 text-sm">
                                        Belum ada film. Klik "Tambah Film" untuk menambahkan.
                                    </td>
                                </tr>
                            ) : (
                                watchlist.map((movie) => (
                                    <tr
                                        key={movie.id}
                                        className="border-b border-white/5 hover:bg-white/5 transition"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="w-[60px] h-[80px] rounded overflow-hidden bg-white/5">
                                                {movie.image ? (
                                                    <img
                                                        src={movie.image}
                                                        alt={movie.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-white/20 text-[10px] text-center">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-white font-bold text-sm md:text-base">
                                                {movie.title}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-white/60 text-sm">
                                                {movie.genres?.join(', ') || '-'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-yellow-400 font-bold text-sm md:text-base">
                                                {movie.rating ? movie.rating.toFixed(1) : '-'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleEdit(movie)}
                                                    className="w-9 h-9 flex items-center justify-center bg-[#2F80ED]/20 border border-[#2F80ED]/40 rounded-md text-[#2F80ED] hover:bg-[#2F80ED]/30 transition"
                                                    aria-label={`Edit ${movie.title}`}
                                                >
                                                    <FaEdit size={14} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(movie.id)}
                                                    className="w-9 h-9 flex items-center justify-center bg-red-500/20 border border-red-500/40 rounded-md text-red-400 hover:bg-red-500/30 transition"
                                                    aria-label={`Hapus ${movie.title}`}
                                                >
                                                    <FaTrash size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Add/Edit */}
            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="bg-[#1f1f1f] border border-white/10 rounded-xl w-full max-w-[480px] p-6 md:p-8 shadow-2xl">
                        <h2 className="text-white text-xl font-bold mb-6">
                            {editingMovie ? 'Edit Film' : 'Tambah Film Baru'}
                        </h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/60 text-sm">Judul</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="h-[46px] px-4 bg-[#2b2b2b] border border-white/10 rounded-lg text-white outline-none focus:border-white/30 transition placeholder:text-white/30"
                                    placeholder="Masukkan judul film"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/60 text-sm">Genre</label>
                                <input
                                    type="text"
                                    value={formData.genre}
                                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                                    className="h-[46px] px-4 bg-[#2b2b2b] border border-white/10 rounded-lg text-white outline-none focus:border-white/30 transition placeholder:text-white/30"
                                    placeholder="Contoh: Action, Sci-Fi, Drama"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/60 text-sm">Rating</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    value={formData.rating}
                                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                    className="h-[46px] px-4 bg-[#2b2b2b] border border-white/10 rounded-lg text-white outline-none focus:border-white/30 transition placeholder:text-white/30"
                                    placeholder="0 - 10"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/60 text-sm">URL Gambar</label>
                                <input
                                    type="text"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="h-[46px] px-4 bg-[#2b2b2b] border border-white/10 rounded-lg text-white outline-none focus:border-white/30 transition placeholder:text-white/30"
                                    placeholder="https://image.tmdb.org/..."
                                />
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
                                >
                                    {editingMovie ? 'Simpan Perubahan' : 'Tambah Film'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition"
                                >
                                    Batal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
