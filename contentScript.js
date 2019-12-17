// function waitForElementToDisplay(selector, time) {
//   if (document.querySelector(selector) != null) {
//     alert(
//       "The element is displayed, you can put your code instead of this alert."
//     );
//     setTimeout(function() {
//       waitForElementToDisplay(selector, time);
//     }, time);
//   } else {
//     setTimeout(function() {
//       waitForElementToDisplay(selector, time);
//     }, time);
//   }
// }

(function() {
    //  alert('yolo!');
    // const menuArea = document.getElementById('ptdropdownmenu');
    // menuArea.style.backgroundColor = "red";
    // console.log(menuArea);
    var currentHeader = document.getElementById('uconnhdrcontainer');
    var newHeader = document.createElement("div");
    newHeader.style.height = '60px';
    newHeader.style.width = '100%';
    newHeader.style.backgroundColor = 'blue';

    currentHeader.replaceWith(newHeader);


//   const url = window.location.toString();
//   //   waitForElementToDisplay('#ptifrmtgtframe',50);
//   MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// //   var observer = new MutationObserver(function(mutations, observer) {
// //     // fired when a mutation occurs
// //     console.log(mutations, observer);
// //     // ...
// //   });

//   // define what element should be observed by the observer
//   // and what types of mutations trigger the callback
// //   observer.observe(document, {
// //     subtree: true,
// //     attributes: true,
// //     //...
// //   });
//   if (url.includes("student.studentadmin.uconn.edu")) {
// 	  console.log("HERE!");
// 	  setTimeout(function(){ 
// 		// console.log(document.body);
// 		const unauth = document.getElementById("win0divPAGECONTAINER");
// 		const login = document.getElementById("login");
// 		// console.log(unauth);
// 		// console.log(login);
// 		if (unauth && unauth.innerHTML === "You are not authorized for this page.") {
// 			console.log('no auth');

// 		} else if (login) {
// 			console.log('need login');
// 		} else {
// 			console.log('yeehaw');
// 		}


// 	   }, 2000);
//     const iframeDiv = document.getElementById("ptifrmtgtframe");
//     if (iframeDiv) {
//       const mainPage = iframeDiv.contentDocument;
//       const weekTitleBar = mainPage.getElementById(
//         "win0divSTDNT_WEEK_SCHDGP$0"
//       );
//       weekTitleBar.style.backgroundColor = "red";

//       var aTag = document.createElement("a");
//       aTag.setAttribute(
//         "href",
//         "javascript:submitAction_win0(document.win0,'PRJCS_DERIVED_PRJCS_SCHD_PLN_PB');"
//       );
//       aTag.innerText = "link text"; // Create a text node
//       weekTitleBar.appendChild(aTag);
//     }
//   }
})();
