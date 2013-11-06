# Modern Web Development with JavaScript

This repository contains the class material for the course Modern Web Development with JavaScript.

## Downloading course material

To download the class material, look over to right hand side of this page and click "Download Zip."

This will download a zip file of the respository contents to your "Downloads" directory.

Then extract the contents of the zip to a directory.

## Viewing the slides

To view the slide deck, navigate to the unzipped directory and open the index.html file in your browser.

The slide deck is built using an open source JavaScript library called [reveal.js](https://github.com/hakimel/reveal.js).

Use the arrow keys to navigate the slide deck. The directional pad on the bottom-right corner of the slides tells you which directions you are able to navigate in.

**NOTE:** Make sure you use Google Chrome or Mozilla Firefox...Internet Explorer is currently not supported.

## How-to: set up and run MongoDB (Labs 2-4)

**NOTE:** Instructions assume that you are using a machine running on Windows 7 or 8.

I will add Unix command line instructions at a later date.


1. Open up a new Windows Command Prompt (Start -> Windows Command Processor)

2. Navigate to the MongoDb binary directory: 
	```
	cd C:\mongodb\bin # This assumes that mongodb is installed in the C: directory
	```

3. Create a directory to store your data:
	```
	md data   # Creates the \data directory within the C:\mongodb\bin directory
	cd data   # Go into the \data directory
	md db     # Creates another directory called \db within \data
	cd ..     # Goes back to the C:\mongodb\bin directory
	```

4. Type the following command: 
	```
	mongod --dbpath c:\mongodb\bin\data\db
	```
    MongoDB should now be running on your localhost at port 27017
 
5. Keep this command prompt open and keep MongoDB running!


## How-to: set up and run Node.js web-server (Labs 2-4)

NOTE: Instructions assume that you are using a machine running on Windows 7 or 8.

I will add Unix command line instructions at a later date.


1. Open up a new Windows Command Prompt (Start -> Windows Command Processor)

2. Navigate to the unzipped application directory - 
	```
	cd C:\Users\student\Desktop\modern-web-dev-master\labs\labWorkspaceApp
	```

3. Set the HTTP Proxy (if you are behind a firewall):
	```
	set HTTP_PROXY=http://gatekeeper.mitre.org:80
	```
4. Type the following command to install the necessary dependencies for the Node.js web server:
	```
	npm install
	```

5. Type the following command to run the server:
	```			
	node app.js
	```

6. The application should be running on your localhost at port 3000. Navigate to <code>http://localhost:3000</code> in your browser to access the lab workspaces.

	Always keep this Command Prompt window open!

7. Whenever you are beginning the next lab, make sure to restart the server so that the database is cleared and repopulated with the dummy data. 

   To restart the server, go the command prompt running the Node.js web-server, and type _Ctrl + C_. 

   Then run the command in Step 5 again.

## License

Copyright (C) 2013 Rohit Kalkur, http://www.rovolutionary.com
