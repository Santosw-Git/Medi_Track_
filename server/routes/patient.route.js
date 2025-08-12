import {Router} from "express";

import { signIn, signupUser, authWithGoogle ,createPatient} from "../controllers/patient.controller.js";

const patientRoutes = Router();

patientRoutes.post("/signup",signupUser);
patientRoutes.post("/signin",signIn);
patientRoutes.post("/google-auth",authWithGoogle);
patientRoutes.post("/patients", createPatient);
export default patientRoutes;