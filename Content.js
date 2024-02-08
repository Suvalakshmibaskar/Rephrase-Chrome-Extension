// console.log("content js running from inu oru code");
// const tooltipLoader = document.getElementById("p");

// const tooltip = document.createElement("div");
// tooltip.style.display = "none";
// tooltip.style.border = "1px solid black";
// tooltip.style.background = "#967E76";
// tooltip.style.color = "#FEFCF3";
// tooltip.style.padding = "10px";
// tooltip.style.margin = "10px";
// tooltip.style.zIndex = "999";
// tooltip.style.position = "absolute";
// document.body.appendChild(tooltip);

// function getSelectedText() {
//   var Text = ""-iu;
//   if (window.getSelection) {
//     Text = window.getSelection().toString();
//   } else if (document.getSelection) {
//     Text = document.getSelection().toString();
//   } else if (window.document.selection) {
//     Text = window.document.selection.createRange().text;
//   }
//   return Text;
// }

// function toggleLoaderInTooltip(show) {
//   if (tooltipLoader) {
//     tooltipLoader.style.display = show ? "block" : "none";
//   }
// }

// window.addEventListener("mouseup", function () {
//   var selectedText = getSelectedText();
//   if (selectedText) {
//     var selectionRect = window
//       .getSelection()
//       .getRangeAt(0)
//       .getBoundingClientRect();
//     tooltip.style.top = selectionRect.bottom + window.scrollY + "px";
//     tooltip.style.left = selectionRect.left + window.scrollX + "px";
//     tooltip.style.width = "700px";
//     tooltip.style.height = "400px";
//     tooltip.style.overflow = "scroll";
//     tooltip.style.display = "block";
//   } else {
//     tooltip.style.display = "none";
//   }
//   // console.log(selectedText);
//   chrome.runtime.sendMessage({ action: "DataAction", data: selectedText });

//   const Key = "myKey";
//   const Value = { data: selectedText };

//   chrome.storage.local.set({ key: Value }, () => {
//     console.log(" Local stored Value:" + Value.data);
//   });

//   chrome.storage.local.get({ Key: Value }, async function () {
//     let Text = "";
//     Text = Value.data
//       .replace(/[^a-zA-Z0-9,:;\-.!?! ]/g, "")
//       .trim()
//       .replace(/[^\w\s]/gi, "")
//       .trim()
//       .replace(/\n/g, "")
//       .trim();
//     console.log("text:", Text);

//     if (Text) {
//       toggleLoaderInTooltip(true);
//       tooltip.textContent = "";

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
//             tooltip.innerHTML = "";
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (data.status === "failed") {
//             throw new Error(data.message);
//           }
//           if (tooltip && Array.isArray(data.data)) {
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
//               tooltip.appendChild(radio);
//               tooltip.appendChild(label);
//               tooltip.appendChild(lineBreak);
//               tooltip.style.listStyleType = "none";

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

//////////////////////////////////

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

////////////////////////////////

console.log("content js running");
const modal = document.createElement("div");
const modalText = document.createElement("div");
const loadingText = document.createTextNode("Loading...");
const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
closeBtn.style.fontSize = "14px";
closeBtn.style.fontWeight = "500px";
closeBtn.style.borderRadius = "100px";
closeBtn.style.position = "relative";
closeBtn.style.top = "-3%";
closeBtn.style.width = "25px";
closeBtn.style.height = "25px";
closeBtn.style.backgroundColor = "red";
closeBtn.style.color = "white";
closeBtn.style.border = "none";
closeBtn.style.left = "100%";
closeBtn.onclick = closeModal;

const tooltip = document.createElement("div");
tooltip.style.position = "fixed";
tooltip.style.bottom = "10px";
tooltip.style.left = "50%";
tooltip.style.transform = "translateX(-50%)";
tooltip.style.padding = "10px";
tooltip.style.backgroundColor = "#4CAF50";
tooltip.style.color = "white";
tooltip.style.borderRadius = "5px";
tooltip.style.zIndex = "9999";
tooltip.style.display = "none";
document.body.appendChild(tooltip);

document.body.appendChild(modal);
modal.appendChild(modalText);
modal.appendChild(closeBtn);
// modal.appendChild(tooltip);

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.getSelection) {
    text = document.getSelection().toString();
  } else if (window.document.selection) {
    text = window.document.selection.createRange().text;
  }
  return text;
}

// window.addEventListener("mouseup", function () {
//   var selectedText = getSelectionText();
// });

