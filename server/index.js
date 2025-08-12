
import connection from './db/index.js' 
import app from './app.js'

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!`);
})

connection.connect((err) => {
    console.log('Connecting to the database...');
    if (err) {
      console.error('Connection error:', err);
      return;
    }
    console.log('Connected to the database!');
  });


const insertTestData = () => {
    const sql = 'INSERT INTO data (name, id) VALUES (?, ?)';
    const values = ['santosh', 3]; 
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
      console.log('Data inserted successfully, Insert ID:', result.insertId);
    });
};
  
// insertTestData();
  
  