import { Search, Heart, MapPin } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Discover Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Features
          </span>
        </h2>

        <div
          className="grid md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Search & Filter</h3>
            <p className="text-gray-600">
              Find exactly what you're looking for with our powerful search and
              filter options.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Save Favorites</h3>
            <p className="text-gray-600">
              Keep track of your favorite locations and create personalized
              collections.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interactive Maps</h3>
            <p className="text-gray-600">
              Explore locations with interactive maps and get directions easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
