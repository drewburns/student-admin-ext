// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
    chrome.tabs.update({
    // file: 'testing.js'
    	url: "https://student.studentadmin.uconn.edu/psp/CSPR/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?1&PORTALPARAM_PTCNAV=UC_SS_STUDENT&EOPP.SCNode=HRMS&EOPP.SCPortal=EMPLOYEE&EOPP.SCName=UC_SELF_SERVICE&EOPP.SCLabel=Self-Service&EOPP.SCPTfname=UC_SELF_SERVICE&FolderPath=PORTAL_ROOT_OBJECT.UC_SELF_SERVICE.UC_SS_STUDENT&IsFolder=false"
  	});
  // chrome.tabs.executeScript({
  //   // file: 'testing.js'
  //   url: "https://student.studentadmin.uconn.edu/psp/CSPR/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?1&PORTALPARAM_PTCNAV=UC_SS_STUDENT&EOPP.SCNode=HRMS&EOPP.SCPortal=EMPLOYEE&EOPP.SCName=UC_SELF_SERVICE&EOPP.SCLabel=Self-Service&EOPP.SCPTfname=UC_SELF_SERVICE&FolderPath=PORTAL_ROOT_OBJECT.UC_SELF_SERVICE.UC_SS_STUDENT&IsFolder=false"
  // });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // alert('updated from background');
    // alert('hi!');
    // console.log('yeehaw!');
    // console.log(tab);
});


