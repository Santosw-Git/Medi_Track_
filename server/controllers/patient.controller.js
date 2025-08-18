import pool from '../db/index.js';
import Joi from 'joi';


const signupSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  age: Joi.number().integer().min(0).max(120).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  contact: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  address: Joi.string().min(3).max(255).required(),
});

const signInSchema = Joi.object({
  contact: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
});



const signupUser = async (req, res) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: 'Validation failed', details: error.details.map(d => d.message) });
  }
  const { name, age, gender, contact, address } = req.body;
  try {
    const checkSql = 'SELECT id FROM patients WHERE contact = ?';
    const [existing] = await pool.query(checkSql, [contact]);
    if (existing.length > 0) {
      return res.status(409).json({ message: 'User already exists with this contact number' });
    }

    const sql = 'INSERT INTO patients (name, age, gender, contact, address) VALUES (?, ?, ?, ?, ?)';
    const [result] = await pool.query(sql, [name, age, gender, contact, address]);
    res.status(201).json({ message: 'User signed up successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error signing up user', details: error.message });
  }
};


const signIn = async (req, res) => {
  const { error } = signInSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: 'Validation failed', details: error.details.map(d => d.message) });
  }
  const { contact } = req.body;
  try {
    const sql = 'SELECT * FROM patients WHERE contact = ?';
    const [rows] = await pool.query(sql, [contact]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User signed in successfully', user: rows[0] });
  } catch (error) {
    res.status(500).json({ error: 'Error signing in user', details: error.message });
  }
};

const authWithGoogle = async (req, res) => {
  try {
    res.status(200).json({ message: 'Authenticated with Google successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error authenticating with Google', details: error.message });
  }
};

export { signupUser, signIn, authWithGoogle };