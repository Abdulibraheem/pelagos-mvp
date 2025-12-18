import React from 'react';
import { ShieldCheck, MessageSquare, CreditCard, Award } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-pelatrade-900" />,
        title: "Verified Suppliers",
        description: "Every supplier undergoes a rigorous verification process to ensure legitimacy and product quality.",
        color: "bg-amber-100"
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-pelatrade-900" />,
        title: "Direct Communication",
        description: "Connect directly with producers and manufacturers. Negotiate terms without the middleman.",
        color: "bg-green-100" // approximated from pelatrade palette
    },
    {
        icon: <CreditCard className="w-8 h-8 text-pelatrade-900" />,
        title: "Flexible Payments",
        description: "Secure transactions via bank transfer or stablecoins, held in escrow until delivery is confirmed.",
        color: "bg-blue-100"
    },
    {
        icon: <Award className="w-8 h-8 text-pelatrade-900" />,
        title: "Quality Certifications",
        description: "Access verified organic, fair trade, and industry-specific certifications for all listed products.",
        color: "bg-purple-100"
    }
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-sand-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-pelatrade-900 mb-6">
                        Everything you need to source with confidence
                    </h2>
                    <p className="text-lg text-gray-600 font-light">
                        We've built the infrastructure so you can focus on the trade. Security, transparency, and trust at every step.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
                            <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-pelatrade-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
