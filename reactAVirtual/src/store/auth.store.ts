import { create } from "zustand";

interface AuthState{
    status:'authenticated' | 'unauthenticated' | 'checking'
    token?: string;
    user?:{
        name:string;
        pwd:string;
    }
}

export const useAuthStore = create<AuthState>()((set)=>({
status:'checking',
token:undefined,
user:undefined
}))