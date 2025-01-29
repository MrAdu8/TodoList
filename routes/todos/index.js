const express = require("express");
const connection = require("../../config/db");
const router = express.Router();

router.get("/", async (request, response, next) => {
  // action item 
  // data query get data 
  connection.query('SELECT * FROM todo',(err, result) => {
    if(err) {
      response.send(err)
    }
    response.send(result)
  })
});

module.exports = router;
