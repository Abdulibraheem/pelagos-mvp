import React from 'react';
import { ArrowRight, ShieldCheck, Globe, TrendingUp } from 'lucide-react';

interface HeroProps {
    onOpenWaitlist: (type: 'buyer' | 'supplier') => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
    return (
        <div className="relative bg-pelatrade-900 min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pelatrade-800/50 to-transparent"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-in slide-in-from-left duration-700">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pelatrade-800/50 border border-pelatrade-700 text-pelatrade-100 text-sm">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span>Launching Q2 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                        Global Access to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">African Exports</span>
                    </h1>

                    <p className="text-xl text-pelatrade-100/90 font-light max-w-lg leading-relaxed">
                        The trusted B2B marketplace connecting verified African suppliers with global buyers. Secure payments, transparent logistics, and quality assurance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            onClick={() => onOpenWaitlist('buyer')}
                            className="px-8 py-4 bg-amber-500 text-pelatrade-900 rounded-lg font-semibold hover:bg-amber-400 transition-all flex items-center justify-center space-x-2 group shadow-lg shadow-amber-500/20"
                        >
                            <span>Join as Buyer</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => onOpenWaitlist('supplier')}
                            className="px-8 py-4 bg-transparent border border-pelatrade-500 text-white rounded-lg font-semibold hover:bg-pelatrade-800 hover:border-pelatrade-400 transition-all flex items-center justify-center"
                        >
                            Join as Supplier
                        </button>
                    </div>

                    <div className="pt-8 border-t border-pelatrade-800/50 grid grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">100+</span>
                            <span className="text-sm text-pelatrade-100/70">Suppliers</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">$100k+</span>
                            <span className="text-sm text-pelatrade-100/70">Pipeline Value</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">54</span>
                            <span className="text-sm text-pelatrade-100/70">African Nations</span>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block relative animate-in slide-in-from-right duration-1000 delay-200">
                    {/* Abstract Map/Globe Representation */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pelatrade-800 to-pelatrade-700 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute inset-4 border border-pelatrade-700/30 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Globe className="w-64 h-64 text-pelatrade-700/20" />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-1/4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl transform rotate-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-amber-500/20 rounded-lg">
                                    <ShieldCheck className="w-6 h-6 text-amber-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-pelatrade-100/70">Status</div>
                                    <div className="text-sm font-semibold text-white">Verified Supplier</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-1/4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl transform -rotate-3">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-pelatrade-100/70">Growth</div>
                                    <div className="text-sm font-semibold text-white">Global Reach</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
