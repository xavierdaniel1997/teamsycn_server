import mongoose, { Schema } from "mongoose";
import { Admin } from "../../../domain/entities/admin";


const adminSchema = new Schema<Admin>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    avatar: { type: String }
}, {timestamps: true})

const AdminModel = mongoose.model<Admin>('Adminstrator', adminSchema)
export default AdminModel;