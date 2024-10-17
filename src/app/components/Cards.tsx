// src/app/components/Placeholder.js
import Image from "next/image";
import PhoneHand from "../images/illustration-empty.svg";

const Placeholder = () => {
  return (
    <div className="p-6 bg-neutral-50 rounded-xl border text-center space-y-6">
      <div className="h-40 w-40 mx-auto relative">
        <Image
          src={PhoneHand}
          alt="Phone in Hand"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-xl text-[#333] font-bold">Let’s get you started</h3>
      <p className="text-[#727272]">
        Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles!
      </p>
    </div>
  );
};

export default Placeholder;
