"use client";

import { ChevronDown, ChevronRight, Folder, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(true);
  const [isContactsOpen, setIsContactsOpen] = useState(true);

  return (
    <aside className="w-full md:w-64 border-r border-foreground/50 flex flex-col h-full">
      {/* Personal Info Section */}
      <div className="border-b border-foreground/50">
        <button
          onClick={() => setIsPersonalInfoOpen(!isPersonalInfoOpen)}
          className="w-full flex items-center px-4 py-2 text-foreground hover:text-white transition-colors"
        >
          {isPersonalInfoOpen ? (
            <ChevronDown size={16} className="mr-2" />
          ) : (
            <ChevronRight size={16} className="mr-2" />
          )}
          <span className="text-sm text-white">personal-info</span>
        </button>
        
        {isPersonalInfoOpen && (
          <div className="px-4 py-2 space-y-2">
            <div className="flex items-center text-foreground cursor-pointer transition-colors">
              <ChevronRight size={16} className="mr-2 text-foreground" />
              <Folder size={16} className="mr-2 text-[#FF637E]" fill="#FF637E" />
              <span className="text-sm">About</span>
            </div>
            {/* Add more folders if needed */}
          </div>
        )}
      </div>

      {/* Contacts Section */}
      <div className="border-b border-foreground/50">
        <button
          onClick={() => setIsContactsOpen(!isContactsOpen)}
          className={`w-full flex items-center px-4 py-2 ${isContactsOpen ? 'text-white':'text-foreground'} hover:text-white transition-colors`}
        >
          {isContactsOpen ? (
            <ChevronDown size={16} className="mr-2" />
          ) : (
            <ChevronRight size={16} className="mr-2" />
          )}
          <span className="text-sm">contacts</span>
        </button>

        {isContactsOpen && (
          <div className="px-4 py-2 space-y-2">
            <div className="flex items-center text-foreground/80 hover:text-white transition-colors text-xs break-all">
              <Mail size={14} className="mr-2 shrink-0" />
              <a href="mailto:moazzam@blockapex.io">moazzam@blockapex.io</a>
            </div>
            <div className="flex items-center text-foreground/80 hover:text-white transition-colors text-xs">
              <Phone size={14} className="mr-2 shrink-0" />
              <a href="tel:+3598246359">+3598246359</a>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
