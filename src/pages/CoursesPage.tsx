import React from 'react';
import { BookOpen, Clock, Users, Award, Globe, Briefcase, MessageSquare, ChevronRight } from 'lucide-react';

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "IELTS Training",
      category: "Language Testing",
      icon: <Award className="h-8 w-8" />,
      description: "Comprehensive IELTS preparation program designed to help you achieve your target band score with expert guidance and proven strategies.",
      features: [
        "All 4 modules covered (Listening, Reading, Writing, Speaking)",
        "Mock tests and practice sessions",
        "Individual feedback and improvement plans",
        "Study materials and resources included"
      ],
      eligibility: "12th pass or equivalent",
      duration: "2-3 months",
      batchSize: "8-12 students",
      price: "$299",
      popular: true
    },
    {
      id: 2,
      title: "Study Abroad Guidance",
      category: "Consultancy",
      icon: <Globe className="h-8 w-8" />,
      description: "Complete end-to-end assistance for students planning to study overseas, from university selection to visa processing.",
      features: [
        "University and course selection",
        "Application assistance",
        "Visa guidance and documentation",
        "Pre-departure orientation"
      ],
      eligibility: "Graduates and undergraduates",
      duration: "3-6 months",
      batchSize: "Individual consultation",
      price: "$499"
    },
    {
      id: 3,
      title: "Skill Development Programs",
      category: "Professional Development",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Industry-relevant skill development courses to enhance your employability and career prospects in the global job market.",
      features: [
        "IT and digital skills training",
        "Soft skills development",
        "Industry certifications",
        "Job placement assistance"
      ],
      eligibility: "12th pass or working professionals",
      duration: "3-6 months",
      batchSize: "15-20 students",
      price: "$399"
    },
    {
      id: 4,
      title: "PTE Coaching",
      category: "Language Testing",
      icon: <MessageSquare className="h-8 w-8" />,
      description: "Specialized PTE Academic coaching with computer-based training and AI-powered practice sessions.",
      features: [
        "Computer-based practice sessions",
        "AI-powered speaking practice",
        "Detailed performance analytics",
        "Flexible timing options"
      ],
      eligibility: "12th pass or equivalent",
      duration: "6-8 weeks",
      batchSize: "6-10 students",
      price: "$249"
    },
    {
      id: 5,
      title: "TOEFL Preparation",
      category: "Language Testing",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Intensive TOEFL preparation course focusing on academic English skills required for university admission.",
      features: [
        "Academic English focus",
        "Computer-based test simulation",
        "University admission guidance",
        "Score improvement guarantee"
      ],
      eligibility: "12th pass or equivalent",
      duration: "2-3 months",
      batchSize: "8-12 students",
      price: "$329"
    },
    {
      id: 6,
      title: "Business English",
      category: "Language Skills",
      icon: <Users className="h-8 w-8" />,
      description: "Professional English communication skills for business environments and corporate success.",
      features: [
        "Business communication skills",
        "Presentation and meeting skills",
        "Email and report writing",
        "Industry-specific vocabulary"
      ],
      eligibility: "Working professionals",
      duration: "2-4 months",
      batchSize: "10-15 students",
      price: "$279"
    }
  ];

  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed to help you achieve your academic and career goals
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-primary-700 font-medium rounded-full shadow-sm border border-primary-200"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border ${
                  course.popular ? 'border-accent-500 relative' : 'border-gray-200'
                }`}
              >
                {course.popular && (
                  <div className="absolute top-0 right-0 bg-accent-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                    Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-primary-600 font-medium">{course.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Batch Size: {course.batchSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Eligibility: {course.eligibility}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{course.price}</span>
                      <span className="text-gray-500 text-sm">/course</span>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h2>
            <p className="text-lg text-gray-600">Experience the difference with our proven methodology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from certified trainers with international experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Updated Curriculum</h3>
              <p className="text-gray-600">Latest syllabus aligned with international standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">98% success rate with guaranteed score improvement</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Timing</h3>
              <p className="text-gray-600">Weekend and evening batches available for working professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of successful students who have achieved their goals with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
              Book Free Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;