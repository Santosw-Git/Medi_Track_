
import pool from '../db/index.js';
const signupUser = async (req, res) => {
   console.log('signupUser called');

    res.send('API is working!');

};

const signIn = async (req, res) => {
  try {
    res.status(200).json({ message: "User signed in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing in user" });
  }
};

const authWithGoogle = async (req, res) => {
  try {
    res.status(200).json({ message: "Authenticated with Google successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error authenticating with Google" });
  }
};

const createPatient = async (req, res) => {

  try {
    const { name, age, gender, contact, address } = req.body;
    console.log(name, age, gender, contact, address);
    
    const [result] = await pool.execute(
      'INSERT INTO patients (name, age, gender, contact, address) VALUES (?, ?, ?, ?, ?)',
      [name, age, gender, contact, address]
    );
    console.log('Patient created with ID:', result.insertId);
    
    res.status(201).json({ id: result.insertId, message: 'Patient created' });
  } 
  
  catch (err) {
    res.status(500).json({ error: err.message });
  }

}
export { signupUser, signIn, authWithGoogle , createPatient};