const baseUrl = "http://localhost:3000/";
const spotify = "spotify/";
const endpoints = {
  authorise: baseUrl + spotify + "authorise"
};
async function authoriseSpotify() {
  console.log("worlddddd");
  try {
    const response = await fetch(endpoints.authorise, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
      // body: JSON.stringify({
      //   path: document.getElementById('userAuthPath').value,
      //   data: {
      //     token,
      //     sessionId
      //   }
      // })
    });
    console.log("hello");
    console.log(response);
    if (response.status === 200) {
      document.getElementById("authoriseButton").innerHTML = "This worked.";
      return;
    } else {
      document.getElementById("authoriseButton").innerHTML =
        "This did not work.";
    }
  } catch (error) {
    console.log(error);
    document.getElementById("authoriseButton").innerHTML = "Something wrong!";
  }
}
