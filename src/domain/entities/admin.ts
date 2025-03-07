export interface Admin{
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatar?: string;
    createdAt?: Date;
}