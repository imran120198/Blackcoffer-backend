const { Router } = require("express");

const { DataModel } = require("../Model/data.model");

const DataRouter = Router();

DataRouter.get("/", async (req, res) => {
  const data = await DataModel.find({});
  //console.log("data", data);
  res.status(200).send(data);
});

//filter for end year
DataRouter.get("/", async (req, res) => {
  let { end_year } = req.query;
  const data = await DataModel.find({ end_year: end_year });
  console.log("data", data);
  res.status(200).send(data);
});

// Add topics filters in the dashboard
DataRouter.get("/", async (req, res) => {
  let { topic } = req.query;
  const data = await DataModel.find({ topic: topic });
  console.log("data", data);
  res.status(200).send(data);
});

// Add sector filter in the dashboard
DataRouter.get("/", async (req, res) => {
  let { sector } = req.query;
  const data = await DataModel.find({ sector: sector });
  console.log("data", data);
  res.status(200).send(data);
});

// Add region filter in the dashboard
DataRouter.get("/", async (req, res) => {
  let { region } = req.query;
  const data = await DataModel.find({ region: region });
  console.log("data", data);
  res.status(200).send(data);
});

// Add PEST filter in the dashboard
DataRouter.get("/", async (req, res) => {
  let { pestle } = req.query;
  const data = await DataModel.find({ pestle: pestle });
  console.log("data", data);
  res.status(200).send(data);
});

// Add Source filter in the dashboard
DataRouter.get("/", async (req, res) => {
  let { sector } = req.query;
  const data = await DataModel.find({ sector: sector });
  console.log("data", data);
  res.status(200).send(data);
});

module.exports = {
  DataRouter,
};
