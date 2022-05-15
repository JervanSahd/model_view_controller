# Tech Blog - Model-View-Controller (MVC):

A CMS-style blog site for developers who writes about tech through published articles, blog posts, and thoughts and opinions

## Your Task

Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This CMS-style blog site similar to a Wordpress site, is where developers can publish their blog posts and comment on other developers’ posts as well. Deploy to Heroku this app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## CMS-style blog site Criteria

```md
- User visits the site for the first time they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

- Click on the homepage option user is taken to the homepage

- Click on any other links in the navigation user is prompted to either sign up or sign in

- Choose to sign up user is prompted to create a username and password

- Click on the sign-up button user credentials are saved and user is logged into the site

- Revisit the site at a later time and choose to sign in user is prompted to enter user's username and password

- Signed in to the site the navigation links for the homepage, the dashboard, and the option to log out are visible

- Click on the homepage option in the navigation user is taken to the homepage and presented with existing blog posts that include the post title and the date created

- Click on an existing blog post user is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

- Enter a comment and click on the submit button while signed in the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

- Click on the dashboard option in the navigation user is taken to the dashboard and presented with any blog posts user has already created and the option to add a new blog post

- Click on the button to add a new blog post and prompted to enter both a title and contents for blog post

- Click on the button to create a new blog post the title and contents of user post are saved and are taken back to an updated dashboard with new blog post

- Click on one of users existing posts in the dashboard ability to delete or update my post and taken back to an updated dashboard

- Click on the logout option in the navigation signs user out of the site

- Idle on the site for more than a set time veiwable comments but prompted to log in again before add, update, or delete comments
```

## Technology Structure

```md
- Folder structure follow the Model-View-Controller paradigm.

- [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for Views

- [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models

- An Express.js API for your Controllers.

- [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables

- [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords

- [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session.
```
