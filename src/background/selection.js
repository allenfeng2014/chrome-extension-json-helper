chrome.contextMenus.create({
  id: "jsonHelperParseData",
  title: "JSON Helper",
  contexts: ["selection"],
});
chrome.contextMenus.onClicked.addListener((e) => {
  chrome.storage.local.get(["replaceFrom", "replaceTo"], (result) => {
    try {
      const parsedData = JSON.parse(
        e.selectionText.replace(
          result.replaceFrom ?? "",
          result.replaceTo ?? ""
        )
      );
      alert(parsedData);
    } catch (e) {
      console.warn(e);
    }
  });
});
