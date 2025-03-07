import { Request, Response } from "express";
import { AdminRegistrationUseCase } from "../../../application/use_cases/auth/adminRegister";
import { AdminRepositoryImpl } from "../../../infrastructure/repositories/adminRepositoryImpl";
import { sendResponse } from "../../utils/sendResponse";
import { validationResult } from "express-validator";

const adminRepository = new AdminRepositoryImpl();
const adminRegistrationUseCase = new AdminRegistrationUseCase(adminRepository)


const registerAdmin = async(req: Request, res: Response): Promise<void> => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          sendResponse(res, 400, null, "Validation failed");
        }

        const admin = await adminRegistrationUseCase.execute(req.body);
        console.log("admin detials from the controller", admin)
        sendResponse(res, 201, admin, "Admin registered successfully")
    }catch(error: any){
        sendResponse(res, 400, null, error.message || "Oops !Something went wrong")
    }
}   


export {registerAdmin}