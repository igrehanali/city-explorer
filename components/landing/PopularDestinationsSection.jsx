import Link from "next/link";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PopularDestinationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Popular{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Destinations
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Times Square",
              city: "New York",
              rating: "4.9",
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              name: "Golden Gate Bridge",
              city: "San Francisco",
              rating: "4.8",
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              name: "Navy Pier",
              city: "Chicago",
              rating: "4.7",
              image: "/placeholder.svg?height=300&width=500",
            },
          ].map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={destination.image}
                width={500}
                height={300}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.city}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <Link href="/locations">
            <button className="w-full px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 max-w-96">
              View All Destinations
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
