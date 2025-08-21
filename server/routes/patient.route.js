import {Router} from "express";

import { signIn, signupUser} from "../controllers/patient.controller.js";

const patientRoutes = Router();

patientRoutes.post("/signup",signupUser);
patientRoutes.post("/signin",signIn);


export default patientRoutes;