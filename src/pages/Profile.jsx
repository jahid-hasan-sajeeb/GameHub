import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import Title from "../hooks/Title";
import Motion from "../components/Motion";

const Profile = () => {
  Title("Profile | Gamehub");

  const { user, updateProfileFunc, signoutUserFunc, loading } = useAuth();

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [updating, setUpdating] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!displayName) {
      toast.error("Display name is required");
      return;
    }

    try {
      setUpdating(true);
      await updateProfileFunc(displayName, photoURL);
      toast.success("Profile updated");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  const handleSignout = async () => {
    try {
      await signoutUserFunc();
      toast.success("Signed out");
    } catch (err) {
      console.error(err);
      toast.error("Signout failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <Motion>
        <div className="bg-zinc-900 w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-800">
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Your <span className="text-red-500">Profile</span>
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            Manage your GameHub account
          </p>

          <div className="flex flex-col items-center mb-6">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Avatar"
                className="h-20 w-20 rounded-full mb-3 object-cover"
              />
            )}
            <p className="text-white font-semibold text-lg">
              {user.displayName || "No name set"}
            </p>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>

          {/* Update profile form */}
          <form onSubmit={handleUpdateProfile} className="space-y-4 mb-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-zinc-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-red-500"
                placeholder="Enter your display name"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">
                Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-zinc-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-red-500"
                placeholder="Enter image URL"
              />
            </div>

            <button
              type="submit"
              disabled={updating}
              className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white py-2 rounded-md font-semibold transition-all duration-300"
            >
              {updating ? "Updating..." : "Update Profile"}
            </button>
          </form>

          <button
            onClick={handleSignout}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-md font-semibold transition-all duration-300"
          >
            Sign Out
          </button>
        </div>
      </Motion>
    </div>
  );
};

export default Profile;
