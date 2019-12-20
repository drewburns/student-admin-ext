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
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
(function() {
    //  alert('yolo!');
    // const menuArea = document.getElementById('ptdropdownmenu');
    // menuArea.style.backgroundColor = "red";
    // console.log(menuArea);
    // var newHeader = document.createElement("div");
    // newHeader.style.height = '60px';
    // newHeader.style.width = '100%';
    // newHeader.style.backgroundColor = 'red';

    // mainContent.replaceWith(newHeader);
    const url = window.location.toString();
    if (url.includes('student.studentadmin.uconn.edu/psc/CSPR/EMPLOYEE/HRMS/c')) {
        // content page
        mainBody = document.getElementById('win0divPAGECONTAINER');
        newHeader = document.createElement("div");
        newHeader.innerHTML = '<div style="height:50px;width:100%;background-color:blue;color:white;">NAV BAR</div>'
        mainBody.prepend(newHeader)
    } else {
        // home page
        var mainContent = document.getElementById('ptpglts');
        minHtml = '<!DOCTYPE html><html><head> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <style>*{box-sizing: border-box;}h2{color: black; text-align: center; font-size:35px;}\/* Create three equal columns that floats next to each other *\/ .column{float: left; width: 33.33%; padding: 10px; height: 200px; border: 1px black solid;}\/* Clear floats after the columns *\/ .row:after{content: \"\"; display: table; clear: both;}<\/style><\/head><body> <h2 style=\'text-align:center;\'>Select Your Destination<\/h2> <div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_GRADE.GBL?Page=SSR_SSENRL_GRADE&Action=A&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Grades<\/h2> <\/div><\/a> <a href=\'https:\/\/payplan.uconn.edu\/C21646_tsa\/web\/welcome.jsp\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Pay Bill<\/h2> <\/div><\/a> <a href=\'https:\/\/uconn.collegescheduler.com\/entry\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Schedule Builder<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UGRD&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Enroll<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?Page=SSR_SS_WEEK&Action=A&ACAD_CAREER=UGRD&AS_OF_DATE=2020-01-21&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.UC_SS_TERM_BILL.GBL?Page=UC_SS_TERM_BILL&Action=U&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>View Bill<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UGRD&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Enroll<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_EXAM_L.GBL?Page=SSR_SSENRL_EXAM_L&Action=A&EMPLID=2303741&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Finals Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SS_AA_REPORT1.GBL?Page=SS_ES_AARPT_TYPE2&Action=A&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Transcript<\/h2> <\/div><\/a> <\/div><\/body><\/html>'
        mainContent.outerHTML = minHtml
    }


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
