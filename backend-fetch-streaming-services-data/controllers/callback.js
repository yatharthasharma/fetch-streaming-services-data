export const callback = async (req, res) => {
  const { code } = req.query;
  if (code) {
    // TODO make relevant API calls to generate access/refresh tokens
    throw new Error("Not implemented yet.");
  }
  return res.status(400).json("Code not found in the URL.");
};
