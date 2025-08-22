import React, { useState } from 'react';
import { CheckCircle, FileText, Calendar, User, Mail, Phone, BookOpen, ArrowRight } from 'lucide-react';

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const admissionSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Book a free consultation to discuss your goals and course options",
      icon: <User className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Course Selection",
      description: "Choose the right course based on your requirements and career goals",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Document Submission",
      description: "Submit required documents and complete the application form",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Assessment",
      description: "Take an initial assessment test to determine your current level",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Enrollment",
      description: "Complete payment and confirm your batch timing",
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  const requiredDocuments = [
    "Academic transcripts/marksheets",
    "Passport-size photographs",
    "Valid ID proof (Passport/Aadhar/Driving License)",
    "Previous English proficiency scores (if any)",
    "Statement of Purpose (for Study Abroad programs)",
    "Work experience certificates (if applicable)"
  ];

  const importantDates = [
    { event: "Winter Batch Registration", date: "December 1 - 31, 2024", status: "Open" },
    { event: "Spring Batch Registration", date: "March 1 - 31, 2025", status: "Upcoming" },
    { event: "Summer Batch Registration", date: "June 1 - 30, 2025", status: "Upcoming" },
    { event: "IELTS Mock Test", date: "Every Saturday", status: "Ongoing" }
  ];

  const courses = [
    "IELTS Training",
    "PTE Coaching",
    "TOEFL Preparation",
    "Study Abroad Guidance",
    "Skill Development Programs",
    "Business English"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Start your journey towards global opportunities. Simple process, expert guidance, guaranteed results.
            </p>
            <div className="inline-flex items-center bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold">
              <Calendar className="h-5 w-5 mr-2" />
              Winter Batch 2024 - Applications Open
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600">Simple steps to start your educational journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Step {step.step}</h3>
                  <h4 className="text-md font-semibold text-primary-600 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-primary-200 -z-10">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents & Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Required Documents */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-primary-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Required Documents</h2>
              </div>
              <ul className="space-y-3">
                {requiredDocuments.map((document, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>Note:</strong> All documents should be in original along with photocopies. 
                  International students may need additional documentation for visa purposes.
                </p>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-primary-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Important Dates</h2>
              </div>
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900">{date.event}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        date.status === 'Open' ? 'bg-accent-100 text-accent-800' :
                        date.status === 'Ongoing' ? 'bg-primary-100 text-primary-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {date.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{date.date}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent-50 rounded-lg">
                <p className="text-sm text-accent-700">
                  <strong>Early Bird Discount:</strong> Apply 30 days before batch start date and get 15% discount on course fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-lg text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interested In *
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your goals, preferred timing, or any specific requirements..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to our terms and conditions and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help with Your Application?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-accent-400 mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-primary-100">+1 (555) 123-4567</p>
              <p className="text-sm text-primary-200">Mon-Sat, 9 AM - 6 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-accent-400 mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-primary-100">admissions@edhopeducation.com</p>
              <p className="text-sm text-primary-200">Response within 24 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <User className="h-8 w-8 text-accent-400 mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-primary-100">Schedule a free consultation</p>
              <p className="text-sm text-primary-200">Book online or call</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;