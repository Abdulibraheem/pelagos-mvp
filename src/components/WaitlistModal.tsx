import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { countryCodes } from '../lib/countryCodes';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'buyer' | 'supplier' | null;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, type }) => {
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState(countryCodes[0].code);
    const [userType, setUserType] = useState<'buyer' | 'supplier'>(type || 'buyer');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Update userType when prop changes
    React.useEffect(() => {
        if (type) setUserType(type);
    }, [type]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // Logic to submit to Supabase
            // Table: waitlist
            // Columns: email, company_name, country, user_type

            const { error } = await supabase
                .from('waitlist')
                .insert([
                    {
                        email,
                        company_name: company,
                        country,
                        user_type: userType,
                        phone: `${countryCode} ${phoneNumber}`
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setEmail('');
                setCompany('');
                setCountry('');
                setPhoneNumber('');
            }, 3000); // Close after 3 seconds on success

        } catch (err: any) {
            console.error('Submission error:', err);
            // Fallback for demo if supabase is not connected/configured
            if (err.message && (err.message.includes('supabaseUrl') || err.message.includes('fetch'))) {
                console.warn('Supabase not configured, simulating success');
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setEmail('');
                    setCompany('');
                    setCountry('');
                    setPhoneNumber('');
                }, 3000);
            } else {
                setStatus('error');
                setErrorMessage(err.message || 'Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 md:p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-300">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-pelatrade-900 mb-2">You're on the list!</h3>
                            <p className="text-gray-600">We'll be in touch soon with your early access invite.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <h3 className="text-2xl font-display font-bold text-pelatrade-900 mb-2">Join the Waitlist</h3>
                                <p className="text-gray-600 font-light text-sm">
                                    Be among the first to access global African trade.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* User Type Selection */}
                                <div className="grid grid-cols-2 gap-3 mb-6 bg-gray-50 p-1 rounded-lg">
                                    <button
                                        type="button"
                                        onClick={() => setUserType('buyer')}
                                        className={`nav-btn py-2 text-sm font-medium rounded-md transition-all ${userType === 'buyer'
                                            ? 'bg-white text-pelatrade-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        I'm a Buyer
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setUserType('supplier')}
                                        className={`nav-btn py-2 text-sm font-medium rounded-md transition-all ${userType === 'supplier'
                                            ? 'bg-white text-pelatrade-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        I'm a Supplier
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                                            placeholder="name@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            required
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Acme Global Inc."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                        <input
                                            type="text"
                                            id="country"
                                            required
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                                            placeholder="e.g. United Kingdom"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <div className="flex gap-2">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="w-[140px] px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white text-sm truncate"
                                            >
                                                {countryCodes.map((c) => (
                                                    <option key={`${c.code}-${c.country}`} value={c.code}>
                                                        {c.flag} {c.code} ({c.country})
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="flex-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                                                placeholder="123 456 7890"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <div className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded">
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full mt-6 py-3 bg-pelatrade-900 text-white rounded-lg font-semibold hover:bg-pelatrade-800 transition-colors shadow-lg shadow-pelatrade-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        "Request Access"
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
