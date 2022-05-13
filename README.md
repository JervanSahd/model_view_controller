# Tech Blog : Model-View-Controller (MVC)

CMS-style blog site allowing developers to publish articles, blog posts, thoughts and opinions.

## Description

A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Deploy to Heroku, this app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Criteria

```md
- When visit the site for the first time the user is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

- Homepage link takes user to the homepage

- Any other links in the navigation prompts user to either sign up or sign in

- If click sign up user is prompted to create a username and password

- If click on the sign-up button user credentials are saved and are logged into the site

- When user revisits the site at a later time and choose to sign in they are prompted to enter my username and password

- Navigation links for the homepage, the dashboard, and the option to log out visible for signed in users.

- Homepage link in the navigation takes user to the homepage and are presented with existing blog posts that include the post title and the date created

- Existing blog post link presents user with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

- User can enter a comment and click on the submit button while signed in and the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

- The dashboard option in the navigation takes user to the dashboard and presented with any blog posts already created and the option to add a new blog post

- The button to add a new blog post prompts user to enter both a title and contents for my blog post

- The button to create a new blog post saves the title and contents of user post and taken back to an updated dashboard with user new blog post

- User are able to delete or update their existing posts in the dashboard and are taken back to an updated dashboard

- The logout option in the navigation signs out of the site

- When user is idle on the site for more than a set time they are able to view comments but are prompted to log in again before they can add, update, or delete comments
```

## Technologies

This application’s folder structure follows the Model-View-Controller paradigm and uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for Controllers.

It also uses the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When user is idle on the site for more than a set time, the cookie will expire and they will be required to log in again to start a new session.

---

# STRUCTURE

---

## HOME PAGE FEATURE:

```md
- USER LOGGED IN OR NOT LOGGED IN
- NAV: HOME / DASHBOARD / SIGN UP / LOGIN (if user is logged out) || LOGOUT (if user is logged in)
- GET: ALL BLOGPOST - includes existing blog posts if any have been posted, post title and date created
- GET: When visit the site for the first time the user is presented with the homepage,
- AUTHENTICATE USER/GET: Any other links in the navigation prompts user to either sign up or sign in
```

### HOME ONE POST FEATURE

```md
- For users not logged in
- GET: Choosen blog post homepage
```

### SIGNUP FEATURE:

```md
- For users not logged in
- GET: If click sign up user is prompted to create a username and password
- GET: Log in after sign-up - If click on the sign-up button user credentials are saved and are logged into the site
- POST: credentials are saved
```

### LOGIN FEATURE:

```md
- For users not logged in
- GET: When user revisits the site at a later time and choose to sign in they are prompted to enter my username and password
- SESSION TIME OUT: When user is idle on the site for more than a set time they are able to view comments but are prompted to log in again before they can add, update, or delete comments
```

### LOGOUT FEATURE:

```md
- For users logged in
- SESSION END: The logout option in the navigation signs out of the site
```

---

## DASHBOARD FEATURE:

```md
- USER LOGGED IN
- GET: (user blog posts, add new blog posts, )
- GET: all - presented with all blog posts already created
- GET: one - choose a blog posts already created
- GET: DASHBOARD ADD POST FEATURE
```

## DASHBOARD ONE POST FEATURE

```md
- POST: The button to add a new blog post prompts user to enter both a title and contents for user blog post
- GET: taken back to an updated blog post dashboard with user new blog post
- GET: POST COMMENT FEATURE

### DASHBOARD ADD POST FEATURE

- POST: The button to add a new blog post prompts user to enter both a title and contents for user blog post
- GET: taken back to an updated dashboard with user new blog post

### DASHBOARD DELETE POST FEATURE

- DELETE: The button to delete blog post prompts
- GET: Taken back to an updated dashboard with deleted blog post

### DASHBOARD EDIT POST FEATURE

- PUT: The button to edit a blog post
- GET: Taken back to an updated dashboard with user edited blog post
```

### POST COMMENT FEATURE: USER LOGGED IN

```md
- POST: User can enter a post comment, creator username, and date created and click on the submit button
- GET: the post is updated to display the comment, the comment creator’s username, and the date created
```

---

Steve Snavely
