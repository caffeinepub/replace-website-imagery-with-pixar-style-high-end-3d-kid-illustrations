import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface User {
    otp: string;
    otpVerified: boolean;
    name: string;
    otpTimestamp: bigint;
    email: string;
    phone: string;
}
export interface backendInterface {
    getUsers(): Promise<Array<User>>;
    registerUser(name: string, email: string, phone: string): Promise<string>;
    verifyOTP(email: string, otp: string): Promise<boolean>;
}
