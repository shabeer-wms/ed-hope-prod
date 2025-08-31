import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Globe, ArrowRight, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const highlights = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: "Expert Training",
      description: "World-class IELTS and language training programs"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: "Study Abroad",
      description: "Comprehensive guidance for international education"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "100% Success Rate",
      description: "Proven track record of student achievements"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Expert Faculty",
      description: "Experienced instructors with international exposure"
    }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      course: "IELTS Training",
      score: "Band 8.5",
      university: "Oxford University",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Michael Chen",
      achievement: "Full Scholarship",
      university: "MIT",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Priya Sharma",
      course: "Language Development",
      score: "Band 9.0",
      university: "Harvard University",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const features = [
    "Personalized Learning Plans",
    "Small Batch Sizes",
    "Regular Mock Tests",
    "24/7 Student Support",
    "Modern Infrastructure",
    "Industry Connections"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering Students for 
                <span className="text-accent-400"> Global Opportunities</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Join thousands of successful students who have achieved their dreams through our comprehensive education programs and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold rounded-lg transition-all duration-300"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-500 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-900">98%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTech Credit Transfer & Complete Arrears Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              BTech Credit Transfer & Complete Arrears
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Seamlessly transfer your BTech credits and clear all your arrears with our expert guidance and support. We help you continue your education journey without interruption, ensuring a smooth transition and successful completion of your degree.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-primary-100">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-lg text-primary-800 font-medium"><CheckCircle className="h-6 w-6 text-accent-500 mr-3" />Guidance for BTech credit transfer between universities</li>
                <li className="flex items-center text-lg text-primary-800 font-medium"><CheckCircle className="h-6 w-6 text-accent-500 mr-3" />Support for completing pending arrears and backlogs</li>
                <li className="flex items-center text-lg text-primary-800 font-medium"><CheckCircle className="h-6 w-6 text-accent-500 mr-3" />Personalized counseling and documentation assistance</li>
                <li className="flex items-center text-lg text-primary-800 font-medium"><CheckCircle className="h-6 w-6 text-accent-500 mr-3" />Fast-track your graduation process</li>
                <li className="flex items-center text-lg text-primary-800 font-medium"><CheckCircle className="h-6 w-6 text-accent-500 mr-3" />Expert faculty and legal support</li>
              </ul>
              <Link
                to="/admissions"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="BTech Credit Transfer"
                className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-primary-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Edhop Education?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions for all your educational needs with a focus on excellence and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real achievements from our incredible students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{story.course}</p>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {story.score && (
                    <p className="text-2xl font-bold text-accent-600 mb-1">{story.score}</p>
                  )}
                  {story.achievement && (
                    <p className="text-lg font-semibold text-accent-600 mb-1">{story.achievement}</p>
                  )}
                  <p className="text-gray-600">{story.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campus Image */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Modern Campus & Facilities
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Experience world-class education in our state-of-the-art facilities equipped with the latest technology and resources to enhance your learning journey.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Campus view"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-accent-100 mb-8">
            Join thousands of successful students and take the first step towards your global dreams.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center px-8 py-4 bg-white text-accent-600 hover:bg-gray-100 font-bold rounded-lg transition-colors shadow-lg"
          >
            Apply Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;