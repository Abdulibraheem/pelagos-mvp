import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
    onOpenWaitlist: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenWaitlist }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-display font-bold text-pelagos-900 tracking-tight">
                    Pelagos
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-pelagos-800 hover:text-pelagos-500 font-medium transition-colors">Features</a>
                    <a href="#how-it-works" className="text-pelagos-800 hover:text-pelagos-500 font-medium transition-colors">How it Works</a>
                    <a href="#categories" className="text-pelagos-800 hover:text-pelagos-500 font-medium transition-colors">Categories</a>

                    <button
                        onClick={onOpenWaitlist}
                        className="bg-pelagos-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-pelagos-800 transition-all transform hover:scale-105 shadow-lg shadow-pelagos-900/20"
                    >
                        Get Early Access
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-pelagos-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 shadow-lg animate-in slide-in-from-top-2">
                    <div className="flex flex-col space-y-4">
                        <a
                            href="#features"
                            className="text-lg font-medium text-pelagos-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-lg font-medium text-pelagos-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            How it Works
                        </a>
                        <a
                            href="#categories"
                            className="text-lg font-medium text-pelagos-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Categories
                        </a>
                        <button
                            onClick={() => {
                                onOpenWaitlist();
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-left text-lg font-medium text-amber-600"
                        >
                            Get Early Access
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
