Reviews

Instructions to use this directory:

Environment Setup:
  - In terminal, navigate to root directory. Then use: npm install.

Database Setup:
  - Using MySQL console, run the schema.sql file located in the 
    database folder.
  - The easiest way: 
      - Before opening MySQL console, navigate the terminal to:
        /reviews/database
      - Open MySQL console.
      - Execute the command: source schema.sql
  - In terminal, navigate to /databse.  Run node datagenerator.js

Server:
  - In terminal, navigate to /server.  Run nodemon server.js
  - The server should listen on port 3004.

Client:
  - In your browser, navigate to:  http://localhost:3004