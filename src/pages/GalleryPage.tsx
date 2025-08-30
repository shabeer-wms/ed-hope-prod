import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Students in classroom",
      category: "Classroom"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Campus building",
      category: "Campus"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Student presentation",
      category: "Events"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Study group",
      category: "Student Life"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Computer lab",
      category: "Facilities"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1438082/pexels-photo-1438082.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Library study area",
      category: "Facilities"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Graduation ceremony",
      category: "Events"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1181274/pexels-photo-1181274.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Interactive class",
      category: "Classroom"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Student collaboration",
      category: "Student Life"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1181716/pexels-photo-1181716.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Modern classroom",
      category: "Classroom"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/1580274/pexels-photo-1580274.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Campus garden",
      category: "Campus"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Award ceremony",
      category: "Events"
    }
  ];

  const categories = [...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our vibrant campus life, modern facilities, and memorable moments from our educational journey
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'All'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-primary-50 shadow-sm'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-primary-50 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-primary-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Campus by Numbers</h2>
            <p className="text-lg text-gray-600">Creating the perfect environment for learning and growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-primary-600 mb-2">15+</h3>
              <p className="text-gray-600 font-medium">Modern Classrooms</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-primary-600 mb-2">3</h3>
              <p className="text-gray-600 font-medium">Computer Labs</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-primary-600 mb-2">1</h3>
              <p className="text-gray-600 font-medium">Digital Library</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-primary-600 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Study Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Schedule a campus visit or take our virtual tour to experience our facilities firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
              Schedule Campus Visit
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg transition-all">
              Take Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;