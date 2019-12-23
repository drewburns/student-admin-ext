// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.update({
    url:
      "https://student.studentadmin.uconn.edu/psp/CSPR/EMPLOYEE/HRMS/h/?tab=DEFAULT"
  });
});
