// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   fetch("https://api.github.com/users/manolors/repos", {
//     headers: {
//       Accept: "application/vnd.github.v3+json",
//       Authorization: "Bearer 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",
//     }
//   })
//     .then(response => response.json()) // Converting the response to a JSON object
//     .then(data => {
//       const root = document.querySelector("pre.data");
//       // eslint-disable-next-line no-undef
//       root.innerHTML = prettyPrintJson.toHtml(data, { indent: 3, lineNumers: true });
//     })
//     .catch(error => console.error(error));
// });

const button = document.querySelector("button");
button.addEventListener("click", () => {
  fetch("./.netlify/functions/githubcall")
    .then(response => response.json()) // Converting the response to a JSON object
    .then(data => {
      const root = document.querySelector("pre.data");
      // eslint-disable-next-line no-undef
      root.innerHTML = prettyPrintJson.toHtml(data, { indent: 3, lineNumers: true });
    })
    .catch(error => console.error(error));
});

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   fetch("/search", {
//     headers: {
//       Accept: "application/vnd.github.v3+json",
//     }
//   })
//     .then(response => response.json()) // Converting the response to a JSON object
//     .then(data => {
//       const root = document.querySelector("pre.data");
//       // eslint-disable-next-line no-undef
//       root.innerHTML = prettyPrintJson.toHtml(data, { indent: 3, lineNumers: true });
//     })
//     .catch(error => console.error(error));
// });
