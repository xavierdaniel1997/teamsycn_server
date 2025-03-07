import { Admin } from "../../../domain/entities/admin";
import { AdminRepository } from "../../../domain/repositories/adminRepository";
import bcrypt  from "bcryptjs"


export class AdminRegistrationUseCase{
  constructor(
    private adminRepository: AdminRepository
  ){}

  async execute(admin: Admin): Promise<Admin> {
    const existingAdmin = await this.adminRepository.findByEmail(admin.email)
    if(existingAdmin){
        throw new Error('Email already exist')
    }
    const hashpassword = await bcrypt.hash(admin.password, 10)
    const newAdmin: Admin = {...admin, password: hashpassword}
    const createAdmin = await this.adminRepository.createAdmin(newAdmin)
    return createAdmin
  }
}