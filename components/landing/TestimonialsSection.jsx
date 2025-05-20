"use client";

import { useEffect, useState, useCallback } from "react";
import { User, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function TestimonialsSection() {
  const [ratings, setRatings] = useState([]);

  // Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    const fetchRatings = async () => {
      const q = query(collection(db, "ratings"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRatings(data);
    };

    fetchRatings();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Users Say
          </span>
        </h2>

        {ratings.length === 0 ? (
          <p className="text-center text-gray-500">No testimonials yet.</p>
        ) : (
          <div className="relative max-w-6xl mx-auto">
            {/* Left Icon */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Right Icon */}
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            <div ref={emblaRef}>
              <Carousel>
                <CarouselContent>
                  {ratings.map((rating) => (
                    <CarouselItem
                      key={rating.id}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 md:p-8 rounded-xl shadow-md h-full flex flex-col justify-between">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mr-4">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{rating.userName}</h4>
                            <p className="text-sm text-gray-500">
                              {rating.userEmail}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">
                          “{rating.message}”
                        </p>

                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < rating.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
