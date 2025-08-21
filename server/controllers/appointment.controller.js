import db from '../db/index.js';



const createAppointment = async (req, res) => {
  const { name, age, gender, contact, email, department, notes, reason } = req.body;

  const sql = `INSERT INTO appointments 
    (name, age, gender, contact, email, department, notes, reason) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  try {
    const [result] = await db.query(sql, [name, age, gender, contact, email, department, notes, reason]);
    console.log("Appointment created with ID:", result.insertId);

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointmentId: result.insertId
    });
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({ success: false, message: "Failed to book appointment" });
  }
};



const listAppointments = async (req, res) => {
  const { email } = req.body;
  console.log("Fetching appointments for email:", email);

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const sql = "SELECT * FROM appointments WHERE email = ? ORDER BY created_at DESC";

  try {
    const [results] = await db.query(sql, [email]);
    return res.json({ success: true, appointments: results });
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({ success: false, message: "Failed to fetch appointments" });
  }
};


export {
  createAppointment,
  listAppointments
};