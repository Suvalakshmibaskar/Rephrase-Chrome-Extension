// background.js

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === "setLocalData") {
//     chrome.storage.local.set({ myKey: request.data }, function () {
//       if (chrome.runtime.lastError) {
//         console.error(chrome.runtime.lastError);
//         sendResponse({ success: false, error: chrome.runtime.lastError });
//       } else {
//         console.log("Data set successfully:", request.data);
//         sendResponse({ success: true });
//       }
//     });
//     return true;
//   }
// });

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.contextMenus.create({
//     title: "open extension popup",
//     contexts: ["selection"],
//     id: "openpopup",
//   });
// });

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//   if (info.menuItemId === "openpopup") {
//     chrome.runtime.sendMessage({ action: "openPopup" });
//   }
// });


     // const bulletImage = "assests/dot-outline-fill.svg";

              // const Image = document.createElement("img");
              // Image.src = bulletImage;
              // Image.alt = "bullets";

              // const bullet = document.createElement("div");
              // bullet.appendChild(bulletImage);
