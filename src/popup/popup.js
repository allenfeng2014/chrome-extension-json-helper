document.getElementById("btn-parse").addEventListener("click", () => {
  const textareaInput = document.getElementById("textarea-input");

  chrome.storage.local.get(["replaceFrom", "replaceTo"], (result) => {
    try {
      const parsedData = JSON.parse(
        textareaInput.value.replace(
          result.replaceFrom ?? "",
          result.replaceTo ?? ""
        )
      );
      textareaInput.value = parsedData;
    } catch (e) {
      console.warn(e);
    }
  });
});
document
  .getElementById("input-replace-from")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      chrome.storage.local.set("replaceFrom", e.value);
    }
  });
document.getElementById("input-replace-to").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    chrome.storage.local.set("replaceFrom", e.value);
  }
});
