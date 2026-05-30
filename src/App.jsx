import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import DaftarSaya from "./pages/DaftarSaya";
import SeriesPage from "./pages/SeriesPage";
import FilmPage from "./pages/FilmPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route element={<MainLayout />}>
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <HomePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/daftar-saya"
                            element={
                                <ProtectedRoute>
                                    <DaftarSaya />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/series"
                            element={
                                <ProtectedRoute>
                                    <SeriesPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/film"
                            element={
                                <ProtectedRoute>
                                    <FilmPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/profil"
                            element={
                                <ProtectedRoute>
                                    <ProfilePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <DashboardPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/subscription"
                            element={
                                <ProtectedRoute>
                                    <SubscriptionPage />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}

export default App;