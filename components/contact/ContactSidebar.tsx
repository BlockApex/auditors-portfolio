"use client";

import { ChevronDown, ChevronRight, Mail, Phone, ExternalLink } from "lucide-react";
import { useState } from "react";

const ContactSidebar = () => {
    const [isContactsOpen, setIsContactsOpen] = useState(true);
    const [isFindMeOpen, setIsFindMeOpen] = useState(true);

    const socialLinks = [
        { name: "YouTube", url: "https://youtube.com" },
        { name: "dev.to", url: "https://dev.to" },
        { name: "Instagram", url: "https://instagram.com" },
        { name: "Twitch", url: "https://twitch.tv" },
    ];

    return (
        <aside className="w-full md:w-64 border-r border-foreground/50 flex flex-col h-full shrink-0">
            {/* Contacts Section */}
            <div className="border-b border-foreground/50">
                <button
                    onClick={() => setIsContactsOpen(!isContactsOpen)}
                    className="w-full flex items-center px-4 py-2 text-foreground hover:text-white transition-colors"
                >
                    {isContactsOpen ? (
                        <ChevronDown size={16} className="mr-2" />
                    ) : (
                        <ChevronRight size={16} className="mr-2" />
                    )}
                    <span className="text-sm text-white">contacts</span>
                </button>

                {isContactsOpen && (
                    <div className="px-4 py-2 space-y-2">
                        <div className="flex items-center text-foreground/80 hover:text-white transition-colors text-xs break-all">
                            <Mail size={14} className="mr-2 shrink-0" />
                            <a href="mailto:user@gmail.com" className="ml-2">user@gmail.com</a>
                        </div>
                        <div className="flex items-center text-foreground/80 hover:text-white transition-colors text-xs">
                            <Phone size={14} className="mr-2 shrink-0" />
                            <a href="tel:+3598246359" className="ml-2">+3598246359</a>
                        </div>
                    </div>
                )}
            </div>

            {/* Find Me Also In Section */}
            <div className="border-b border-foreground/50">
                <button
                    onClick={() => setIsFindMeOpen(!isFindMeOpen)}
                    className="w-full flex items-center px-4 py-2 text-foreground hover:text-white transition-colors"
                >
                    {isFindMeOpen ? (
                        <ChevronDown size={16} className="mr-2" />
                    ) : (
                        <ChevronRight size={16} className="mr-2" />
                    )}
                    <span className="text-sm text-white">find-me-also-in</span>
                </button>

                {isFindMeOpen && (
                    <div className="px-4 py-2 space-y-2">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-foreground/80 hover:text-white transition-colors text-xs group"
                            >
                                <ExternalLink size={14} className="mr-2 shrink-0 group-hover:text-secondary" />
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
};

export default ContactSidebar;
