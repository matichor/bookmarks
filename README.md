# Avalog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Project description
Bookmark manager is arranged into three modules: core, main and shared.
- The Shared module is composed of two component: bookmark-form(As the name suggests this    is bookmark form,  which allows to add new bookmark) and bookmarks ( Display list of       bookmars listed in groups. There are available actions such as, for instance 'delete       bookmark' or 'go to website')

- Main module - It shall manage whole bookmarks view (forms and list)

- Core module - Includes ngrx store functionality

In accordance with the arrangements set out in the documet. The application 
have been developed with the use of library such as ngrx or angular material.

## Screnshoots

![Alt text](https://github.com/matichor/bookmarks/blob/master/bookmark_view_sample.PNG?raw=true "Bookmarks view")

![Alt text](https://github.com/matichor/bookmarks/blob/master/bookmark_view_sample.PNG?raw=true "Bookmarks view")

![Alt text](https://raw.githubusercontent.com/matichor/bookmarks/master/bookmark_form.PNG "Bookmark form")

![Alt text](https://raw.githubusercontent.com/matichor/bookmarks/master/bookmark_form_validation.PNG "Bookmark form validation")

## How to run the application

Once downloaded repository. Just run  following  commands:
1. npm install - Install  libraries (from package.json)
2. ng serve (if you prefer the short version, just run 'ng s') - Run application