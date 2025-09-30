import { GraduationCap, Clock, CheckCircle, Globe, BookOpen, ArrowRight, FileText, Award, Calculator, X } from 'lucide-react';
import { useState } from 'react';

const BtechCreditTransferPage = () => {
    const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);
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
            const res = await fetch('https://api.edhop.in/check-eligibility', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
            const data = await res.json();
            setEligResult(data);
        } catch (err) {
            setEligError('Something went wrong. Please try again.');
        }
        setEligLoading(false);
    };
    const transferProcess = [
        {
            step: 1,
            title: "Application to University",
            description: "Apply for admission to your desired university for evaluation of credits. Check eligibility before filling the application form.",
            icon: <FileText className="h-6 w-6" />
        },
        {
            step: 2,
            title: "Upload/Send Transcripts",
            description: "Upload your previous education transcripts or ask your current institution Registrar to send transcripts to the university.",
            icon: <Globe className="h-6 w-6" />
        },
        {
            step: 3,
            title: "Transcript Assessment",
            description: "University checks if courses from previous university match with new university courses and evaluates academic scores.",
            icon: <BookOpen className="h-6 w-6" />
        },
        {
            step: 4,
            title: "Credit Evaluation",
            description: "Receive notification with details of how many credits can be transferred according to mentioned eligibility criteria.",
            icon: <CheckCircle className="h-6 w-6" />
        }
    ];

    const benefits = [
        {
            icon: <Clock className="h-8 w-8" />,
            title: "Continue Education",
            description: "Seamlessly continue your BTech education without losing academic progress"
        },
        {
            icon: <Calculator className="h-8 w-8" />,
            title: "UGC Approved",
            description: "Transfer to UGC-AICTE approved universities ensuring quality education standards"
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "All Branches Accepted",
            description: "Credit transfer available for students from any engineering branch"
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: "Recognized Degree",
            description: "Earn degrees recognized for government & private jobs in India and abroad"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">BTech Credit Transfer</h1>
                        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                            Continue your B-Tech by transferring course credits to a new UGC-approved university. An UGC-AICTE approved program.
                        </p>
                    </div>
                </div>
            </section>


            {/* What is Academic Credit Transfer*/}
            <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center bg-primary-100 rounded-full w-20 h-20 mb-4">
                            <BookOpen className="h-10 w-10 text-primary-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">What is Academic Credit Transfer?</h2>
                        <p className="text-lg text-primary-700">A flexible pathway to continue your BTech without losing progress</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1 flex flex-col justify-center h-full">
                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-accent-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-base">Allows students to transfer completed credits from one university to another, continuing their education seamlessly.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-accent-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-base">Ideal for students facing relocation, health issues, dissatisfaction, or personal circumstances.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-accent-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-base">No universal model—each university evaluates and matches credits based on their own criteria.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-accent-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-base">Helps you complete your BTech degree at a new UGC-approved institution without starting over.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0 flex flex-col justify-center h-full">
                            <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 text-center flex flex-col justify-center w-[280px]">
                                <h3 className="text-xl font-bold text-primary-700 mb-2">Key Points</h3>
                                <ul className="space-y-3 text-gray-700 text-base">
                                    <li>✔ Transfer credits for completed subjects</li>
                                    <li>✔ Continue studies without academic loss</li>
                                    <li>✔ Recognized by UGC & AICTE</li>
                                    <li>✔ Flexible for all engineering branches</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Credit Transfer?</h2>
                        <p className="text-lg text-gray-600">Maximize your education investment with smart credit transfers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits You Gain */}
            <section className="py-16 bg-primary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits You Gain</h2>
                        <p className="text-lg text-gray-600">Comprehensive advantages of our BTech credit transfer program</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Award className="h-6 w-6 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Recognised University Certification</h3>
                            <p className="text-gray-600 text-sm">Get your degree from UGC-approved universities with full recognition and credibility.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Globe className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Valid Certification for Abroad Attestation</h3>
                            <p className="text-gray-600 text-sm">Your degree is valid for international attestation and recognition abroad.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <GraduationCap className="h-6 w-6 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Attaining Eligibility for Higher Studies</h3>
                            <p className="text-gray-600 text-sm">Qualify for postgraduate programs, research courses, and advanced studies.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Valid for Government Sector Benefits</h3>
                            <p className="text-gray-600 text-sm">Eligible for promotions, government licenses, and various government examinations.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="h-6 w-6 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Simplified Syllabus</h3>
                            <p className="text-gray-600 text-sm">Study with an easy-to-understand and industry-relevant curriculum structure.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <ArrowRight className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Easy Credit Transfer</h3>
                            <p className="text-gray-600 text-sm">Seamless and hassle-free process to transfer your academic credits.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Don't Compromise Your Existing Jobs</h3>
                            <p className="text-gray-600 text-sm">Continue working while completing your degree through flexible study options.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Eligible for WES Approval</h3>
                            <p className="text-gray-600 text-sm">Your degree qualifies for World Education Services evaluation for international recognition.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Transfer Process */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Credit Transfer Process</h2>
                        <p className="text-lg text-gray-600">Simple steps to transfer your credits and continue your education</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {transferProcess.map((step, index) => (
                            <div key={step.step} className="relative">
                                <div className="text-center">
                                    <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                                        {step.step}
                                    </div>
                                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                                {index < transferProcess.length - 1 && (
                                    <div className="hidden lg:block absolute top-6 left-full w-full">
                                        <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility For Admission</h2>
                        <p className="text-lg text-gray-600">Requirements for BTech credit transfer programs</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="grid grid-cols-1 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Requirements</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Student pursuing B.E./B.Tech. in any branch</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Institution must be duly approved by AICTE</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Private/Government University meeting grade equivalence criteria</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Must meet grade equivalence criteria of partner universities</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accreditations */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Accreditations & Approvals</h2>
                        <p className="text-lg text-gray-600">Our partner universities are approved by recognized authorities</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">UGC Approved</h3>
                            <p className="text-gray-600 text-sm">University Grants Commission</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AIU Member</h3>
                            <p className="text-gray-600 text-sm">Association of Indian Universities</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AICTE Approved</h3>
                            <p className="text-gray-600 text-sm">All India Council for Technical Education</p>
                        </div>

                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Government Approved</h3>
                            <p className="text-gray-600 text-sm">State Government Recognition</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Get answers to common questions about BTech credit transfer</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">How Long Has Been EduAcharya?</h3>
                            <p className="text-gray-700">
                                Acharya has been in the education field since 2004. Acharya has incorporated as a private limited company under the Ministry of Corporate Affairs, Government of India in the name of "EduAcharya Institute of Advanced Management & Technology Pvt Ltd" in 2019.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">What is Inter University Credit Transfer?</h3>
                            <p className="text-gray-700">
                                Inter University Credit Transfer is a process that allows students to continue their education at a different university by transferring academic credits earned at their previous institution. This enables students to complete their degree without losing academic progress.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">What are the Benefits of Credit Transfer?</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                    <span>Continue education without losing academic progress</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                    <span>Access to better quality institutions</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                    <span>Flexibility due to personal or family circumstances</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                    <span>UGC-approved degree recognition</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">What is the Duration of Credit Transfer?</h3>
                            <p className="text-gray-700">
                                The duration depends on your entry level and the number of credits that can be transferred from your previous institution. The remaining semester duration will be determined after credit evaluation by the new university.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">How to Check Eligibility for BTech Credit Transfer?</h3>
                            <p className="text-gray-700">
                                You can check your eligibility by ensuring you are pursuing B.E./B.Tech in any branch from an AICTE-approved institution. Contact our counselors for a detailed eligibility assessment based on your current academic status and the number of papers passed.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Does EduAcharya Assist Learners from Beginning to End?</h3>
                            <p className="text-gray-700">
                                Yes, EduAcharya provides complete assistance from the initial application process through transcript evaluation, credit transfer, and until course completion. Our dedicated coordinators guide students throughout their academic journey.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Are Partner Universities' Courses UGC Approved?</h3>
                            <p className="text-gray-700">
                                Yes, all our partner universities are UGC-approved institutions. The courses are also approved by AICTE, ensuring that your degree meets all regulatory standards and is recognized across India.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Is Credit Transfer Recognized for Government & Private Jobs?</h3>
                            <p className="text-gray-700">
                                Yes, transferring course credits is fully recognized for both government and private jobs in India and abroad, as the degrees are from UGC-approved universities that meet all regulatory requirements.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Is Credit Transfer Recognized for Higher Studies in India?</h3>
                            <p className="text-gray-700">
                                Absolutely. The degrees obtained through credit transfer from our partner universities are fully recognized for higher studies in India, including for admission to postgraduate programs and research courses.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Are Partner Universities Recognized by WES Canada/USA Credentials?</h3>
                            <p className="text-gray-700">
                                Our partner universities are UGC-approved Indian institutions. For international credential recognition, students should verify specific requirements with WES or other credential evaluation services for their intended destination country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Continue Your BTech Journey?</h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Talk with our counsellor and get personalized guidance for your credit transfer process
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919037346234?text=Hi,%20I%20would%20like%20to%20talk%20about%20BTech%20credit%20transfer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
                        >
                            Talk With Our Counsellor
                        </a>
                        <button
                            onClick={() => setIsEligibilityModalOpen(true)}
                            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg transition-all"
                        >
                            Check Eligibility
                        </button>
                    </div>
                </div>
            </section>

            {/* Eligibility Check Modal */}
            {isEligibilityModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            {/* Modal Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Check Your Eligibility</h2>
                                <button
                                    onClick={() => setIsEligibilityModalOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="space-y-6">
                                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-primary-700 mb-3">Eligibility Criteria</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                            <span>Student pursuing B.E./B.Tech. in any branch</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                            <span>Institution must be duly approved by AICTE</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                            <span>Private/Government University meeting grade equivalence criteria</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                                            <span>Must meet grade equivalence criteria of partner universities</span>
                                        </li>
                                    </ul>
                                </div>

                        <form className="space-y-4" onSubmit={handleEligSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={eligForm.name}
                                        onChange={handleEligChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={eligForm.phone}
                                        onChange={handleEligChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    No of Papers Passed *
                                </label>
                                <input
                                    type="number"
                                    name="passed"
                                    value={eligForm.passed}
                                    onChange={handleEligChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Enter the number of papers passed"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={eligForm.email}
                                    onChange={handleEligChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Engineering Branch *
                                </label>
                                <input
                                    type="text"
                                    name="branch"
                                    value={eligForm.branch}
                                    onChange={handleEligChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Enter your branch (e.g. Computer Science)"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Institution/University Name *
                                </label>
                                <input
                                    type="text"
                                    name="university"
                                    value={eligForm.university}
                                    onChange={handleEligChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Enter your current college/university name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Reason for Transfer
                                </label>
                                <textarea
                                    rows={3}
                                    name="reason"
                                    value={eligForm.reason}
                                    onChange={handleEligChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Please describe why you want to transfer (optional)"
                                ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                    disabled={eligLoading}
                                >
                                    {eligLoading ? 'Checking...' : 'Check My Eligibility'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEligibilityModalOpen(false)}
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                                    disabled={eligLoading}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                        {/* API Result */}
                        {eligResult && (
                            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                                <h4 className="text-lg font-bold text-green-800 mb-2">Eligibility Result</h4>
                                {eligResult.error ? (
                                    <p className="text-red-600">{eligResult.error}</p>
                                ) : (
                                    <div className="space-y-2">
                                        <div><span className="font-semibold">University:</span> {eligResult.universityName}</div>
                                        <div><span className="font-semibold">Minimum CGPA:</span> {eligResult.minimumCgpa}</div>
                                        <div><span className="font-semibold">Required Documents:</span> {eligResult.requiredDocs && eligResult.requiredDocs.join(', ')}</div>
                                        {eligResult.policyUrl && (
                                            <div><a href={eligResult.policyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Policy</a></div>
                                        )}
                                        {eligResult.notes && (
                                            <div className="text-gray-700">{eligResult.notes}</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        {eligError && (
                            <div className="mt-4 text-red-600">{eligError}</div>
                        )}


                    </div>
                </div>
                    </div>
                </div >
            )}
        </div >
    );
};

export default BtechCreditTransferPage;