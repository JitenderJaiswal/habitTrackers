# HabitTrackers
FOLDER STRUCTURE

1.routes

2.controllers(C)

3.views(V)

4.models(M)

5.assets

6.config

Routes

Request from browser to server controls through this folder.

Controllers

a) Home:

       render to home page if user add a habit and
       if user open the web page on next a default behaviour is added in the form(Done,Undone,None).
b) Users:

        1.Create:Create habit
        2.Find:find the habit and display on to the browser.
        3.Update:update habit(Done,Undone,None).
        4.Detail:Details of all habit(in numbers Done,Undone,None).
        5.Delete:delte habit.
        
3.Views:

a) Home:

          Add a habit
b) Week:

          Display current date status and also 6 previous days of a week.
          It is dynamic if user open the app on next day days and date will be change.
c) Detail:

          Detail in numbers of task done,undone,none and
          also we can delete a particular habit.

Models

Schema of a table.

Assets

static files css,js.

Config

Connect to Mongodb.
