const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("i am working")
 
    
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
