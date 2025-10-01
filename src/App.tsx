import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import BtechCreditTransferPage from './pages/BtechCreditTransferPage';
import CheckEligibilityPage from './pages/CheckEligibilityPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { Navigate } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  const isAdminAuthenticated = localStorage.getItem('admin-auth') === 'true';
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public pages with header/footer */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-neutral-50 font-poppins">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/admissions" element={<AdmissionsPage />} />
                  <Route path="/btech-credit-transfer" element={<BtechCreditTransferPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/check-eligibility" element={<CheckEligibilityPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
        {/* Admin pages without header/footer */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={isAdminAuthenticated ? <AdminDashboardPage /> : <Navigate to="/admin/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;