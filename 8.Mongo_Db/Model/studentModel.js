import mongoose from "mongoose";
import { studentSchema } from "../Schema/studentSchema.js";

export const studentModel = mongoose.model('students',studentSchema)