function handleRightClick(event) {
  event.preventDefault();
  console.log("right click event triggered");
  modal.innerHTML = "";
  var selectedText = getSelectionText();
  modal.appendChild(loadingText);
  modal.style.width = "600px";
  modal.style.height = "400px";
  modal.style.position = "fixed";
  modal.style.top = "30%";
  modal.style.left = "30%";
  modal.style.padding = "30px";
  modal.style.borderRadius = "20px";
  modal.style.border = "1px solid black";
  modal.style.backgroundColor = "#fff";
  modal.style.overflow = "scroll:thin";
  modal.style.overflowX="hidden";
  // modal.style.overflowY ="hidden";
  modalText.textContent = selectedText;
  modal.style.display = "block";
  modal.style.zIndex ="999";


  // modal.addEventListener("change", function (event) {
  //   if (event.target.type === "radio" && event.target.checked) {
  //     const CopySelectedText = event.target.value;
  //     console.log("selectedText", CopySelectedText);

  //     const radioButtons = document.querySelectorAll('input[type="radio"]');
  //     radioButtons.forEach((radio) => {
  //       if (radio !== event.target) {
  //         radio.checked = false;
  //       }
  //     });

  //     navigator.clipboard
  //       .writeText(CopySelectedText)
  //       .then(() => {
  //         tooltip.textContent = "Copied!";
  //         tooltip.style.display = "block";

  //         setTimeout(() => {
  //           tooltip.style.display = "none";
  //         }, 2000);
  //       })
  //       .catch((err) => {
  //         alert("Error occurred", err);
  //       });
  //   }
  // });

  modal.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() === "label") {
      const CopySelectedText = event.target.textContent;
      console.log("selectedText", CopySelectedText);
  
       navigator.clipboard
     .writeText(CopySelectedText)
     .then(() => {
       tooltip.textContent = "Copied!";
       tooltip.style.display = "block";
       setTimeout(() => {
         tooltip.style.display = "none";
       }, 2000);
     })
     .catch((err) => {
       // Display an alert if an error occurs while copying
       alert("Error occurred", err);
     });
    }
  });
  

  const Key = "myKey";
  const Value = { data: selectedText };
  chrome.storage.local.set({ Key: Value }, () => {
    console.log("local stored value:" + Value.data);
  });

  chrome.storage.local.get({ Key: Value }, async function () {
    let Text = "";
    Text = Value.data
      .replace(/[^a-zA-Z0-9,:;\-.!?! ]/g, "")
      .trim()
      .replace(/[^\w\s]/gi, "")
      .trim()
      .replace(/\n/g, "")
      .trim();

    if (Text) {
      // modalText.textContent = "";
      fetch("http://localhost:8001/api/v1/terms/get_rephrase_terms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzI1OTU1NzksImRhdGEiOnsiaWQiOiI2NDUwYTUwMTNkZTE4OWIxNzA1MTk4NDMiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNzAxMDU5NTc5fQ.yYnQp9S3JXA0_kMyvu6qAxqsCpR2l-T6JMh6xpe3DU8",
        },
        body: JSON.stringify({
          content: Text,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            modalText.textContent = "";
            throw new Error(`HTTP Error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.status === "failed") {
            throw new Error(data.message);
          }
          if (modal && Array.isArray(data.data)) {
            modal.innerHTML = "";
            modal.appendChild(closeBtn);
            console.log("data:", data.data);
            data.data.forEach((sentence, index) => {
              const containerDiv = document.createElement("div");
              containerDiv.style.display = "flex";

              // const radio = document.createElement("input");
              // radio.type = "radio";
              // radio.name = `RephraseRadio${index}`;
              // radio.value = sentence;
              // // radio.style.marginTop = "-35px";
              // radio.style.marginRight = "20px";

              
              // bullet.style.width = "10px";
              // bullet.style.height = "10px";
              // bullet.style.borderRadius = "50%";
              // bullet.style.backgroundColor = "#000";
              // bullet.style.marginRight = "30px";

              // const imagePath ='./assests/dot-outline-fill.svg';

              // const bulletImg = document.createElement('img');
              // bulletImg.src = imagePath;
              // bulletImg.alt = 'bullets';
              // bulletImg.width="15px";
          
              const bullet = document.createElement('div');
              bullet.style.width="10px";
              bullet.style.height ="10px";
              bullet.style.backgroundColor="grey";
              bullet.style.borderRadius ="50%";
              bullet.style.marginTop="10px";
                            // bullet.appendChild(bulletImg);
              bullet.style.display = 'flex';  
              bullet.style.alignItems = 'center';
              bullet.style.justifyContent = 'center';
              bullet.style.marginTop = '3px';

            //   const bulletImg = document.createElement("img");
            // bulletImg.src="assests/dot-outline-fill.svg";
            // bulletImg.alt = "bullets";
            // bulletImg.style.alignItems ="center";
            // bulletImg.style.justifyContent="center";
            // bulletImg.style.marginTop = "3px";

            // const bullet = document.createElement("div");
            //   bullet.appendChild(bulletImg);

              const label = document.createElement("label");
              label.htmlFor = `RephraseRadio${index}`;
              label.style.width  ="530px";
              label.style.paddingLeft ="20px";
              label.textContent = sentence.replace(/[\d-.]+/g, "");
              label.style.cursor ="pointer";


              const lineBreak = document.createElement("br");

              containerDiv.appendChild(bullet);
              // containerDiv.appendChild(bulletImg);
              containerDiv.appendChild(label);
              containerDiv.appendChild(lineBreak);

              modal.appendChild(containerDiv);
              modal.style.listStyleType = "none";
            });
          } else {
            console.log("ERROR OCCURED");
          }
          loadingText.remove();
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          modal.appendChild(closeBtn);
          closeBtn.style.left = "53%";
          loadingText.textContent = "Error occurred while fetching data.";
        });
    } else {
      console.log("error");
    }
  });
}

document.addEventListener("contextmenu", handleRightClick);

              // label.addEventListener('mouseover',showToolTip);
              // label.addEventListener('mouseout',hideToolTip);
              // label.addEventListener('click',ClickTooltip);

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target === closeBtn) {
    closeModal();
  }
});





// label.addEventListener('mouseover',showToolTip);
// label.addEventListener('mouseout',hideToolTip);
// label.addEventListener('click',ClickTooltip);

document.body.appendChild(tooltip);

////////////////////////

// console.log("content js running");
// const modal = document.createElement("div");
// const modalText = document.createElement("p");
// const closeBtn = document.createElement("button");
// closeBtn.textContent = "x";
// closeBtn.style.fontSize = "14px";
// closeBtn.style.fontWeight = "500px";
// closeBtn.style.borderRadius = "100px";
// closeBtn.style.position = "absolute";
// closeBtn.style.top = "2%";
// closeBtn.style.left = "95%";
// closeBtn.style.backgroundColor = "red";
// closeBtn.style.color = "white";
// closeBtn.style.width = "25px";
// closeBtn.style.height = "25px";
// closeBtn.style.border = "none";
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

// // window.addEventListener("mouseup", function () {
// //   var selectedText = getSelectionText();
// //   console.log("selectedText", selectedText);
// // });

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
//   modal.style.overflow = "scroll";
//   modalText.textContent = selectedText;
//   modal.style.display = "block";

//   const Key = "myKey";
//   const Value = { data: selectedText };
//   chrome.storage.local.set({ Key: Value }, () => {
//     console.log("local stored value:" + Value.data);
//   });

//   chrome.storage.local.get({ Key: Value }, async function () {
//     let Text = "";
//     Text = Value.data
//       .replace(/[^a-zA-Z0-9,:;\-.!?! ]/g, "")
//       .trim()
//       .replace(/[^\w\s]/gi, "")
//       .trim()
//       .replace(/\n/g, "")
//       .trim();

//     if (Text) {
//       modalText.textContent = "";
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
//             modalText.textContent = "";
//             throw new Error(`HTTP Error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (data.status === "failed") {
//             throw new Error(data.message);
//           }
//           if (modal && Array.isArray(data.data)) {
//             console.log("data:", data.data);
//             data.data.forEach((sentence, index) => {
//               const radio = document.createElement("input");
//               radio.type = "radio";
//               radio.name = `RephraseRadio${index}`;
//               radio.value = sentence;
//               const label = document.createElement("label");
//               label.htmlFor = `RephraseRadio${index}`;
//               label.textContent = sentence.replace(/[\d-.]+/g, "");
//               const lineBreak = document.createElement("br");
//               modal.appendChild(radio);
//               modal.appendChild(label);
//               modal.appendChild(lineBreak);
//               modal.style.listStyleType = "none";
//             });
//             radio.value = "";
//           } else {
//             console.log("ERROR OCCURED");
//           }
//         });
//     } else {
//       console.log("error");
//     }
//   });
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
//////////////////////
