function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to: ${location}`);
    if (location === "Bing") {
      resolve(`${location} says hello`);
    } else {
      reject("Only Bing will be allowed.");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(`Process response`);
    resolve(`The response to process is: ${response}`);
  });
}

//Testing using Quokka.js
//If we only use promises then the code can become quite cluttered with the .then's everywhere.
//passing parameters to nested statement is tricky and would require parameters to be declared further away from
//where they are being used.
// makeRequest("Bing").then(response => {
//   console.log(response);
//   return processRequest(response)
//     .then(processedResponse => {
//       console.log(processedResponse);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

//Asynchronous code - which demonstrates the usage of async await
async function doAsynchronousWork() {
  try {
    const response = await makeRequest("Bing");
    console.log(`Response received: ${response}`);

    const processedResponse = await processRequest(response);
    console.log(`$Processed response is: ${processedResponse}`);
  } catch (err) {
    console.log(`An error has occurred: ${err}.`);
  }
}

doAsynchronousWork();
