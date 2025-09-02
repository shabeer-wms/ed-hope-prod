
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoDark from '../assets/edhop-logo-dark.png';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	// Scroll to top on navigation
	const handleNavClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Courses', href: '/courses' },
		{ name: 'Admissions', href: '/admissions' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Contact', href: '/contact' },
	];

	const isActive = (path: string) => location.pathname === path;

		return (
			<header className="bg-primary-900 shadow-lg sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<Link to="/" className="flex items-center space-x-3">
							<img src={logoDark} alt="Edhop Logo" className="h-12 w-auto" />
						</Link>

					{/* Desktop Navigation */}
								<nav className="hidden md:flex space-x-8">
									{navigation.map((item) => (
										<Link
											key={item.name}
											to={item.href}
											onClick={handleNavClick}
											className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
												isActive(item.href)
													? 'text-primary-900 bg-primary-50'
													: 'text-white hover:text-accent-500 hover:bg-primary-800'
											}`}
										>
											{item.name}
										</Link>
									))}
								</nav>

					{/* Mobile menu button */}
								<div className="md:hidden">
									<button
										onClick={() => setIsMenuOpen(!isMenuOpen)}
										className="text-white hover:text-accent-500"
									>
										{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
									</button>
								</div>
				</div>

				{/* Mobile Navigation */}
						{isMenuOpen && (
							<div className="md:hidden pb-4">
								<nav className="flex flex-col space-y-2">
									{navigation.map((item) => (
										<Link
											key={item.name}
											to={item.href}
											onClick={() => {
												setIsMenuOpen(false);
												handleNavClick();
											}}
											className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
												isActive(item.href)
													? 'text-primary-900 bg-primary-50'
													: 'text-white hover:text-accent-500 hover:bg-primary-800'
											}`}
										>
											{item.name}
										</Link>
									))}
								</nav>
							</div>
						)}
			</div>
		</header>
	);
};

export default Header;
