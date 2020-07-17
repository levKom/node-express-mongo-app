const express = require("express");
const router = express.Router();
const TimerGeneral = require("../models/TimerGeneral");
const TimerAllData = require("../models/TimerAllData");
// const TimerRange = require("../models/TimerRange");

//TIMER ROUTES

//Get timer
router.get("/", async (req, res) => {
  try {
    const data = await TimerAllData.find();

    await res.json(data);
    console.log(data);
  } catch (e) {
    console.log("Ticket get error: ", e);
  }
});

//Post all timer data
router.post("/", async (req, res) => {
  const timerData = new TimerAllData({
    color: req.body.color,
    start: req.body.start,
    end: req.body.end,
    inactive: req.body.inactive,
    showOnSalesReceiptHeader: req.body.showOnSalesReceiptHeader,
    showOnSaleCompleteScreen: req.body.showOnSaleCompleteScreen
  });

  console.log("timer data: ", timerData);

  try {
    // const savedData = await timerData.save();
    console.log(1111, req.params);
    const savedData = await timerData.save(req.params.id);
    await res.json(savedData);
  } catch (e) {
    await res.json({ message: e });
    console.log("Ticket post error: ", e);
  }
});

//Get timer data by Id
router.get("/:timerDataId", async (res, req) => {
  try {
    const data = await TimerAllData.findById(req.params.timerDataId);
    await res.json(data);
  } catch (e) {
    await res.json({ message: e });
  }
});

//Patch timer data
router.patch("/:timerDataId", async (req, res) => {
  try {
    const dataToUpdate = await TimerAllData.updateOne(
      { _id: req.params.timerDataId },
      {
        $set: {
          color: req.body.color,
          start: req.body.start,
          end: req.body.end,
          inactive: req.body.inactive,
          showOnSalesReceiptHeader: req.body.showOnSalesReceiptHeader,
          showOnSaleCompleteScreen: req.body.showOnSaleCompleteScreen
        }
      }
    );

    await res.json(dataToUpdate);
  } catch (e) {
    await res.json({ message: e });
  }
});

//Get TimerGeneral
router.get("/general", async (req, res) => {
  try {
    const data = await TimerGeneral.find();

    res.json(data);
    console.log(data);
  } catch (e) {
    console.log("Ticket get error: ", e);
  }
});

//POST TimerGeneral
router.post("/general", async (req, res) => {
  const timerCheckboxes = new TimerGeneral({
    showOnSalesReceiptHeader: req.body.showOnSalesReceiptHeader,
    showOnSaleCompleteScreen: req.body.showOnSaleCompleteScreen
  });

  console.log("timer data: ", timerCheckboxes);

  try {
    const savedData = await timerCheckboxes.save();
    res.json(savedData);
  } catch (e) {
    res.json({ message: e });
    console.log("TimerGeneral err: ", e);
  }
});

module.exports = router;
