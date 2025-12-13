import React from 'react';
import { Search, FileText, Landmark, Truck } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-6 h-6 text-white" />,
        title: "Browse & Discover",
        description: "Search thousands of verified products from accredited African suppliers."
    },
    {
        icon: <FileText className="w-6 h-6 text-white" />,
        title: "Request Quotes",
        description: "Connect directly with suppliers to negotiate prices and terms suited to your needs."
    },
    {
        icon: <Landmark className="w-6 h-6 text-white" />,
        title: "Secure Payment",
        description: "Funds are held in escrow and only released when quality and delivery are confirmed."
    },
    {
        icon: <Truck className="w-6 h-6 text-white" />,
        title: "Track Delivery",
        description: "Real-time updates on your shipment coupled with verified logistics partners."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 bg-pelagos-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pattern-dots"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How Pelagos Works</h2>
                    <p className="text-pelagos-200 text-lg max-w-2xl mx-auto font-light">
                        A streamlined process designed for international trade efficiency and security.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-pelagos-700/50 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-pelagos-800 border-4 border-pelagos-900 flex items-center justify-center mb-6 z-10 group-hover:bg-amber-500 transition-colors duration-300 shadow-xl">
                                {step.icon}
                            </div>
                            <div className="absolute top-0 right-0 -mr-4 text-6xl font-display font-bold text-white/5 opacity-0 group-hover:opacity-100 transition-opacity select-none">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-pelagos-200/80 font-light text-sm leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
