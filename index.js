const express = require("express");
const PORT = 8080;
const app = express();
const cors = require("cors");

const { connection } = require("./Config/db");
const { DataRouter } = require("./Routes/Data.route");

// app.use(cors);

//Routes

app.use("/", DataRouter);

//connection to Database
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected To Database");
  } catch (err) {
    console.log("Error in Connecting Database");
    console.log(err);
  }
  console.log(`Listining in PORT ${PORT}`);
});
