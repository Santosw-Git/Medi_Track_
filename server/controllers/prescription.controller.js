// server/controllers/prescription.controller.js
import pool from '../db/index.js';

// Create prescription with items
// body: { patient_id, doctor_id, notes?, items: [{ medicine_name, dosage?, frequency?, duration?, instructions? }, ...] }
 const createPrescription = async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { patient_id, doctor_id, notes, items } = req.body || {};
    if (!patient_id || !doctor_id) return res.status(400).json({ message: 'patient_id and doctor_id are required' });
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ message: 'items array required' });

    await conn.beginTransaction();

    const [rx] = await conn.query(
      'INSERT INTO prescriptions (patient_id, doctor_id, notes) VALUES (?, ?, ?)',
      [patient_id, doctor_id, notes || null]
    );

    const rxId = rx.insertId;
    const rows = items.map(it => [
      rxId,
      it.medicine_name,
      it.dosage || null,
      it.frequency || null,
      it.duration || null,
      it.instructions || null
    ]);

    await conn.query(
      'INSERT INTO prescription_items (prescription_id, medicine_name, dosage, frequency, duration, instructions) VALUES ?',
      [rows]
    );

    await conn.commit();
    res.status(201).json({ message: 'Prescription created', id: rxId });
  } catch (err) {
    await (conn?.rollback?.());
    res.status(500).json({ message: 'Error creating prescription', details: err.message });
  } finally {
    conn.release();
  }
};

// Get prescription with its items
 const getPrescription = async (req, res) => {
  try {
    const { id } = req.params;
    const [[rx]] = await pool.query('SELECT * FROM prescriptions WHERE id = ?', [id]);
    if (!rx) return res.status(404).json({ message: 'Prescription not found' });

    const [items] = await pool.query('SELECT * FROM prescription_items WHERE prescription_id = ?', [id]);
    res.status(200).json({ prescription: rx, items });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching prescription', details: err.message });
  }
};

export {
    createPrescription, 
    getPrescription,
    
}
