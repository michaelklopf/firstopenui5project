A sample web application based on OpenUI5 tutorial from developer guide.  
https://openui5.hana.ondemand.com/#docs/guide/b4d66ebee72645c1a3501a769e935541.html

Including
===
Node.js webserver  
Based on express web framework  
Using npm with package.json to install node.js dependencies  
Using bower with bower.json to install front-end dependencies  
Gulp is taking content from views and static, processing it, and placing the files in a folder called dist  
Download OpenUI5 runtime from here https://sap.github.io/openui5/download.html and place the contents in the folder app/ui5  

What to do to get started
===
Download code as zip file, or clone it, depending on your knowledge.  

Unpack the zip to a place that fits your needs.  

Use the OS X Terminal, Linux Console, or Cygwin/PowerShell and navigate to your folder.  
```cd /Users/yourname/yourdevfolder/sapui5app```

Enter the commands that follow in the project folder which includes the app.js file.  

Create a .env file in the project folder for secret stuff. You can enter the following command in your console:  
```touch .env```

Add this to your .env, fill out the values as you wish:  
>PORT=9999  
>SECRETAUTH=makelotsofrandomnumbersandcharshere  
>SESSIONKEY=dothatheretoo

You need to install node first. After that you can install the dependencies like this:  
```npm install```

It automatically knows to load the dependencies described in package.json.  

Start the webserver with typing the following into the console:  
```node app.js```

In your browser, you can reach the application via:  
>http://localhost:9999

Known Issues  
===
The console will always show this message:  
>GET http://localhost:6090/app/Component-preload.js 404 (Not Found)

It's a result of the build process SAP is using, and will probably vanish in future versions of Open UI5. It can be ignored.

---

OData service errors should be prevented by starting Chrome with the arguments --disable-web-security  

Start Chrome like this in your PowerShell  
cd 'C:\Program Files (x86)\Google\Chrome\Application'
./chrome.exe --disable-web-security
