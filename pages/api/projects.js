const data = require("../../data/data");

export default function handler(req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
