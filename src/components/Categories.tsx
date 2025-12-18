import React from 'react';
import { ArrowUpRight, Wheat, FlaskConical, Cpu, Shirt, Hammer, Info } from 'lucide-react';

const categories = [
    { name: "Agriculture", icon: <Wheat />, count: "1.2k+ Products" },
    { name: "Chemicals", icon: <FlaskConical />, count: "320+ Products" },
    { name: "Electronics", icon: <Cpu />, count: "250+ Products" },
    { name: "Textiles", icon: <Shirt />, count: "900+ Products" },
    { name: "Machinery", icon: <Hammer />, count: "150+ Products" },
    { name: "Food & Beverage", icon: <Info />, count: "2k+ Products" }, // Info icon as placeholder for F&B if no specific icon
];

const Categories: React.FC = () => {
    return (
        <section id="categories" className="py-24 bg-sand-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-pelatrade-900 mb-4">
                            Explore Categories
                        </h2>
                        <p className="text-gray-600 font-light text-lg">
                            Sourcing across virtually every major industry sector in Africa.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center space-x-2 text-pelatrade-900 font-medium hover:text-amber-600 transition-colors mt-6 md:mt-0">
                        <span>View all categories</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-amber-500/30 hover:shadow-lg transition-all cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-pelatrade-100 rounded-lg text-pelatrade-800 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                                    {category.icon}
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-amber-500 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-pelatrade-900 mb-1">{category.name}</h3>
                                <p className="text-xs text-gray-500 font-medium">{category.count}</p>
                            </div>
                        </div>
                    ))}

                    {/* Coming Soon Card */}
                    <div className="bg-pelatrade-50 p-6 rounded-xl border border-dashed border-pelatrade-200 flex flex-col justify-center items-center text-center opacity-75 hover:opacity-100 transition-opacity">
                        <div className="p-3 bg-white rounded-lg text-pelatrade-400 mb-4">
                            <ArrowUpRight className="w-6 h-6 rotate-45" />
                        </div>
                        <h3 className="text-lg font-bold text-pelatrade-900 mb-1">More Coming Soon</h3>
                        <p className="text-xs text-gray-500 font-medium">Expanding to new sectors</p>
                    </div>
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center space-x-2 text-pelatrade-900 font-medium border-b border-pelatrade-900 pb-1">
                        <span>View all categories</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
