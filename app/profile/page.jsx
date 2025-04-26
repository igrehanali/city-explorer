"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import Image from "next/image";
import { Camera, Loader2 } from "lucide-react";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(user);
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [uploading, setUploading] = useState(false);
  const storage = getStorage();

  useEffect(() => {
    if (user) {
      fetchBookings();
      setEditedProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const fetchBookings = async () => {
    if (!user) return;
    const bookingsQuery = query(
      collection(db, "bookings"),
      where("userId", "==", user.uid)
    );
    const bookingsSnapshot = await getDocs(bookingsQuery);
    const bookingsData = [];

    for (const bookingDoc of bookingsSnapshot.docs) {
      const booking = bookingDoc.data();
      const locationDoc = await getDoc(
        doc(db, "locations", booking.locationId)
      );
      bookingsData.push({
        ...booking,
        location: locationDoc.data(),
      });
    }

    setBookings(bookingsData);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    try {
      await updateDoc(doc(db, "users", user.uid), editedProfile);
      setProfile({ ...user, ...editedProfile });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const storageRef = ref(storage, `profile-images/${user.uid}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);

      await updateDoc(doc(db, "users", user.uid), { photoURL });
      setProfile({ ...profile, photoURL });
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  if (!user) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="relative group mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 relative">
                  {profile?.photoURL ? (
                    <Image
                      src={profile.photoURL}
                      alt="Profile"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                      <span className="text-4xl text-purple-400">
                        {profile?.name?.[0]?.toUpperCase() || "?"}
                      </span>
                    </div>
                  )}
                  {uploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Loader2 className="w-8 h-8 text-white animate-spin" />
                    </div>
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2 cursor-pointer hover:bg-purple-700 transition-colors group-hover:scale-110">
                  <Camera className="w-5 h-5 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">
                {profile?.name || "Anonymous"}
              </h3>
              <p className="text-gray-500">{profile?.email}</p>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-purple-800">
              Profile Information
            </h2>
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    value={editedProfile.name}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input value={editedProfile.email} disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <Input
                    value={editedProfile.phone}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <Button onClick={handleSaveProfile} className="w-full">
                  Save Changes
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <p>{user.name || "Not set"}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <p>{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <p>{user.phone || "Not set"}</p>
                </div>
                <Button onClick={handleEditProfile} className="w-full">
                  Edit Profile
                </Button>
                <Link href="/locations" className="mt-2 block">
                  <Button className="w-full bg-purple-100 text-purple-700 hover:bg-purple-200">
                    View Locations
                  </Button>
                </Link>
              </div>
            )}
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
            <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
            <div className="space-y-4">
              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-800 mb-2">
                        {booking.location.name}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-gray-600 flex items-center">
                          <span className="w-20 text-gray-500">Date:</span>
                          <span className="font-medium">
                            {new Date(booking.date).toLocaleDateString()}
                          </span>
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <span className="w-20 text-gray-500">Status:</span>
                          <span
                            className={`capitalize font-medium ${
                              booking.status === "confirmed"
                                ? "text-green-600"
                                : "text-orange-600"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </p>
                        {booking.location.city && (
                          <p className="text-gray-600 flex items-center">
                            <span className="w-20 text-gray-500">City:</span>
                            <span className="font-medium">
                              {booking.location.city}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                    {booking.location.images?.[0] && (
                      <div className="w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={booking.location.images[0]}
                          alt={booking.location.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {bookings.length === 0 && (
                <p className="text-gray-500">No bookings found.</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
