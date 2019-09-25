/******************
PROBLEM 1:

In this problem, you will be downloading some files from online, then creating a custom project with git initialized. You will then one by one structure the files and make commits to git as needed.

1. Download this repository from the homepage by clicking "Clone or download", then "Download ZIP". You will be using the files from the /stuff directory.
2. Once the repository has been downloaded, go ahead and unzip it.

3. Achieve the following structure ONLY using command line:

~/Desktop/pset2
    /assets
        /images
            amazon.jpg
            facebook.png
            google.jpg
            twitter.png
        /memes
            meme.jpg
        /src
            foo.js
    app.js
    hello.html

4. Open `hello.html` using a code editor and change "SOME_CLASS" to "Full Stack: Nights & Weekends". Save it.

5. You should have the following commits:
- git initialized
- added app.js
- added hello.html
- created assets directory
- added all images & memes
- added all sources
- modified hello file
******************/

Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git init
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ mkdir pset2
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git add pset1.js
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ cd pset2
Zones-MacBook-Air:pset2 zone126$ mkdir assets
Zones-MacBook-Air:pset2 zone126$ cd assets
Zones-MacBook-Air:assets zone126$ mkdir images
Zones-MacBook-Air:assets zone126$ mkdir memes
Zones-MacBook-Air:assets zone126$ mkdir src
Zones-MacBook-Air:assets zone126$ cd .. / ..
Zones-MacBook-Air:pset2 zone126$ cd ..
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ cd stuff
Zones-MacBook-Air:stuff zone126$ mv facebook.png ..
Zones-MacBook-Air:stuff zone126$ mv google.jpg ..
Zones-MacBook-Air:stuff zone126$ mv twitter.png ..
Zones-MacBook-Air:stuff zone126$ mv meme.jpg ..
Zones-MacBook-Air:stuff zone126$ mv foo.js ..
Zones-MacBook-Air:stuff zone126$ mv app.js ..
Zones-MacBook-Air:stuff zone126$ mv hello.html ..
Zones-MacBook-Air:stuff zone126$ cd ..
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ cd pset2
Zones-MacBook-Air:pset2 zone126$ mv facebook.png assets
Zones-MacBook-Air:pset2 zone126$ cd assets
Zones-MacBook-Air:assets zone126$ mv facebook.png images
Zones-MacBook-Air:assets zone126$ cd .. / ..
Zones-MacBook-Air:pset2 zone126$ cd ..
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ mv *.jpg *.png foo.js pset2
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ cd pset2
Zones-MacBook-Air:pset2 zone126$ mv google.jpg amazon.jpg twitter.png assets/images
Zones-MacBook-Air:pset2 zone126$ mv memes.jpg assets/memes
Zones-MacBook-Air:pset2 zone126$ mv foo.js assets/src
Zones-MacBook-Air:pset2 zone126$ cd ..
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ mv app.js hello.html pset2/assets
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .DS_Store
        modified:   pset1.js
        deleted:    stuff/amazon.jpg
        deleted:    stuff/app.js
        deleted:    stuff/facebook.png
        deleted:    stuff/foo.js
        deleted:    stuff/google.jpg
        deleted:    stuff/hello.html
        deleted:    stuff/meme.jpg
        deleted:    stuff/twitter.png

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        pset2/

no changes added to commit (use "git add" and/or "git commit -a")
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git add pset2
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   pset2/.DS_Store
        new file:   pset2/assets/.DS_Store
        new file:   pset2/assets/app.js
        new file:   pset2/assets/facebook.png
        new file:   pset2/assets/hello.html
        new file:   pset2/assets/images/amazon.jpg
        new file:   pset2/assets/images/google.jpg
        new file:   pset2/assets/images/twitter.png
        new file:   pset2/assets/memes/memes.jpg
        new file:   pset2/assets/src/foo.js

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .DS_Store
        modified:   pset1.js
        deleted:    stuff/amazon.jpg
        deleted:    stuff/app.js
        deleted:    stuff/facebook.png
        deleted:    stuff/foo.js
        deleted:    stuff/google.jpg
        deleted:    stuff/hello.html
        deleted:    stuff/meme.jpg
        deleted:    stuff/twitter.png

Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git commit -m "Problem Set 2 Complete"
[master 156901d] Problem Set 2 Complete
 10 files changed, 9 insertions(+)
 create mode 100644 pset2/.DS_Store
 create mode 100644 pset2/assets/.DS_Store
 create mode 100644 pset2/assets/app.js
 create mode 100644 pset2/assets/facebook.png
 create mode 100644 pset2/assets/hello.html
 create mode 100644 pset2/assets/images/amazon.jpg
 create mode 100644 pset2/assets/images/google.jpg
 create mode 100644 pset2/assets/images/twitter.png
 create mode 100644 pset2/assets/memes/memes.jpg
 create mode 100644 pset2/assets/src/foo.js
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .DS_Store
        modified:   pset1.js
        deleted:    stuff/amazon.jpg
        deleted:    stuff/app.js
        deleted:    stuff/facebook.png
        deleted:    stuff/foo.js
        deleted:    stuff/google.jpg
        deleted:    stuff/hello.html
        deleted:    stuff/meme.jpg
        deleted:    stuff/twitter.png

