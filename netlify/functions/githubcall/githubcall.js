const axios = require("axios");

const handler = async function (event) {
  const URL = `https://api.github.com/users/${process.env.GITHUBUSER}/repos`;
  const config = {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${process.env.GHTOKEN}`
    }
  };
  try {
    const { data } = await axios.get(URL, config);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { data, headers, status, statusText } = error.response;
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
