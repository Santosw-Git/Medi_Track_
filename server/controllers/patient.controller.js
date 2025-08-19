import pool from '../db/index.js';
import Joi from 'joi';
import bcrypt from 'bcryptjs';

const signupSchema = Joi.object({
  username: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(128).required(),
});



const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(128).required(),
});



const signupUser = async (req, res) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: 'Validation failed', details: error.details.map(d => d.message) });
  }
  const { username, email, password } = req.body;

  try {

    const [existing] = await pool.query('SELECT id FROM patients WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: 'User already exists with this email' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO patients (username, email, password) VALUES (?, ?, ?)';
    const [result] = await pool.query(sql, [username, email, hashedPassword]);

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
  const { email, password } = req.body;
  try {
    const sql = 'SELECT * FROM patients WHERE email = ?';
    const [rows] = await pool.query(sql, [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'User signed in successfully', user: { id: user.id, username: user.username, email: user.email } });
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