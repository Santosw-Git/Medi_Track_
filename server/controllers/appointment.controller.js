// server/controllers/appointment.controller.js
import pool from '../db/index.js';

// Create appointment (patient_id, doctor_id, appointment_datetime, reason)
 const createAppointment = async (req, res) => {
  try {
    const { patient_id, doctor_id, appointment_datetime, reason } = req.body || {};
    if (!patient_id || !doctor_id || !appointment_datetime) {
      return res.status(400).json({ message: 'patient_id, doctor_id, appointment_datetime are required' });
    }

    const [result] = await pool.query(
      'INSERT INTO appointments (patient_id, doctor_id, appointment_datetime, reason, status) VALUES (?, ?, ?, ?, ?)',
      [patient_id, doctor_id, appointment_datetime, reason || null, 'scheduled']
    );
    res.status(201).json({ message: 'Appointment created', id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: 'Error creating appointment', details: err.message });
  }
};

// List appointments (optional filters: patient_id or doctor_id)
 const listAppointments = async (req, res) => {
  try {
    const { patient_id, doctor_id } = req.query;
    let sql = 'SELECT * FROM appointments';
    const values = [];
    const conds = [];
    if (patient_id) { conds.push('patient_id = ?'); values.push(patient_id); }
    if (doctor_id) { conds.push('doctor_id = ?'); values.push(doctor_id); }
    if (conds.length) sql += ' WHERE ' + conds.join(' AND ');
    sql += ' ORDER BY appointment_datetime DESC';

    const [rows] = await pool.query(sql, values);
    res.status(200).json({ appointments: rows });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', details: err.message });
  }
};

// Update appointment status or reschedule
 const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, appointment_datetime, reason } = req.body || {};
    if (!status && !appointment_datetime && reason === undefined) {
      return res.status(400).json({ message: 'nothing to update' });
    }

    const fields = [];
    const values = [];
    if (status) { fields.push('status = ?'); values.push(status); }
    if (appointment_datetime) { fields.push('appointment_datetime = ?'); values.push(appointment_datetime); }
    if (reason !== undefined) { fields.push('reason = ?'); values.push(reason); }

    values.push(id);
    const [result] = await pool.query(`UPDATE appointments SET ${fields.join(', ')} WHERE id = ?`, values);
    res.status(200).json({ message: 'Appointment updated', affectedRows: result.affectedRows });
  } catch (err) {
    res.status(500).json({ message: 'Error updating appointment', details: err.message });
  }
};


export  {
  createAppointment,
  listAppointments,
  updateAppointment
};