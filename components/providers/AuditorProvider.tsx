"use client";

import { useEffect } from "react";
import { useAuditorStore } from "@/store/useAuditorStore";

const AuditorProvider = ({ children }: { children: React.ReactNode }) => {
    const { fetchAuditor, fetchFindings, fetchReports } = useAuditorStore();

    useEffect(() => {
        fetchAuditor('moazzam-arif');
        fetchFindings('moazzam-arif');
        fetchReports('moazzam-arif');
    }, [fetchAuditor, fetchFindings, fetchReports]);

    return <>{children}</>;
};

export default AuditorProvider;
