let boldFirstLetters = false;

// Function to apply or remove bolding
function toggleBolding() {
  if (boldFirstLetters) {
    document.body.querySelectorAll('*').forEach((element) => {
      element.innerHTML = element.textContent.replace(/(\b\w)/g, "<b>$1</b>");
    });
  } else {
    location.reload();
  }
  boldFirstLetters = !boldFirstLetters;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.toggle) {
    toggleBolding();
  }
});
