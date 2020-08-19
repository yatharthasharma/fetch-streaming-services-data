import spotifyRouter from "./spotify";

module.exports = app => {
  app.get("/health", async (req, res) => {
    return res.status(200).json({
      status: 200,
      message: "Application running"
    });
  });

  /**
   *
   * Credit for most of the logic for spotify router goes to -
   * https://github.com/spotify/web-api-auth-examples/tree/master
   * https://developer.spotify.com/documentation/general/guides/authorization-guide/#list-of-scopes
   *
   */
  app.use("/spotify", spotifyRouter);

  app.use("*", (req, res) => {
    // error handling
    console.log(
      `Error navigating to endpoint - ${req.originalUrl} - ${req.method} - ${req.ip} `
    );
    return res.status(404).json({
      message:
        "This service does not exist. Please double check the URL endpoint."
    });
    // next({ error: 'error', message: 'Something went wrong' });
  });
};
