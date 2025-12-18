import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

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
                <div className={`flex items-center gap-2 text-2xl font-display font-bold tracking-tight ${isScrolled ? 'text-pelatrade-900' : 'text-white'}`}>
                    <Hexagon className="w-8 h-8 text-amber-500 fill-amber-500/20" strokeWidth={2.5} />
                    Pelatrade
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className={`font-medium transition-colors ${isScrolled ? 'text-pelatrade-800 hover:text-pelatrade-500' : 'text-pelatrade-100 hover:text-white'}`}>Features</a>
                    <a href="#how-it-works" className={`font-medium transition-colors ${isScrolled ? 'text-pelatrade-800 hover:text-pelatrade-500' : 'text-pelatrade-100 hover:text-white'}`}>How it Works</a>
                    <a href="#categories" className={`font-medium transition-colors ${isScrolled ? 'text-pelatrade-800 hover:text-pelatrade-500' : 'text-pelatrade-100 hover:text-white'}`}>Categories</a>

                    <button
                        onClick={onOpenWaitlist}
                        className={`px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg ${isScrolled
                            ? 'bg-pelatrade-900 text-white hover:bg-pelatrade-800 shadow-pelatrade-900/20'
                            : 'bg-white text-pelatrade-900 hover:bg-pelatrade-50 shadow-white/10'
                            }`}
                    >
                        Get Early Access
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isScrolled ? 'text-pelatrade-900' : 'text-white'}`}
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
                            className="text-lg font-medium text-pelatrade-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-lg font-medium text-pelatrade-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            How it Works
                        </a>
                        <a
                            href="#categories"
                            className="text-lg font-medium text-pelatrade-800"
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
