import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking'
    token?: string;
    user?: {
        name: string;
        pwd: string;
    }
    loginn: (name: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,
    loginn: (namen: string, passwordn: string) => {

        set({
            status: 'authenticated',
            token: 'as400',
            user: {
                name: namen,
                pwd: passwordn

            }

        })
    },
    logout: () => {
        set({
            status: 'checking',
            token: undefined,
            user: undefined
        })
    }
}))