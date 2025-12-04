"use client";

import { useEffect } from "react";
import { useAuditorStore } from "@/store/useAuditorStore";

const AuditorProvider = ({ children }: { children: React.ReactNode }) => {
    const { fetchAuditor, fetchFindings } = useAuditorStore();

    useEffect(() => {
        fetchAuditor('moazzam-arif');
        fetchFindings('moazzam-arif');
    }, [fetchAuditor, fetchFindings]);

    return <>{children}</>;
};

export default AuditorProvider;
