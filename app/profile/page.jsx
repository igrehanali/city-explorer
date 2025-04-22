import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  User,
  Settings,
  Heart,
  Clock,
  LogOut,
  Edit,
  Camera,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6" />
            <span className="text-xl font-bold">CityExplorer</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link
              href="/locations"
              className="hover:text-white/80 transition-colors"
            >
              Locations
            </Link>
            <Link
              href="/profile"
              className="hover:text-white/80 transition-colors font-semibold"
            >
              Profile
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-40 bg-gradient-to-r from-purple-600 to-blue-500">
                <Button
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6 pt-0 relative">
                <div className="relative -mt-16 mb-4 flex justify-center">
                  <div className="relative">
                    <Avatar className="h-32 w-32 border-4 border-white">
                      <AvatarImage src="/placeholder.svg?text=JD" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full bg-purple-600 hover:bg-purple-700 h-8 w-8"
                    >
                      <Camera className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-gray-500">New York, USA</p>
                  <div className="flex justify-center mt-2">
                    <Badge variant="secondary" className="mr-2">
                      Explorer
                    </Badge>
                    <Badge variant="secondary">Joined 2023</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-b py-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">42</div>
                    <div className="text-sm text-gray-500">Visited</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">128</div>
                    <div className="text-sm text-gray-500">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">56</div>
                    <div className="text-sm text-gray-500">Saved</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-purple-600" />
                      <span>Edit Profile</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <Settings className="h-4 w-4 mr-2 text-purple-600" />
                      <span>Settings</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-purple-600" />
                      <span>Saved Locations</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Cities Visited</span>
                    <span className="text-sm text-gray-500">8/50</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full"
                      style={{ width: "16%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Review Score</span>
                    <span className="text-sm text-gray-500">4.8/5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Explorer Level</span>
                    <span className="text-sm text-gray-500">Level 3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">Achievements</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-xs text-center">First Visit</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-xs text-center">Top Reviewer</span>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-center">Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <Tabs defaultValue="saved">
              <TabsList className="mb-6 bg-white">
                <TabsTrigger value="saved">Saved Locations</TabsTrigger>
                <TabsTrigger value="visited">Visited</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
              </TabsList>

              <TabsContent value="saved" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Saved Locations</h2>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2 text-purple-600" />
                    Create Collection
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <Link href={`/locations/${i + 1}`} key={i}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex">
                        <Image
                          src={`/placeholder.svg?height=120&width=120&text=${
                            i + 1
                          }`}
                          width={120}
                          height={120}
                          alt={`Location ${i + 1}`}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="p-4 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{`Amazing Location ${
                                i + 1
                              }`}</h3>
                              <div className="flex items-center text-gray-500 text-sm mt-1">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                <span>New York City</span>
                              </div>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 text-red-500"
                            >
                              <Heart className="h-4 w-4 fill-current" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm ml-1">
                                {(4 + (i % 10) / 10).toFixed(1)}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              Saved {i + 1} {i === 0 ? "day" : "days"} ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">Collections</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium">Weekend Getaways</h4>
                        <Badge>{12}</Badge>
                      </div>
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                          >
                            <Image
                              src={`/placeholder.svg?height=32&width=32&text=${
                                i + 1
                              }`}
                              width={32}
                              height={32}
                              alt={`Collection thumbnail ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
                          +8
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium">Must Visit</h4>
                        <Badge>{8}</Badge>
                      </div>
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                          >
                            <Image
                              src={`/placeholder.svg?height=32&width=32&text=${
                                i + 5
                              }`}
                              width={32}
                              height={32}
                              alt={`Collection thumbnail ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
                          +4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visited">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Places You've Visited
                  </h2>
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="border-b pb-6 last:border-b-0 last:pb-0"
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                          <Image
                            src={`/placeholder.svg?height=150&width=250&text=Visit ${
                              i + 1
                            }`}
                            width={250}
                            height={150}
                            alt={`Visit ${i + 1}`}
                            className="w-full md:w-60 h-40 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-lg">{`Amazing Location ${
                                  i + 1
                                }`}</h3>
                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                  <MapPin className="h-3.5 w-3.5 mr-1" />
                                  <span>New York City</span>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                <span>Visited on May {10 + i}, 2023</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mt-2 mb-4">
                              {`Had an amazing time at this location. The atmosphere was great and the staff was very friendly. 
                              Would definitely recommend to anyone visiting the area.`}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Button variant="outline" size="sm">
                                <Star className="h-3.5 w-3.5 mr-1" />
                                Write Review
                              </Button>
                              <Button variant="outline" size="sm">
                                <Heart className="h-3.5 w-3.5 mr-1" />
                                Save
                              </Button>
                              <Button variant="outline" size="sm">
                                <svg
                                  className="h-3.5 w-3.5 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                Add Photos
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-6">Your Reviews</h2>
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="border-b pb-6 last:border-b-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <Image
                              src={`/placeholder.svg?height=60&width=60&text=${
                                i + 1
                              }`}
                              width={60}
                              height={60}
                              alt={`Location ${i + 1}`}
                              className="w-12 h-12 object-cover rounded-lg mr-4"
                            />
                            <div>
                              <h3 className="font-semibold">{`Amazing Location ${
                                i + 1
                              }`}</h3>
                              <div className="flex items-center text-gray-500 text-sm">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                <span>New York City</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className={`h-4 w-4 ${
                                  j < 5 - i
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <h4 className="font-medium mb-2">{`${
                          i === 0
                            ? "Amazing experience!"
                            : i === 1
                            ? "Great place to visit"
                            : "Good but could be better"
                        }`}</h4>
                        <p className="text-gray-600 mb-4">
                          {`${
                            i === 0
                              ? "This place exceeded all my expectations! The staff was incredibly friendly and the atmosphere was perfect. I spent hours exploring and enjoying every moment. Highly recommend to anyone visiting the city."
                              : i === 1
                              ? "I had a wonderful time here. The location is beautiful and well-maintained. There are plenty of activities for everyone. The only downside was that it was a bit crowded on the weekend."
                              : "The location itself is nice and has potential, but the experience could be improved. It was quite busy when I visited and some areas needed better maintenance. Still worth checking out though."
                          }`}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            Posted on{" "}
                            {`${
                              i === 0
                                ? "June 12"
                                : i === 1
                                ? "May 28"
                                : "April 15"
                            }`}
                            , 2023
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="photos">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Your Photos</h2>
                    <Button>
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Upload Photos
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="relative group rounded-lg overflow-hidden"
                      >
                        <Image
                          src={`/placeholder.svg?height=150&width=150&text=Photo ${
                            i + 1
                          }`}
                          width={150}
                          height={150}
                          alt={`Photo ${i + 1}`}
                          className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="flex space-x-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              className="bg-white/80 backdrop-blur-sm hover:bg-white"
                            >
                              View
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="bg-white/80 backdrop-blur-sm hover:bg-white"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">
                          {`Location ${(i % 4) + 1}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <MapPin className="h-6 w-6 text-white" />
                <span className="text-xl font-bold">CityExplorer</span>
              </Link>
              <p className="text-gray-400">
                Discover amazing places in cities around the world with our
                comprehensive city guide.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cities
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">
                Get the latest updates and offers.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none focus:ring-0 border-r-0"
                />
                <Button className="rounded-l-none bg-gradient-to-r from-purple-600 to-blue-500">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} CityExplorer. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
