import { User } from "./user";

export interface Account { 
    id?: number; 
    accountNumber: string;
    accountType: string; 
    balance: number; 
    user: User;
}