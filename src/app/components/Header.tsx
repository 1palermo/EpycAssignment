"use client"; // Ensure this runs on the client side.
import { useState } from "react";
import Image from "next/image";
import headerImage from "../images/logo-devlinks-large.svg";
import links from "../images/icon-link.svg";
import profile from "../images/icon-profile-details-header.svg";

const Header = () => {
  const [activeButton, setActiveButton] = useState("links"); // Track active button state

  return (
    <header className="w-full p-6">
      <div className="bg-white rounded-xl px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="h-8 w-32 relative">
          <Image
            src={headerImage}
            alt="DevLinks Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Section */}
        <nav className="flex gap-4">
          {/* Links Button with Icon */}
          <button
            className={`px-6 py-2 font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeButton === "links"
                ? "bg-[#eeeaff] text-[#623bff]"
                : "text-[#727272]"
            }`}
            onClick={() => setActiveButton("links")}
          >
            <Image
              src={links}
              alt="Link Icon"
              width={20}
              height={20}
              className="block sm:hidden" // Hide in mobile
            />
            <span className="hidden sm:block">Links</span> {/* Show text only on larger screens */}
          </button>

          {/* Profile Details Button with Icon */}
          <button
            className={`px-6 py-2 font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeButton === "profile"
                ? "bg-[#eeeaff] text-[#623bff]"
                : "text-[#727272]"
            }`}
            onClick={() => setActiveButton("profile")}
          >
            <Image
              src={profile}
              alt="Profile Icon"
              width={20}
              height={20}
              className="block sm:hidden" // Hide in mobile
            />
            <span className="hidden sm:block">Profile Details</span> {/* Show text only on larger screens */}
          </button>
        </nav>

        {/* Preview Button */}
        <button className="px-6 py-2 border border-[#623bff] text-[#623bff] font-semibold rounded-lg">
          <Image
            src="/icons/preview-icon.svg" // Add your preview icon here
            alt="Preview Icon"
            width={20}
            height={20}
            className="block sm:hidden" // Hide in mobile
          />
          <span className="hidden sm:block">Preview</span> {/* Show text only on larger screens */}
        </button>
      </div>
    </header>
  );
};

export default Header;
