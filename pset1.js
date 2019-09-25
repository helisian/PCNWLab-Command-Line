/******************
PROBLEM 1:

Follow the following steps ONLY using your command line:

1. Navigate to your Desktop directory. 
2. Create a directory called my_first_direc.
3. Enter the my_first_direc directory.
4. Create a file called first.js.
5. Create a folder called assignments.
6. Move first.js into assignments.
7. Go into the assignments folder.
8. Delete first.js.
9. Go up to the my_first_direc directory.
10. Delete the assignments folder.
11. Go up to the Desktop directory.
12. Delete the test folder.

/Users/zone126/Desktop
Zones-MacBook-Air:Desktop zone126$ mkdir my_first_direc
Zones-MacBook-Air:Desktop zone126$ cd my_first_direc
Zones-MacBook-Air:my_first_direc zone126$ touch first.js
Zones-MacBook-Air:my_first_direc zone126$ pwd
/Users/zone126/Desktop/my_first_direc
Zones-MacBook-Air:my_first_direc zone126$ mkdir assignments
Zones-MacBook-Air:my_first_direc zone126$ pwd
/Users/zone126/Desktop/my_first_direc
Zones-MacBook-Air:my_first_direc zone126$ mv first.js assignments
Zones-MacBook-Air:my_first_direc zone126$ cd assignments
Zones-MacBook-Air:assignments zone126$ rm first.js
Zones-MacBook-Air:assignments zone126$ cd ..
Zones-MacBook-Air:my_first_direc zone126$ rm -r assignments
Zones-MacBook-Air:my_first_direc zone126$ cd ..
Zones-MacBook-Air:Desktop zone126$ rm -r my_first_direc

******************/


/******************
PROBLEM 2:

Follow the following steps ONLY using your command line:

1. Navigate to the inside of your Documents folder
3. Create a file called foo.js
4. Open the file with a text editor, (Atom/VSCode)
5. Add the following text to the file: console.log('hello')
6. Save and exit the file
7. Open the file again with a text editor, (Atom/VSCode)
8. Add the following in a new line: hellohellohello
9. Exit without saving


Zones-MacBook-Air:~ zone126$ cd Documents
Zones-MacBook-Air:Documents zone126$ touch foo.js
Zones-MacBook-Air:Documents zone126$ code foo.js
Zones-MacBook-Air:Documents zone126$ code foo.js
******************/




