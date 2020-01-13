const { Router } = require("express");
const Tanks = require("./model");

const router = new Router();

router.get("/tanks", (req, res, next) => {
  Tanks
  .findAll()
  .then(tankArray => res.json(tankArray))
  .catch(next)
});

router.get("/tanks/:id", (req, res, next) => {
  Tanks
  .findByPk(req.params.id)
  .then(product => res.json(product))
  .catch(next)
});

router.post("/tanks", (req, res, next) => {
  Tanks
  .create(req.body)
  .then(newTank => res.json(newTank))
  .catch(next)
});

module.exports = router;
