import { User, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Users Say
          </span>
        </h2>

        <div
          className="grid md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">New York</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              "This app has completely changed how I explore new cities. I've
              discovered so many hidden gems that I would have never found
              otherwise!"
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-gray-500">San Francisco</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              "The interface is so intuitive and the location recommendations
              are spot on. I use this app every time I travel to a new city."
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Emily Rodriguez</h4>
                <p className="text-sm text-gray-500">Chicago</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              "I love how I can save my favorite locations and create custom
              lists. It makes planning trips with friends so much easier!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
