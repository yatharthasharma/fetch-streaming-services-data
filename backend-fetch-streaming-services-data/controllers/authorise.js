import querystring from "querystring";

const url = "https://accounts.spotify.com/authorize?";
const stateKey = "spotify_auth_state";

/**
 * @param {Number} length length of the random string to be generated
 */
var generateRandomString = function(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const authorise = async (req, res) => {
  const scopes = process.env.SCOPES;
  const state = generateRandomString(16);
  res.cookie(stateKey, state);
  res.redirect(
    url +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        scope: scopes ? encodeURIComponent(scopes) : "",
        redirect_uri: process.env.REDIRECT_URI,
        state
      })
  );
};
