// server/routes/prescription.route.js
import { Router } from 'express';
import { createPrescription, getPrescription } from '../controllers/prescription.controller.js';

const prescriptionRoutes = Router();
prescriptionRoutes.post('/', createPrescription);
prescriptionRoutes.get('/:id', getPrescription);

export default prescriptionRoutes;
