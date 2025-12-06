"use client";

import { useEffect } from "react";
import { useAuditorStore } from "@/store/useAuditorStore";

const AuditorProvider = ({ children }: { children: React.ReactNode }) => {
    const { fetchAuditor, fetchFindings, fetchReports } = useAuditorStore();

    useEffect(() => {
        let subdomain = 'gul-hameed';

        if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
            const hostname = window.location.hostname;
            const parts = hostname.split('.');

            // Assuming structure like subdomain.domain.com
            if (parts.length >= 2) {
                subdomain = parts[0];
            }
        }

        fetchAuditor(subdomain);
        fetchFindings(subdomain);
        fetchReports(subdomain);
    }, [fetchAuditor, fetchFindings, fetchReports]);

    return <>{children}</>;
};

export default AuditorProvider;
