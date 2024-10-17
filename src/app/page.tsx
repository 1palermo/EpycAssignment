"use client"; // Ensure this runs on the client side.
import { useState } from "react";
import Header from "./components/Header";
import LinkCustomization from "./components/LinkCustomization"; // Import the new LinkCustomization component

// Define the Link type
interface Link {
  id: number;
  title: string;
  platform: string;
}

const Home = () => {
  // Specify the type for links as an array of Link
  const [links, setLinks] = useState<Link[]>([]); // State to manage links

  // Function to add a new link
  const addNewLink = () => {
    setLinks([...links, { id: links.length, title: `Link #${links.length + 1}`, platform: "GitHub" }]);
  };

  // Function to remove a link by its id
  const removeLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex flex-col lg:flex-row flex-grow p-6 gap-6">
        {/* Profile Section */}
        <div className="w-full lg:w-[560px] bg-white rounded-xl p-6 flex justify-center items-center">
          <div className="space-y-6">
            {/* Profile Avatar and Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              <div className="space-y-1">
                <div className="w-40 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Placeholder Links */}
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-full h-11 bg-gray-300 rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Link Customization Section */}
        <LinkCustomization 
          links={links} 
          removeLink={removeLink} 
          addNewLink={addNewLink} 
        />
      </main>
    </div>
  );
};

export default Home;
