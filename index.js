require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Manager API is running');
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to DB:', err);
});
