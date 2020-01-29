# Student Admin Helper 

### Introduction
This is a chrome extension that enhances UConn Student Admin
It does this by replacing the homepage as well adding a navigation bar to allow for quick hopping between pages
__________
### Installation Guide
1) Pull Repo
2) Go to chrome://extensions
3) Click load unpacked and select the folder of the repo
4) Go to student admin


### Guide for editing
The three main files to edit are 

1) contentScript.js
- This file is what runs whenever the tab is on a Student Admin webpage
- On the home page, it replaces the homepage with the new landing page
- On any other page, it adds the new header to the top of the page
- It also does a few things like listen for SA alert messages to load and clean up some things

2) landing.html
- This is simply the HTML file for the new landing page

3) header.html
- This is simply the HTML file for the new header page

####How to edit
As you may see, these HTML files are used to replace the old code in the contentScript.js . They are used in the form of minified and escaped strings. I did this by using online tools to do this.
https://www.willpeavy.com/tools/minifier/
https://www.freeformatter.com/javascript-escape.html

However, there is probably a better way to do this, either a CLI tool, or just load the files each time, or a hook that does it. I didn't do any of this so please feel free to.


### To do
- A few bugs of a random white box showing up at top of landing page
- Change studentadminsucks => newstudentadmin
- Add a better way to develop than having to minify and escape each time
