import { create } from 'zustand';
import axios from 'axios';
import { Auditor } from '@/types';
import { BASE_URL } from '@/config';

interface AuditorState {
    data: Auditor | null;
    isLoading: boolean;
    error: string | null;
    fetchAuditor: (subdomain: string) => Promise<void>;
}

export const useAuditorStore = create<AuditorState>((set) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchAuditor: async (subdomain: string) => {
        set({ isLoading: true, error: null });
        try {
            // BASE_URL already includes /en, so we just append /auditors
            // But wait, check config.
            // Config says: https://dashboard.blockapex.io/en
            // API is: https://dashboard.blockapex.io/en/auditors?subdomain=...
            // So we need to append /auditors

            const response = await axios.get(`${BASE_URL}/auditors`, {
                params: { subdomain },
            });
            set({ data: response.data, isLoading: false });
        } catch (error) {
            console.error('Failed to fetch auditor data:', error);
            set({ error: 'Failed to fetch auditor data', isLoading: false });
        }
    },
}));
