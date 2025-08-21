// server/routes/appointment.route.js
import { Router } from 'express';
import { createAppointment, listAppointments, } from '../controllers/appointment.controller.js';

const appointmentRoutes = Router();
appointmentRoutes.post('/', createAppointment);
appointmentRoutes.post('/list-appointments', listAppointments);

export default appointmentRoutes;
