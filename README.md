# Wordpress to gh-pages

* Export your files from wp
* Use https://github.com/dreikanter/wp2md for convert your wordpress.xml file.
* Insert your posts in posts dir
* Run ``` node renameFiles.js ``` to rename your files ( Will delete date infront of the file name )
* Run ``` node removeDummyLines.js ``` for remove dummy first 12 line.
