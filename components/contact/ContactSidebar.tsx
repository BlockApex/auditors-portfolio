"use client";

import { ChevronDown, ChevronRight, Mail, Phone, ExternalLink } from "lucide-react";
import { useState } from "react";

import { useAuditorStore } from "@/store/useAuditorStore";

const ContactSidebar = () => {
    const [isContactsOpen, setIsContactsOpen] = useState(true);
    const [isFindMeOpen, setIsFindMeOpen] = useState(true);
    const { data: auditor } = useAuditorStore();

    // Combine all social links
    const socialLinks = [
        ...(auditor?.social_links?.map(link => ({ name: link.name, url: link.link })) || []),
        ...(auditor?.twitter_link ? [{ name: "Twitter", url: auditor.twitter_link }] : []),
        ...(auditor?.linkedin_link ? [{ name: "LinkedIn", url: auditor.linkedin_link }] : []),
        ...(auditor?.github_link ? [{ name: "GitHub", url: auditor.github_link }] : []),
    ];

    return (
        <aside className="w-full xl:w-64 border-b xl:border-b-0 xl:border-r border-foreground/50 flex flex-col h-auto xl:h-full shrink-0">
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
                            {auditor?.email ? (
                                <a href={`mailto:${auditor.email}`} className="ml-2">{auditor.email}</a>
                            ) : (
                                <div className="h-3 w-32 bg-white/10 rounded animate-pulse ml-2"></div>
                            )}
                        </div>
                        <div className="flex items-center text-foreground/80 hover:text-white transition-colors text-xs">
                            <Phone size={14} className="mr-2 shrink-0" />
                            {auditor?.phone_number ? (
                                <a href={`tel:${auditor.phone_number}`} className="ml-2">{auditor.phone_number}</a>
                            ) : (
                                <div className="h-3 w-24 bg-white/10 rounded animate-pulse ml-2"></div>
                            )}
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
                        {socialLinks.length > 0 ? socialLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-foreground/80 hover:text-white transition-colors text-xs group"
                            >
                                <ExternalLink size={14} className="mr-2 shrink-0 group-hover:text-secondary" />
                                <span>{link.name}</span>
                            </a>
                        )) : (
                            // Loading state
                            [1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center text-foreground/80 text-xs group">
                                    <div className="w-3 h-3 bg-white/10 rounded animate-pulse mr-2"></div>
                                    <div className="h-3 w-20 bg-white/10 rounded animate-pulse"></div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </aside>
    );
};

export default ContactSidebar;
