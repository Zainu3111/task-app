require('dotenv').config();
/*Modules I am Importing*/ 
const express = require('express');
const cors = require('cors')

/*functions I am importing*/
const connectDB = require('./db/connect');
/*-----------------------------------------------*/

const app = express();
app.use(express.json())
app.use(cors())


const tasksRouter = require('./routes/task')

app.use('/tasks', tasksRouter)

app.get('/', (req, res) => {
  res.send('I am here');
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log('App is listening on port 3000');
    });
  } catch (error) {
    console.log(error);
  }
}

start()