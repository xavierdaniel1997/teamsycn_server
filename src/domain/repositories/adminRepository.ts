import { Admin } from "../entities/admin";

export interface AdminRepository{
    createAdmin(admin: Admin): Promise<Admin>;
    findByEmail(email: string): Promise<Admin | null>
}