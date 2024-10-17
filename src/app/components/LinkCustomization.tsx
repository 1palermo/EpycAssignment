// components/LinkCustomization.js
import React from "react";
import Placeholder from "./Cards"; // Adjust the import as necessary


interface Link {
  id: number;
  title: string;
  platform: string;
}

interface LinkCustomizationProps {
  links: Link[];
  removeLink: (id: number) => void;
  addNewLink: () => void;
}
const LinkCustomization: React.FC<LinkCustomizationProps> = ({ links, removeLink, addNewLink }) => {
  return (
    <div className="flex-grow bg-white rounded-xl p-6 space-y-6">
      <div>
        <h2 className="text-xl text-[#333] font-bold font-['Instrument Sans'] lg:text-2xl mb-1">
          Customize your links
        </h2>
        <div className="text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
          Add/edit/remove links below and then share all your profiles with the world!
        </div>
      </div>

      <button
        onClick={addNewLink}
        className="w-full py-2 border border-[#623bff] text-[#623bff] font-semibold rounded-lg"
      >
        + Add new link
      </button>

      {/* Displaying Links */}
      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.id} className="h-[228px] p-5 bg-neutral-50 rounded-xl border flex-col justify-center items-center gap-3 inline-flex">
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-3 h-px bg-[#727272]"></div>
                  <div className="w-3 h-px bg-[#727272]"></div>
                </div>
                <div className="text-[#727272] text-base font-bold font-['Instrument Sans'] leading-normal">{link.title}</div>
              </div>
              <button
                onClick={() => removeLink(link.id)}
                className="text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal"
              >
                Remove
              </button>
            </div>
            <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
              <div className="w-[396px] text-[#333333] text-xs font-normal font-['Instrument Sans'] leading-[18px]">Platform</div>
              <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
                <div className="w-4 h-4 relative"></div>
                <div className="grow shrink basis-0 text-[#333333] text-base font-normal font-['Instrument Sans'] leading-normal">{link.platform}</div>
              </div>
            </div>
            <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
              <div className="w-[396px] text-[#333333] text-xs font-normal font-['Instrument Sans'] leading-[18px]">Link</div>
              <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
                <div className="w-4 h-4 relative"></div>
                <div className="opacity-50 text-[#333333] text-base font-normal font-['Instrument Sans'] leading-normal">e.g. https://www.github.com/johnappleseed</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
