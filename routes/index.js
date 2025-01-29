var express = require("express");
const router = express.Router();

/* GET home page. */

router.get("/", (request, response, next) => {
  let result = {
    name: "advait",
  };

  result.age = 23;

  if (result.age > 20) {
    result.isAdult = true;
  } else {
    result.isAdult = false;
  }

  response.send(result)
});

module.exports = router;
