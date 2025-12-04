"use client";

import { useEffect } from "react";
import { useAuditorStore } from "@/store/useAuditorStore";

const AuditorProvider = ({ children }: { children: React.ReactNode }) => {
    const fetchAuditor = useAuditorStore((state) => state.fetchAuditor);

    useEffect(() => {
        fetchAuditor("moazzam-arif");
    }, [fetchAuditor]);

    return <>{children}</>;
};

export default AuditorProvider;
