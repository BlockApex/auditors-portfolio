import { create } from 'zustand';
import axios from 'axios';
import { Auditor, FindingsResponse } from '@/types';
import { BASE_URL } from '@/config';

interface AuditorState {
    data: Auditor | null;
    isLoading: boolean;
    error: string | null;
    fetchAuditor: (subdomain: string) => Promise<void>;

    findingsData: FindingsResponse | null;
    isLoadingFindings: boolean;
    findingsError: string | null;
    fetchFindings: (subdomain: string) => Promise<void>;
}

export const useAuditorStore = create<AuditorState>((set) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchAuditor: async (subdomain: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}/auditors`, {
                params: { subdomain },
            });
            set({ data: response.data, isLoading: false });
        } catch (error) {
            console.error('Failed to fetch auditor data:', error);
            set({ error: 'Failed to fetch auditor data', isLoading: false });
        }
    },

    findingsData: null,
    isLoadingFindings: false,
    findingsError: null,
    fetchFindings: async (subdomain: string) => {
        set({ isLoadingFindings: true, findingsError: null });
        try {
            const response = await axios.get(`${BASE_URL}/auditor/findings`, {
                params: { subdomain },
            });
            set({ findingsData: response.data, isLoadingFindings: false });
        } catch (error) {
            console.error('Failed to fetch findings data:', error);
            set({ findingsError: 'Failed to fetch findings data', isLoadingFindings: false });
        }
    },
}));
