const input = document.getElementById("InputId");
const submit = document.getElementById("Button");

submit.addEventListener('click', async()=>{

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentUrl = tabs[0].url;
      document.getElementById("urlResult").innerText = currentUrl;
    });

  });
  