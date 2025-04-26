"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      const querySnapshot = await getDocs(collection(db, "locations"));
      const locationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLocations(locationsData);
    };
    fetchLocations();
  }, []);

  const filterLocations = locations.filter((location) =>
    location.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().trim())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Explore Locations</h1>
              <p className="text-gray-600 mb-6">
                Discover amazing places in cities around the world.
              </p>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search for locations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-white border-gray-200 focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations &&
                filterLocations?.map((location, i) => (
                  <Link href={`/locations/${location.id}`} key={i}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={location.images[0]}
                          width={400}
                          height={200}
                          alt={location.images[0]}
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                        <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow">
                          <Star
                            className="h-4 w-4 text-yellow-400"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {location.name}
                            </h3>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                              <MapPin className="h-3.5 w-3.5 mr-1" />
                              <span>{location.city}</span>
                            </div>
                          </div>
                          <div className="flex items-center bg-purple-100 text-purple-700 rounded px-2 py-1 text-sm">
                            <span className="font-medium">
                              {location?.climate[0]?.bestTimeToVisit || ""}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                          {location.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex space-x-1">
                            <Badge
                              variant="secondary"
                              className="text-xs px-2 py-1"
                            >
                              {location.category || "City"}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="text-xs px-2 py-1"
                            >
                              {location.bestTimeToVisit || "Anytime"}
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-500">
                            {location.price}PKR
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      {/* <footer/> */}
    </div>
  );
}
