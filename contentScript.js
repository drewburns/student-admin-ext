
(function() {

    const url = window.location.toString();
    if (url.includes('student.studentadmin.uconn.edu/psc/CSPR/EMPLOYEE/HRMS/c')) {
        // content page
        mainBody = document.getElementsByTagName('body')[0];
        newHeader = document.createElement("div");
        newHeader.innerHTML = '<!-- <div style=\"height:50px;width:100%;background-color:blue;color:white;\"> <div style=\'margin-right:10px;\'> <a style=\'color:white;text-decoration: none;\' href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/h\/?tab=DEFAULT\'> <h1>Home<\/h1> <\/a> <\/div><\/div>--><head> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <style>*{box-sizing: border-box;}h2{color: black; text-align: center; margin-top: 10px; \/* font-size: px; *\/}@media print{.no-print, .no-print *{display: none !important;}}\/* Create three equal columns that floats next to each other *\/ .column{float: left; width: 33.33%; padding: 0px; \/* margin-top:0px; *\/ height: 50px; background-color: #CCD1CC; \/* border: 1px black solid; *\/}.column:hover{background-color: #A3A7A3;}.column2{float: left; width: 33.33%; padding: 0px; \/* margin-top:0px; *\/ height: 80px; background-color: #CCD1CC; \/* border: 1px black solid; *\/}.column2:hover{background-color: #A3A7A3;}\/* Clear floats after the columns *\/ .row:after{content: \"\"; display: table; clear: both;}.popover__title{font-size: 24px; \/* line-height: 36px; *\/ text-decoration: none; color: rgb(228, 68, 68); text-align: center; \/* padding: 15px 0; *\/}.popover__wrapper{position: relative; \/* margin-top: 1.5rem; *\/ display: inline-block;}.popover__content{opacity: 0; visibility: hidden; position: absolute; left: -12%; transform: translate(0, 10px); background-color: #bfbfbf; padding: 1.5rem; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); width: auto;}.popover__content:before{position: absolute; z-index: -1; content: \"\"; right: calc(50% - 10px); top: -8px; border-style: solid; border-width: 0 10px 10px 10px; border-color: transparent transparent #bfbfbf transparent; transition-duration: 0.3s; transition-property: transform;}.popover__wrapper:hover .popover__content{z-index: 10; opacity: 1; visibility: visible; transform: translate(0, -20px); transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);}.popover__message{text-align: center;}<\/style><\/head><body> <div class=\"row no-print\" > <a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/h\/?tab=DEFAULT\' id=\'quick-links\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;\'> <h2>Back to Dashboard<\/h2> <\/div><\/a> <div class=\"popover__wrapper column\" style=\'border-right: 1px #A3A7A3 solid;\'> <div class=\"\"> <h2 class=\"\">Quick Jump<\/h2> <div class=\"popover__content\" style=\'z-index:999\'> <div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_GRADE.GBL?Page=SSR_SSENRL_GRADE&Action=A&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Grades<\/h2> <\/div><\/a> <a target=\"_blank\" href=\'https:\/\/payplan.uconn.edu\/C21646_tsa\/web\/welcome.jsp\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Pay Bill<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/PRJCS_MENU.PRJCS_SCHD_STRT.GBL?Page=PRJCS_SCHD_STRT&Action=U&TargetFrameName=None\'> <div class=\"column2\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>Schedule Builder<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UGRD&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Enroll<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?Page=SSR_SS_WEEK&Action=A&ACAD_CAREER=UGRD&AS_OF_DATE=2020-01-21&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>My Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.UC_SS_TERM_BILL.GBL?Page=UC_SS_TERM_BILL&Action=U&TargetFrameName=None\'> <div class=\"column2\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>View Bill<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?Page=SSR_CLSRCH_ENTRY&Action=U&ExactKeys=Y&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Search Classes<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_EXAM_L.GBL?Page=SSR_SSENRL_EXAM_L&Action=A&EMPLID=2303741&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Finals Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SS_AA_REPORT1.GBL?Page=SS_ES_AARPT_TYPE2&Action=A&TargetFrameName=None\'> <div class=\"column2\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>Transcript<\/h2> <\/div><\/a> <\/div><\/div><\/div><\/div><a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?1&FolderPath=PORTAL_ROOT_OBJECT.UC_SELF_SERVICE.UC_SS_STUDENT&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder\'> <div class=\"column\"> <h2>Regular Home<\/h2> <\/div><\/a> <\/div><\/div>'
        mainBody.prepend(newHeader);
        // var script = document.createElement("script");
        // script.type="text/javascript";
        // script.innerHTML="\"use strict\";!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error(\"Drift snippet included twice.\"));t.invoked=!0,t.methods=[\"identify\",\"config\",\"track\",\"reset\",\"debug\",\"show\",\"ping\",\"page\",\"hide\",\"off\",\"on\"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date\/3e5),n=document.createElement(\"script\");n.type=\"text\/javascript\",n.async=!0,n.crossorigin=\"anonymous\",n.src=\"https:\/\/js.driftt.com\/include\/\"+e+\"\/\"+t+\".js\";var r=document.getElementsByTagName(\"script\")[0];r.parentNode.insertBefore(n,r)}}}(),drift.SNIPPET_VERSION=\"0.3.1\",drift.load(\"r7zn542h46bb\");";
        // document.getElementsByTagName('head')[0].appendChild(script);
        if (url === "https://student.studentadmin.uconn.edu/psc/CSPR/EMPLOYEE/HRMS/c/PRJCS_MENU.PRJCS_SCHD_STRT.GBL?Page=PRJCS_SCHD_STRT&Action=U&TargetFrameName=None") {
            launchButton = document.getElementById('PRJCS_DERIVED_PRJCS_LAUNCH_CS');
            launchButton.click();
        }
    } else if (url.includes('https://student.studentadmin.uconn.edu/psp/CSPR/EMPLOYEE/HRMS/c/')) {
        mainBody = document.getElementsByTagName('body')[0];
        newHeader = document.createElement("div");
        newHeader.innerHTML = '<!-- <div style=\"height:50px;width:100%;background-color:blue;color:white;\"> <div style=\'margin-right:10px;\'> <a style=\'color:white;text-decoration: none;\' href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/h\/?tab=DEFAULT\'> <h1>Home<\/h1> <\/a> <\/div><\/div>--><head> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <style>*{box-sizing: border-box;}h2{color: black; text-align: center; margin-top: 10px; \/* font-size: px; *\/}@media print{.no-print, .no-print *{display: none !important;}}\/* Create three equal columns that floats next to each other *\/ .column{float: left; width: 33.33%; padding: 0px; \/* margin-top:0px; *\/ height: 50px; background-color: #CCD1CC; \/* border: 1px black solid; *\/}.column:hover{background-color: #A3A7A3;}.column2{float: left; width: 33.33%; padding: 0px; \/* margin-top:0px; *\/ height: 80px; background-color: #CCD1CC; \/* border: 1px black solid; *\/}.column2:hover{background-color: #A3A7A3;}\/* Clear floats after the columns *\/ .row:after{content: \"\"; display: table; clear: both;}.popover__title{font-size: 24px; \/* line-height: 36px; *\/ text-decoration: none; color: rgb(228, 68, 68); text-align: center; \/* padding: 15px 0; *\/}.popover__wrapper{position: relative; \/* margin-top: 1.5rem; *\/ display: inline-block;}.popover__content{opacity: 0; visibility: hidden; position: absolute; left: -12%; transform: translate(0, 10px); background-color: #bfbfbf; padding: 1.5rem; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); width: auto;}.popover__content:before{position: absolute; z-index: -1; content: \"\"; right: calc(50% - 10px); top: -8px; border-style: solid; border-width: 0 10px 10px 10px; border-color: transparent transparent #bfbfbf transparent; transition-duration: 0.3s; transition-property: transform;}.popover__wrapper:hover .popover__content{z-index: 10; opacity: 1; visibility: visible; transform: translate(0, -20px); transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);}.popover__message{text-align: center;}<\/style><\/head><body> <div class=\"row no-print\" > <a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/h\/?tab=DEFAULT\' id=\'quick-links\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;\'> <h2>Back to Dashboard<\/h2> <\/div><\/a> <div class=\"popover__wrapper column\" style=\'border-right: 1px #A3A7A3 solid;\'> <div class=\"\"> <h2 class=\"\">Quick Jump<\/h2> <div class=\"popover__content\" style=\'z-index:999\'> <div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_GRADE.GBL?Page=SSR_SSENRL_GRADE&Action=A&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Grades<\/h2> <\/div><\/a> <a target=\"_blank\" href=\'https:\/\/payplan.uconn.edu\/C21646_tsa\/web\/welcome.jsp\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Pay Bill<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/PRJCS_MENU.PRJCS_SCHD_STRT.GBL?Page=PRJCS_SCHD_STRT&Action=U&TargetFrameName=None\'> <div class=\"column2\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>Schedule Builder<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UGRD&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Enroll<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?Page=SSR_SS_WEEK&Action=A&ACAD_CAREER=UGRD&AS_OF_DATE=2020-01-21&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>My Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.UC_SS_TERM_BILL.GBL?Page=UC_SS_TERM_BILL&Action=U&TargetFrameName=None\'> <div class=\"column2\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>View Bill<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?Page=SSR_CLSRCH_ENTRY&Action=U&ExactKeys=Y&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Search Classes<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_EXAM_L.GBL?Page=SSR_SSENRL_EXAM_L&Action=A&EMPLID=2303741&TargetFrameName=None\'> <div class=\"column2\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Finals Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SS_AA_REPORT1.GBL?Page=SS_ES_AARPT_TYPE2&Action=A&TargetFrameName=None\'> <div class=\"column2\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>Transcript<\/h2> <\/div><\/a> <\/div><\/div><\/div><\/div><a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?1&FolderPath=PORTAL_ROOT_OBJECT.UC_SELF_SERVICE.UC_SS_STUDENT&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder\'> <div class=\"column\"> <h2>Regular Home<\/h2> <\/div><\/a> <\/div><\/div>'
        mainBody.prepend(newHeader);
        navLinks = document.getElementById('pthdr2syslinks')
        navLinks.style.marginTop = '50px';
    } else {
        // home page
        var mainContent = document.getElementById('ptpglts');
        minHtml = '<!DOCTYPE html><html><head> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <style>*{box-sizing: border-box;}h2{color: black; text-align: center; font-size: 35px;}\/* Create three equal columns that floats next to each other *\/ .column{float: left; width: 33.33%; padding: 10px; height: 200px; background-color: #CCD1CC; \/* border-radius: 10px;; *\/ \/* border: 1px #CCD1CC solid; *\/}.column:hover{background-color: #A3A7A3;}\/* Clear floats after the columns *\/ .row:after{content: \"\"; display: table; clear: both;}<\/style><\/head><body> <h2 style=\'text-align:center;\'>Select Your Destination<\/h2> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psp\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?1&FolderPath=PORTAL_ROOT_OBJECT.UC_SELF_SERVICE.UC_SS_STUDENT&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder\'> <div style=\'text-align:center\'> <h1>Normal Menu<\/h1> <\/div><\/a> <div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_GRADE.GBL?Page=SSR_SSENRL_GRADE&Action=A&TargetFrameName=None\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Grades<\/h2> <\/div><\/a> <a target=\"_blank\" href=\'https:\/\/payplan.uconn.edu\/C21646_tsa\/web\/caslogin.jsp\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Pay Bill<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/PRJCS_MENU.PRJCS_SCHD_STRT.GBL?Page=PRJCS_SCHD_STRT&Action=U&TargetFrameName=None\'> <div class=\"column\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>Schedule Builder<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ACAD_CAREER=UGRD&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Enroll<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_SCHD_W.GBL?Page=SSR_SS_WEEK&Action=A&ACAD_CAREER=UGRD&AS_OF_DATE=2020-01-21&EMPLID=2303741&INSTITUTION=UCONN&STRM=1203&TargetFrameName=None\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>My Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.UC_SS_TERM_BILL.GBL?Page=UC_SS_TERM_BILL&Action=U&TargetFrameName=None\'> <div class=\"column\" style=\'border-bottom: 1px #A3A7A3 solid;\'> <h2>View Bill<\/h2> <\/div><\/a> <\/div><div class=\"row\"> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL?Page=SSR_CLSRCH_ENTRY&Action=U&ExactKeys=Y&TargetFrameName=None\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Search Classes<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SSR_SSENRL_EXAM_L.GBL?Page=SSR_SSENRL_EXAM_L&Action=A&EMPLID=2303741&TargetFrameName=None\'> <div class=\"column\" style=\'border-right: 1px #A3A7A3 solid;border-bottom: 1px #A3A7A3 solid;\'> <h2>Finals Schedule<\/h2> <\/div><\/a> <a href=\'https:\/\/student.studentadmin.uconn.edu\/psc\/CSPR\/EMPLOYEE\/HRMS\/c\/SA_LEARNER_SERVICES.SS_AA_REPORT1.GBL?Page=SS_ES_AARPT_TYPE2&Action=A&TargetFrameName=None\'> <div class=\"column\"> <h2>Transcript<\/h2> <\/div><\/a> <\/div><\/body><\/html>'
        mainContent.outerHTML = minHtml
        // var script = document.createElement("script");
        // script.type="text/javascript";
        // script.innerHTML="\"use strict\";!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error(\"Drift snippet included twice.\"));t.invoked=!0,t.methods=[\"identify\",\"config\",\"track\",\"reset\",\"debug\",\"show\",\"ping\",\"page\",\"hide\",\"off\",\"on\"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date\/3e5),n=document.createElement(\"script\");n.type=\"text\/javascript\",n.async=!0,n.crossorigin=\"anonymous\",n.src=\"https:\/\/js.driftt.com\/include\/\"+e+\"\/\"+t+\".js\";var r=document.getElementsByTagName(\"script\")[0];r.parentNode.insertBefore(n,r)}}}(),drift.SNIPPET_VERSION=\"0.3.1\",drift.load(\"r7zn542h46bb\");";
        // document.getElementsByTagName('head')[0].appendChild(script);
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
