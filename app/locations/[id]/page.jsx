"use client";

import { useEffect, useState, use } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LocationDetailPage(props) {
  const { id } = use(props.params); // ✅ unwrap params safely

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const docRef = doc(db, "locations", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLocation({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchLocation();
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!location)
    return (
      <div className="p-8 text-center text-red-500">Location not found.</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10">
      <main className="container mx-auto px-4 relative z-10">
        <div className="mb-6">
          <Link
            href="/locations"
            className="flex items-center text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Locations</span>
          </Link>
        </div>

        <Card className="shadow-xl border-purple-200">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-purple-800 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {location.name}
              <Badge variant="outline" className="ml-2 text-xs">
                {location.category}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Images Grid */}
            {location.images?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl overflow-hidden">
                {location.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Image ${i + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}

            <Separator />

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                About
              </h2>
              <p className="text-gray-700 whitespace-pre-line">
                {location.description}
              </p>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-md font-semibold text-purple-600">
                  📍 Coordinates
                </h3>
                <p className="text-gray-700">
                  Latitude: {location.location?.latitude}
                </p>
                <p className="text-gray-700">
                  Longitude: {location.location?.longitude}
                </p>
              </div>

              <div>
                <h3 className="text-md font-semibold text-purple-600">
                  📅 Best Time to Visit
                </h3>
                <p className="text-gray-700">{location.bestTimeToVisit}</p>
              </div>

              <div>
                <h3 className="text-md font-semibold text-purple-600">
                  💸 Price
                </h3>
                <p className="text-gray-700">${location.price}</p>
              </div>

              {location.climate && (
                <div>
                  <h3 className="text-md font-semibold text-purple-600">
                    ☀️ Climate
                  </h3>
                  {Object.entries(location.climate).map(([key, val]) => (
                    <p key={key} className="text-gray-700 capitalize">
                      {key}: {val}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Book Now Button */}
            <div className="pt-6 text-center">
              <Link href={`/locations/${id}/book`}>
                <Button className="px-6 py-2">Book Now</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
