import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	// Scroll to top on navigation
	const handleNavClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setIsMobileMenuOpen(false);
	};

	return (
		<header className="bg-white shadow sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0 flex items-center">
						<Link to="/" onClick={handleNavClick} className="text-2xl font-bold text-primary-700">
							Edhop
						</Link>
					</div>
					<nav className="hidden md:flex space-x-8">
						<Link
							to="/"
							onClick={handleNavClick}
							className={`hover:text-accent-600 font-medium transition-colors ${location.pathname === '/' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Home
						</Link>
						<Link
							to="/about"
							onClick={handleNavClick}
							className={`hover:text-accent-600 font-medium transition-colors ${location.pathname === '/about' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							About
						</Link>
						<Link
							to="/courses"
							onClick={handleNavClick}
							className={`hover:text-accent-600 font-medium transition-colors ${location.pathname === '/courses' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Courses
						</Link>
						<Link
							to="/gallery"
							onClick={handleNavClick}
							className={`hover:text-accent-600 font-medium transition-colors ${location.pathname === '/gallery' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Gallery
						</Link>
						<Link
							to="/admissions"
							onClick={handleNavClick}
							className={`hover:text-accent-600 font-medium transition-colors ${location.pathname === '/admissions' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Admissions
						</Link>
						<Link
							to="/contact"
							onClick={handleNavClick}
							className={`hover:text-accent-600 font-medium transition-colors ${location.pathname === '/contact' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Contact
						</Link>
					</nav>
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-primary-700 focus:outline-none"
							aria-label="Toggle menu"
						>
							<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								{isMobileMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white shadow-lg">
					<nav className="flex flex-col space-y-2 px-4 py-4">
						<Link
							to="/"
							onClick={handleNavClick}
							className={`py-2 px-2 rounded hover:bg-accent-50 font-medium transition-colors ${location.pathname === '/' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Home
						</Link>
						<Link
							to="/about"
							onClick={handleNavClick}
							className={`py-2 px-2 rounded hover:bg-accent-50 font-medium transition-colors ${location.pathname === '/about' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							About
						</Link>
						<Link
							to="/courses"
							onClick={handleNavClick}
							className={`py-2 px-2 rounded hover:bg-accent-50 font-medium transition-colors ${location.pathname === '/courses' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Courses
						</Link>
						<Link
							to="/gallery"
							onClick={handleNavClick}
							className={`py-2 px-2 rounded hover:bg-accent-50 font-medium transition-colors ${location.pathname === '/gallery' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Gallery
						</Link>
						<Link
							to="/admissions"
							onClick={handleNavClick}
							className={`py-2 px-2 rounded hover:bg-accent-50 font-medium transition-colors ${location.pathname === '/admissions' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Admissions
						</Link>
						<Link
							to="/contact"
							onClick={handleNavClick}
							className={`py-2 px-2 rounded hover:bg-accent-50 font-medium transition-colors ${location.pathname === '/contact' ? 'text-accent-600' : 'text-primary-700'}`}
						>
							Contact
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
