import { Award, Users, Globe, Target, Eye, Heart } from 'lucide-react';

const AboutPage = () => {
  const achievements = [
    { number: "5000+", text: "Students Trained" },
    { number: "98%", text: "Success Rate" },
    { number: "50+", text: "Countries Reached" },
    { number: "15+", text: "Years Experience" }
  ];

  const accreditations = [
    {
      name: "British Council Certification",
      icon: <Award className="h-8 w-8 text-primary-600" />,
      description: "Authorized IELTS preparation center"
    },
    {
      name: "International Education Partners",
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      description: "Official representatives for top universities"
    },
    {
      name: "ISO 9001:2015 Certified",
      icon: <Target className="h-8 w-8 text-primary-600" />,
      description: "Quality management systems certified"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Edhop Education</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Pioneering excellence in education since 2009, transforming dreams into global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading educational institution that empowers students with knowledge, skills, and confidence 
                to excel in the global arena. We envision a world where every student has access to quality education 
                and the guidance needed to achieve their international academic and career aspirations.
              </p>
            </div>
            
            <div className="bg-accent-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-accent-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide comprehensive, innovative, and personalized education services that prepare students 
                for international success. Through expert training, mentorship, and cutting-edge resources, 
                we bridge the gap between local talent and global opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Numbers that speak for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold text-primary-600 mb-2">{achievement.number}</h3>
                <p className="text-gray-600 font-medium">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Accreditations */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accreditations & Affiliations</h2>
            <p className="text-lg text-gray-600">Recognized and certified by leading educational bodies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">{accreditation.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{accreditation.name}</h3>
                <p className="text-gray-600">{accreditation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in everything we do</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Care</h3>
              <p className="text-gray-600">Providing personalized attention to every student's needs</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">Building trust through transparency and honest guidance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;