no changes added to commit (use "git add" and/or "git commit -a")
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git add pset1.js
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   pset1.js

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .DS_Store
        deleted:    stuff/amazon.jpg
        deleted:    stuff/app.js
        deleted:    stuff/facebook.png
        deleted:    stuff/foo.js
        deleted:    stuff/google.jpg
        deleted:    stuff/hello.html
        deleted:    stuff/meme.jpg
        deleted:    stuff/twitter.png

Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git commit -m "Command Line Problem Sets Complete"
[master 3e48bc4] Command Line Problem Sets Complete
 1 file changed, 1 insertion(+), 1 deletion(-)
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .DS_Store
        deleted:    stuff/amazon.jpg
        deleted:    stuff/app.js
        deleted:    stuff/facebook.png
        deleted:    stuff/foo.js
        deleted:    stuff/google.jpg
        deleted:    stuff/hello.html
        deleted:    stuff/meme.jpg
        deleted:    stuff/twitter.png

no changes added to commit (use "git add" and/or "git commit -a")
Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git push origin master
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 4 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (13/13), 1.98 KiB | 338.00 KiB/s, done.
Total 13 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 1 local object.
To https://github.com/helisian/PCNWLab-Command-Line.git
   2e2d9b6..3e48bc4  master -> master

   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git add pset1.js
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
   On branch master
   Your branch is ahead of 'origin/master' by 1 commit.
     (use "git push" to publish your local commits)
   
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)
           modified:   pset1.js
   
   Changes not staged for commit:
     (use "git add/rm <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   .DS_Store
           deleted:    stuff/amazon.jpg
           deleted:    stuff/app.js
           deleted:    stuff/facebook.png
           deleted:    stuff/foo.js
           deleted:    stuff/google.jpg
           deleted:    stuff/hello.html
           deleted:    stuff/meme.jpg
           deleted:    stuff/twitter.png
   
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git commit -m "Command Line Problem Sets Complete"
   [master 3e48bc4] Command Line Problem Sets Complete
    1 file changed, 1 insertion(+), 1 deletion(-)
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
   On branch master
   Your branch is ahead of 'origin/master' by 2 commits.
     (use "git push" to publish your local commits)
   
   Changes not staged for commit:
     (use "git add/rm <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   .DS_Store
           deleted:    stuff/amazon.jpg
           deleted:    stuff/app.js
           deleted:    stuff/facebook.png
           deleted:    stuff/foo.js
           deleted:    stuff/google.jpg
           deleted:    stuff/hello.html
           deleted:    stuff/meme.jpg
           deleted:    stuff/twitter.png
   
   no changes added to commit (use "git add" and/or "git commit -a")
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git push origin master
   Enumerating objects: 15, done.
   Counting objects: 100% (15/15), done.
   Delta compression using up to 4 threads
   Compressing objects: 100% (11/11), done.
   Writing objects: 100% (13/13), 1.98 KiB | 338.00 KiB/s, done.
   Total 13 (delta 3), reused 0 (delta 0)
   remote: Resolving deltas: 100% (3/3), completed with 1 local object.
   To https://github.com/helisian/PCNWLab-Command-Line.git
      2e2d9b6..3e48bc4  master -> master
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
   On branch master
   Your branch is up to date with 'origin/master'.
   
   Changes not staged for commit:
     (use "git add/rm <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   .DS_Store
           modified:   pset2/assets/.DS_Store
           deleted:    stuff/amazon.jpg
           deleted:    stuff/app.js
           deleted:    stuff/facebook.png
           deleted:    stuff/foo.js
           deleted:    stuff/google.jpg
           deleted:    stuff/hello.html
           deleted:    stuff/meme.jpg
           deleted:    stuff/twitter.png
   
   no changes added to commit (use "git add" and/or "git commit -a")
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git commit -a "Command Line Problem Sets Complete"
   fatal: paths 'Command Line Problem Sets Complete ...' with -a does not make sense
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git commit -m "Command Line Problem Sets Complete"
   On branch master
   Your branch is up to date with 'origin/master'.
   
   Changes not staged for commit:
           modified:   .DS_Store
           modified:   pset2.js
           modified:   pset2/assets/.DS_Store
           deleted:    stuff/amazon.jpg
           deleted:    stuff/app.js
           deleted:    stuff/facebook.png
           deleted:    stuff/foo.js
           deleted:    stuff/google.jpg
           deleted:    stuff/hello.html
           deleted:    stuff/meme.jpg
           deleted:    stuff/twitter.png
   
   no changes added to commit
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git add pset2.js
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git commit -m "Command Line Problem Sets Complete"
   [master 809366b] Command Line Problem Sets Complete
    1 file changed, 179 insertions(+)
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git status
   On branch master
   Your branch is ahead of 'origin/master' by 1 commit.
     (use "git push" to publish your local commits)
   
   Changes not staged for commit:
     (use "git add/rm <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   .DS_Store
           modified:   pset2/assets/.DS_Store
           deleted:    stuff/amazon.jpg
           deleted:    stuff/app.js
           deleted:    stuff/facebook.png
           deleted:    stuff/foo.js
           deleted:    stuff/google.jpg
           deleted:    stuff/hello.html
           deleted:    stuff/meme.jpg
           deleted:    stuff/twitter.png
   
   no changes added to commit (use "git add" and/or "git commit -a")
   Zones-MacBook-Air:PCNWLab-Command-Line zone126$ git push origin master
   Enumerating objects: 5, done.
   Counting objects: 100% (5/5), done.
   Delta compression using up to 4 threads
   Compressing objects: 100% (3/3), done.
   Writing objects: 100% (3/3), 1.80 KiB | 924.00 KiB/s, done.
   Total 3 (delta 1), reused 0 (delta 0)
   remote: Resolving deltas: 100% (1/1), completed with 1 local object.
   To https://github.com/helisian/PCNWLab-Command-Line.git
      3e48bc4..809366b  master -> master