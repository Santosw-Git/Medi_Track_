// server/routes/appointment.route.js
import { Router } from 'express';
import { createAppointment, listAppointments, updateAppointment } from '../controllers/appointment.controller.js';

const appointmentRoutes = Router();
appointmentRoutes.post('/', createAppointment);
appointmentRoutes.get('/', listAppointments);
appointmentRoutes.put('/:id', updateAppointment);

export default appointmentRoutes;
