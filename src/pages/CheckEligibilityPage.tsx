import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const CheckEligibilityPage = () => {
    const [eligForm, setEligForm] = useState({
        name: '',
        phone: '',
        email: '',
        branch: '',
        university: '',
        reason: '',
        passed: ''
    });
    type EligResult = {
        universityName?: string;
        minimumCgpa?: number;
        requiredDocs?: string[];
        policyUrl?: string;
        notes?: string;
        error?: string;
    };
    const [eligResult, setEligResult] = useState<EligResult | null>(null);
    const [eligLoading, setEligLoading] = useState(false);
    const [eligError, setEligError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleEligChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEligForm(f => ({ ...f, [name]: value }));
    };

    const handleEligSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEligLoading(true);
        setEligResult(null);
        setEligError('');
        try {
            const res = await fetch('https://api.edhop.in/api/check-eligibility', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Appwrite-Project': 'pro26',
                },
                body: JSON.stringify({
                    branch: eligForm.branch,
                    university: eligForm.university,
                    reason: eligForm.reason,
                    name: eligForm.name,
                    phone: eligForm.phone,
                    email: eligForm.email,
                    passed: Number(eligForm.passed)
                })
            });
            if (!res.ok) throw new Error('Network response was not ok');
            const execution = await res.json();
            if (execution.status === 'failed') throw new Error(execution.errors || 'Function execution failed');
            setEligResult(execution);
            setShowModal(true);
        } catch (err) {
            setEligError('Something went wrong. Please try again.');
        }
        setEligLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Check Your Eligibility</h2>
                <form className="space-y-4" onSubmit={handleEligSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" name="name" value={eligForm.name} onChange={handleEligChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <input type="tel" name="phone" value={eligForm.phone} onChange={handleEligChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">No of Papers Passed *</label>
                        <input type="number" name="passed" value={eligForm.passed} onChange={handleEligChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input type="email" name="email" value={eligForm.email} onChange={handleEligChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Engineering Branch *</label>
                        <input type="text" name="branch" value={eligForm.branch} onChange={handleEligChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Institution/University Name *</label>
                        <input type="text" name="university" value={eligForm.university} onChange={handleEligChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Transfer</label>
                        <textarea rows={3} name="reason" value={eligForm.reason} onChange={handleEligChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button type="submit" className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" disabled={eligLoading}>
                            {eligLoading ? 'Checking...' : 'Check My Eligibility'}
                        </button>
                    </div>
                </form>
                {eligError && <div className="mt-4 text-red-600">{eligError}</div>}
            </div>
            {/* Modal for result */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-2 sm:p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg mx-auto relative animate-fadeIn flex flex-col" style={{ maxHeight: '90vh' }}>
                        <div className="overflow-y-auto" style={{ maxHeight: '80vh', padding: '1.5rem' }}>
                            <button
                                onClick={() => window.location.href = '/btech-credit-transfer'}
                                className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full"
                                aria-label="Close modal"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            <div className="flex flex-col items-center text-center mb-4 mt-2">
                                <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                                <h4 className="text-xl font-bold text-green-700 mb-1">Eligibility Result</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-lg p-3 text-xs sm:text-sm mb-2">
                                    <strong>Note:</strong> This is AI generated result, please verify it manually.
                                </div>
                                {eligResult?.error ? (
                                    <p className="text-red-600 text-base font-medium">{eligResult.error}</p>
                                ) : (
                                    <>
                                        {eligResult?.universityName && (
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1">
                                                <span className="font-semibold text-gray-700">University:</span>
                                                <span className="text-gray-900 break-words">{eligResult.universityName}</span>
                                            </div>
                                        )}
                                        {eligResult?.minimumCgpa !== undefined && (
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1">
                                                <span className="font-semibold text-gray-700">Minimum CGPA:</span>
                                                <span className="text-gray-900">{eligResult.minimumCgpa}</span>
                                            </div>
                                        )}
                                        {eligResult?.requiredDocs && eligResult.requiredDocs.length > 0 && (
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1">
                                                <span className="font-semibold text-gray-700">Required Documents:</span>
                                                <span className="text-gray-900 break-words">{eligResult.requiredDocs.join(', ')}</span>
                                            </div>
                                        )}
                                        {eligResult?.policyUrl && (
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1">
                                                <span className="font-semibold text-gray-700">Policy:</span>
                                                <a href={eligResult.policyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">View Policy</a>
                                            </div>
                                        )}
                                        {eligResult?.notes && (
                                            <div className="bg-gray-50 rounded-lg p-3 text-gray-700 text-sm mt-2 break-words">{eligResult.notes}</div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={() => window.location.href = '/btech-credit-transfer'}
                            className="mt-5 bg-primary-600 m-2 pt-3 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckEligibilityPage;
