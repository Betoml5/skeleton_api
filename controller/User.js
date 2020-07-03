const User = require("../model/user");

const controller = {
  test: async function (req, res) {
    await res.status(200).send({
        message: "Soy el metodo test"
    })
  },
};

module.exports = controller;
