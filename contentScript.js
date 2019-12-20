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
        newHeader.innerHTML = '<!-- <div style=\"height:50px;width:100%;background-color:blue;color:white;\"> <div style=\'margin-right:10px;\'> <a style=\'color:white;text-decoration: none;\' href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/h\/?tab=DEFAULT\'> <h1>Home<\/h1> <\/a> <\/div><\/div>--><head> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <style>*{box-sizing: border-box;}h2{color: black; text-align: center; margin-top: 10px; \/* font-size: px; *\/}\/* Create three equal columns that floats next to each other *\/ .column{float: left; width: 33.33%; padding: 0px; \/* margin-top:0px; *\/ height: 50px; background-color: #aaa; ; border: 1px black solid;}.column2{float: left; width: 33.33%; padding: 0px; \/* margin-top:0px; *\/ height: 80px; background-color: #aaa; ; border: 1px black solid;}\/* Clear floats after the columns *\/ .row:after{content: \"\"; display: table; clear: both;}.popover__title{font-size: 24px; \/* line-height: 36px; *\/ text-decoration: none; color: rgb(228, 68, 68); text-align: center; \/* padding: 15px 0; *\/}.popover__wrapper{position: relative; \/* margin-top: 1.5rem; *\/ display: inline-block;}.popover__content{opacity: 0; visibility: hidden; position: absolute; left: -12%; transform: translate(0, 10px); background-color: #bfbfbf; padding: 1.5rem; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); width: auto;}.popover__content:before{position: absolute; z-index: -1; content: \"\"; right: calc(50% - 10px); top: -8px; border-style: solid; border-width: 0 10px 10px 10px; border-color: transparent transparent #bfbfbf transparent; transition-duration: 0.3s; transition-property: transform;}.popover__wrapper:hover .popover__content{z-index: 10; opacity: 1; visibility: visible; transform: translate(0, -20px); transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);}.popover__message{text-align: center;}<\/style><\/head><body> <div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/h\/?tab=DEFAULT\' id=\'quick-links\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Back to Dashboard<\/h2> <\/div><\/a> <div class=\"popover__wrapper column\"> <div class=\"\" style=\"background-color:#aaa;\"> <h2 class=\"\">Quick Jump<\/h2> <div class=\"popover__content\"> <div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_GRADE.GBL?Page=SSR_SSENRL_GRADE&Action=A&TargetFrameName=None\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>Grades<\/h2> <\/div><\/a> <a href=\'https:\/\/payplan.uconn.edu\/C21646_tsa\/web\/welcome.jsp\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>Pay Bill<\/h2> <\/div><\/a> <a href=\'https:\/\/uconn.collegescheduler.com\/entry\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>Schedule Builder<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UGRD&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>Enroll<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?Page=SSR_SS_WEEK&Action=A&ACAD_CAREER=UGRD&AS_OF_DATE=2020-01-21&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>My Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.UC_SS_TERM_BILL.GBL?Page=UC_SS_TERM_BILL&Action=U&TargetFrameName=None\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>View Bill<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?Page=SSR_CLSRCH_ENTRY&Action=U&ExactKeys=Y&TargetFrameName=None\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>Search Classes<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_EXAM_L.GBL?Page=SSR_SSENRL_EXAM_L&Action=A&EMPLID=2303741&TargetFrameName=None\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>Finals Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SS_AA_REPORT1.GBL?Page=SS_ES_AARPT_TYPE2&Action=A&TargetFrameName=None\'> <div class=\"column2\" style=\"background-color:#aaa;\"> <h2>Transcript<\/h2> <\/div><\/a> <\/div><\/div><\/div><\/div><a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?1&FolderPath=PORTAL_ROOT_OBJECT.UC_SELF_SERVICE.UC_SS_STUDENT&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Regular Home<\/h2> <\/div><\/a> <\/div><\/div>'
        mainBody.prepend(newHeader)
    } else {
        // home page
        var mainContent = document.getElementById('ptpglts');
        minHtml = '<!DOCTYPE html><html><head> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <style>*{box-sizing: border-box;}h2{color: black; text-align: center; font-size: 35px;}\/* Create three equal columns that floats next to each other *\/ .column{float: left; width: 33.33%; padding: 10px; height: 200px; border: 1px black solid;}\/* Clear floats after the columns *\/ .row:after{content: \"\"; display: table; clear: both;}<\/style><\/head><body> <h2 style=\'text-align:center;\'>Select Your Destination<\/h2> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?1&FolderPath=PORTAL_ROOT_OBJECT.UC_SELF_SERVICE.UC_SS_STUDENT&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder\'> <div style=\'text-align:center\'> <h1>Normal Menu<\/h1> <\/div><\/a> <div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_GRADE.GBL?Page=SSR_SSENRL_GRADE&Action=A&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Grades<\/h2> <\/div><\/a> <a href=\'https:\/\/payplan.uconn.edu\/C21646_tsa\/web\/welcome.jsp\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Pay Bill<\/h2> <\/div><\/a> <a href=\'https:\/\/uconn.collegescheduler.com\/entry\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Schedule Builder<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UGRD&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Enroll<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?Page=SSR_SS_WEEK&Action=A&ACAD_CAREER=UGRD&AS_OF_DATE=2020-01-21&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>My Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.UC_SS_TERM_BILL.GBL?Page=UC_SS_TERM_BILL&Action=U&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>View Bill<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?Page=SSR_CLSRCH_ENTRY&Action=U&ExactKeys=Y&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Search Classes<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_EXAM_L.GBL?Page=SSR_SSENRL_EXAM_L&Action=A&EMPLID=2303741&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Finals Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SS_AA_REPORT1.GBL?Page=SS_ES_AARPT_TYPE2&Action=A&TargetFrameName=None\'> <div class=\"column\" style=\"background-color:#aaa;\"> <h2>Transcript<\/h2> <\/div><\/a> <\/div><\/body><\/html>'
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
