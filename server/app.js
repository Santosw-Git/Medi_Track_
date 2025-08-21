import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import patientRoutes from './routes/patient.route.js';
import appointmentRoutes from './routes/appointment.route.js';
import prescriptionRoutes from './routes/prescription.route.js';
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '16kb' }));

app.use('/api/v1/patient', patientRoutes);
app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/prescription', prescriptionRoutes);


export default app;
