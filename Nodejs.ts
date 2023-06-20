import * as mysql from 'mysql';

// Define connection configuration
const connectionConfig: mysql.ConnectionConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
};

// Create a connection
const connection = mysql.createConnection(connectionConfig);

// Connect to the database
connection.connect((err: any) => {
  if (err) {
    console.error('Fehler beim Verbinden zur MySQL-Datenbank: ' + err.stack);
    return;
  }

  console.log('Verbindung zur MySQL-Datenbank hergestellt.');

  // Execute SQL query
  const sql = 'SELECT * FROM movietest';
  connection.query(sql, (err: any, results: any) => {
    if (err) {
      console.error('Fehler bei der SQL-Abfrage: ' + err.stack);
      return;
    }

    // Display results
    console.log('Abfrageergebnisse:');
    console.log(results);

    // Close the connection
    connection.end((err: any) => {
      if (err) {
        console.error('Fehler beim Schließen der Verbindung: ' + err.stack);
        return;
      }

      console.log('Verbindung zur MySQL-Datenbank geschlossen.');
    });
  });
});
