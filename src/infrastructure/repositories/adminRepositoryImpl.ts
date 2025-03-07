import { Admin } from "../../domain/entities/admin";
import { AdminRepository } from "../../domain/repositories/adminRepository";
import AdminModel from "../database/models/Admin";

export class AdminRepositoryImpl implements AdminRepository {
    async createAdmin(admin: Admin): Promise<Admin> {
        const registerAdmin = new AdminModel(admin)
        return await registerAdmin.save()
    }


    async findByEmail(email: string): Promise<Admin | null> {
        const admin = await AdminModel.findOne({email})
        return admin;
    }
}