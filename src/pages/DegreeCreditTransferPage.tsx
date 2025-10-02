import { GraduationCap, ArrowRightLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, BookCheck, School } from 'lucide-react';

const DegreeCreditTransferPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Degree Credit Transfer in India: Your Complete Guide</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            A UGC-approved system to transfer your academic credits and continue your education seamlessly.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Degree Credit Transfer?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Simply put, it’s a process where your academic performance, measured in credits from your previous university, is officially recognized and applied to a new degree program. This means you don't have to repeat courses you have already passed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Think of it as a way to build on your existing foundation. As long as both your former and new universities are UGC-recognized, this process is valid and your degree will be fully recognized in India for both further studies and job applications.
            </p>
          </div>
        </div>
      </section>

      {/* Why Consider It? */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Should You Consider It?</h2>
            <p className="text-lg text-gray-600">Unlock flexibility, save resources, and keep your career path on track.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time and Money</h3>
              <p className="text-gray-600">Reduce your time in college and save on tuition fees by not retaking courses.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <ArrowRightLeft className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enjoy Educational Mobility</h3>
              <p className="text-gray-600">Flexibility to switch institutions for personal, career, or academic reasons.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legally Recognized Degree</h3>
              <p className="text-gray-600">Your degree is fully valid for jobs and further studies in India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the Process Works</h2>
            <p className="text-lg text-gray-600">A step-by-step guide to a smooth transition.</p>
          </div>
          <div className="relative mt-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center relative">
              <div className="relative flex flex-col items-center bg-white px-2">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <ArrowRight className="hidden md:block absolute top-6 -right-6 h-6 w-6 text-gray-300" />
                <h3 className="text-lg font-semibold mb-2">Check Eligibility</h3>
                <p className="text-gray-600 text-sm max-w-xs">Ensure you meet the basic academic requirements with no major backlogs.</p>
              </div>
              <div className="relative flex flex-col items-center bg-white px-2">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <ArrowRight className="hidden md:block absolute top-6 -right-6 h-6 w-6 text-gray-300" />
                <h3 className="text-lg font-semibold mb-2">Gather Documents</h3>
                <p className="text-gray-600 text-sm max-w-xs">Collect transcripts, TC, migration certificate, and syllabus.</p>
              </div>
              <div className="relative flex flex-col items-center bg-white px-2">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <ArrowRight className="hidden md:block absolute top-6 -right-6 h-6 w-6 text-gray-300" />
                <h3 className="text-lg font-semibold mb-2">Apply to University</h3>
                <p className="text-gray-600 text-sm max-w-xs">State clearly that you are seeking a credit transfer in your application.</p>
              </div>
              <div className="relative flex flex-col items-center bg-white px-2">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
                <ArrowRight className="hidden md:block absolute top-6 -right-6 h-6 w-6 text-gray-300" />
                <h3 className="text-lg font-semibold mb-2">Credit Evaluation</h3>
                <p className="text-gray-600 text-sm max-w-xs">The university's academic committee will review your course equivalency.</p>
              </div>
              <div className="relative flex flex-col items-center bg-white px-2">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">5</div>
                <h3 className="text-lg font-semibold mb-2">Receive Approval</h3>
                <p className="text-gray-600 text-sm max-w-xs">Get official confirmation of accepted credits and enroll.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Things to Remember */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Things to Remember</h2>
            <p className="text-lg text-gray-600">Important factors that can influence the outcome.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <BookCheck className="h-6 w-6 text-accent-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Course Equivalency</h3>
              </div>
              <p className="text-gray-600">Credits are only accepted for courses that closely match the new university's curriculum.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <School className="h-6 w-6 text-accent-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">UGC Accreditation</h3>
              </div>
              <p className="text-gray-600">Both institutions must be UGC-recognized for your degree to be valid.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <AlertTriangle className="h-6 w-6 text-accent-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Credit Limits</h3>
              </div>
              <p className="text-gray-600">Most universities have a cap on the number of credits they will accept. Check their policy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-accent-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Same Course/Branch</h3>
              </div>
              <p className="text-gray-600">Transfer is generally only permitted if you continue in the same field of study.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DegreeCreditTransferPage;
