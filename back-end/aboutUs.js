
const express = require('express');
const router = express.Router();

const aboutUsData = {
  text: "My name is Robert (Bobby) Impastato. I am a student at New York University. My majors are business and computer science.",
  imageUrl: "./bobby666.jpg",
};

router.get('/', (req, res) => {
  res.json(aboutUsData);
});

module.exports = router;