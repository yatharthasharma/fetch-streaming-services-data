import express from "express";
import { authorise } from "../../controllers/authorise";
import { callback } from "../../controllers/callback";
const spotifyRouter = express.Router();

spotifyRouter.get("/authorise", authorise);

spotifyRouter.get("/callback", callback);

spotifyRouter.get("*", function(req, res) {
  res.status(404).json({ status: 404, message: "Not found!!!" });
});

module.exports = spotifyRouter;
