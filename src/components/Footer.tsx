import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-pelatrade-900 text-pelatrade-200 py-12 border-t border-pelatrade-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <div className="text-2xl font-display font-bold text-white mb-2">PelaTrade</div>
                    <p className="text-sm font-light max-w-xs">
                        Connecting African potential with global opportunity.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm font-light">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="mailto:support@pelatrade.com" className="hover:text-white transition-colors">Contact Support</a>
                </div>

                <div className="mt-8 md:mt-0 text-xs text-pelatrade-700">
                    &copy; {new Date().getFullYear()} PelaTrade. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
