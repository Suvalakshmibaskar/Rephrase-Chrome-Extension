// const resultedList = document.getElementById("resultList");
// const tooltipWrapper = document.querySelector(".tooltip_wrapper");
// const tooltipHeader = document.getElementById("tooltip_header");
// const submitButton = document.getElementById("submitButton");
// const labels = document.querySelectorAll(".tab-label");

// let RephraseData = {};
// let RephraseDataList = [];

// console.log("popup.js running");

// const config = {
//   token: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzI1OTU1NzksImRhdGEiOnsiaWQiOiI2NDUwYTUwMTNkZTE4OWIxNzA1MTk4NDMiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNzAxMDU5NTc5fQ.yYnQp9S3JXA0_kMyvu6qAxqsCpR2l-T6JMh6xpe3DU8",
//   },
// };

// function toggleLoaderInTooltip(show) {
//   const tooltipLoader = document.getElementById("tooltip_loader");
//   if (tooltipLoader) {
//     tooltipLoader.style.display = show ? "block" : "none";
//   }
// }

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.selectedText) {
//     chrome.storage.local.set({ myKey: request.selectedText }, function () {
//       console.log(JSON.stringify("requestData", request.selectedText));
//       sendResponse({ message: "Data received and local storage updated" });
//       chrome.runtime.sendMessage({
//         action: "showData",
//         data: request.selectedText,
//       });
//     });
//     // console.log("request from bg", request.selectedText);
//   } else {
//     console.error("err", error);
//   }
//   // if (request.action === "updatePopup") {
//   //   const selectedTextElement = document.getElementById("selectedText");
//   //   if (selectedTextElement) {
//   //     // selectedTextElement.innerText = request.selectedText;
//   //     console.log("selectedText", request.selectedText);
//   //   } else {
//   //     console.error('Element with ID "selectedText" not found.');
//   //   }
//   // }
// });

// const config = {
//   token: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzI1OTU1NzksImRhdGEiOnsiaWQiOiI2NDUwYTUwMTNkZTE4OWIxNzA1MTk4NDMiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNzAxMDU5NTc5fQ.yYnQp9S3JXA0_kMyvu6qAxqsCpR2l-T6JMh6xpe3DU8",
//   },
// };
// let ResultData = {};
// chrome.storage.local.get("myKey", function (result) {
//   let ResultValue = "";
//   ResultValue = result.myKey;
//   // if (result.myKey) {
//   //   resultedList.textContent = result.myKey;
//   //   console.log("result", result.myKey);
//   // }
//   if (ResultValue) {
//     const apiUrl = "http://localhost:8001/api/v1/terms/get_summary";
//     fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: config.token.Authorization,
//       },
//       body: JSON.stringify({
//         ResultValue,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           console.log(response);
//           throw new Error(`HTTP Error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.status === "failed") {
//           throw new Error(data.message);
//         }
//         if (data && data.data) {
//           ResultData = data.data;
//         }
//       });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   chrome.storage.local.get("myKey", async function (result) {
//     let Text = "";
//     Text = result.myKey
//       .replace(/[^a-zA-Z0-9,:;\-.!?! ]/g, "")
//       .trim()
//       .replace(/[^\w\s]/gi, "")
//       .trim()
//       .replace(/\n/g, "")
//       .trim();
//     console.log("text:", Text);

//     if (Text) {
//       fetch("http://localhost:8001/api/v1/terms/get_rephrase_terms", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzI1OTU1NzksImRhdGEiOnsiaWQiOiI2NDUwYTUwMTNkZTE4OWIxNzA1MTk4NDMiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNzAxMDU5NTc5fQ.yYnQp9S3JXA0_kMyvu6qAxqsCpR2l-T6JMh6xpe3DU8",
//         },
//         body: JSON.stringify({
//           content: Text,
//         }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             console.log(response);
//             resultedList.innerHTML = "";
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           tooltip.textContent = "";
//           if (data.status === "failed") {
//             throw new Error(data.message);
//           }
//           if (resultedList && Array.isArray(data.data)) {
//             console.log("data", data.data);
//             data.data.forEach((sentence, index) => {
//               const radio = document.createElement("input");
//               radio.type = "radio";
//               radio.name = "RephraseRadio";
//               radio.id = `RephraseRadio${index}`;
//               radio.value = sentence;
//               const label = document.createElement("label");
//               label.htmlFor = `RephraseRadio${index}`;
//               label.textContent = sentence.replace(/[\d-.]+/g, "");
//               const lineBreak = document.createElement("br");
//               resultedList.appendChild(radio);
//               resultedList.appendChild(label);
//               resultedList.appendChild(lineBreak);
//               resultedList.style.listStyleType = "none";

//               radio.addEventListener("change", (event) => {
//                 event.preventDefault();
//                 console.log("selected Data:", radio.value);
//               });
//             });
//             // radio.value = "";
//             // RephraseData = data.data;
//             // RephraseDataList = data.data;
//           } else {
//             console.log("Error occured");
//           }
//           toggleLoaderInTooltip(false);
//         });
//     } else {
//       console.log("error", error);
//     }
//   });
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log("Message received:", message);
//   if (message.action === "openPopup") {
//     console.log("Opening Extension Popup");
//   }
// });

//////////////////////////////////////////////////

// console.log("content js running");
// const modal = document.createElement("div");
// const modalText = document.createElement("p");
// const closeBtn = document.createElement("button");
// closeBtn.textContent = "x";
// closeBtn.style.fontSize = "14px";
// closeBtn.style.fontWeight = "500px";
// closeBtn.style.borderRadius = "100px";
// closeBtn.style.position = "absolute";
// closeBtn.style.top = "-7%";
// closeBtn.style.left = "100%";
// closeBtn.onclick = closeModal;

// document.body.appendChild(modal);
// modal.appendChild(modalText);
// modal.appendChild(closeBtn);

// function getSelectionText() {
//   var text = "";
//   if (window.getSelection) {
//     text = window.getSelection().toString();
//   } else if (document.getSelection) {
//     text = document.getSelection().toString();
//   } else if (window.document.selection) {
//     text = window.document.selection.createRange().text;
//   }
//   return text;
// }

// window.addEventListener("mouseup", function () {
//   var selectedText = getSelectionText();
//   console.log("selectedText", selectedText);
// });

// function handleRightClick(event) {
//   event.preventDefault();
//   var selectedText = getSelectionText();
//   modal.style.width = "600px";
//   modal.style.height = "400px";
//   modal.style.position = "fixed";
//   modal.style.top = "30%";
//   modal.style.left = "30%";
//   modal.style.padding = "30px";
//   modal.style.borderRadius = "20px";
//   modal.style.border = "1px solid black";
//   modal.style.backgroundColor = "#fff";
//   modalText.textContent = selectedText;
//   modal.style.display = "block";
// }

// document.addEventListener("contextmenu", handleRightClick);

// function closeModal() {
//   modal.style.display = "none";
// }

// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     closeModal();
//   }
// });
