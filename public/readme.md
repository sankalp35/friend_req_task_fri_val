Updated 24 December 2020 by Sankalp Garud  
This application starts in index.html which imports necessary javascript
main.js has core task timelines defintions. It also contains code for instructions.
main.js becomes bundle.js using browserify. I'm importing the clock code through "require" which is a node functionality
faceBlock.js is responsible for running every block

CAUTION: Never edit bundle.js directly. Always modify main.js and use browserify to make the bundle!
