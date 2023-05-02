// DEPENDENCIES
const express = require('express')
const router = express.Router()
const peopleCtrl = require('../controllers/people-controller')


// ROUTES

// PEOPLE INDEX ROUTE
router.get("/", peopleCtrl.index);

// PEOPLE CREATE ROUTE
router.post("/", peopleCtrl.create);

// PEOPLE SHOW ROUTE
router.get("/:id", peopleCtrl.getOne);

// PEOPLE DELETE ROUTE
router.delete("/:id", peopleCtrl.update);

// PEOPLE UPDATE ROUTE
router.put("/:id", peopleCtrl.update);

module.exports = router


