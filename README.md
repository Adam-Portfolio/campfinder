# Campgrounder
Model-View-Controller Full-Stack web application built with Node.js, Express.js, MonogDB, EJS, and Bootstrap.
Server hosted on Render and Database hosted on MongoDB Atlas.

## 🎥 Live Demo

To see the app in action, go to:
[https://campfinder-9y26.onrender.com](https://campfinder-9y26.onrender.com) 

## 🛠 Technologies
|Front-End	|Back-End	|Database	|Deployment		|
|------     |------   |------   |------       |
|HTML5	 	  |Node.js 	|Mongoose |Render       |
|CSS3	 	    |ExpressJS|MongoDB  |MongoDB Atlas|
|Bootstrap 5|EJS	  	|		      |Git          |
|Javascript	|

## ⚖️ Methodology
-	[Bootstrap 5](https://getbootstrap.com/) as the CSS framework to keep the UI simple and quick to build.
-	[Express.js](https://expressjs.com/) as the Node.js application framework since it's a lightweight framework, which is ideal for gaining an understanding of how to build the backend from scratch. Compared to a framework like [Nest.js](https://nestjs.com/) or even [Django](https://www.djangoproject.com/), Express.js doesn't have many features out of the box.
-	[PassportJs](https://github.com/jaredhanson/passport) for the authentication and authorization.
-	NoSQL database for the flexibility compared to a SQL database, [MongoDB](https://www.mongodb.com/) in particular because of its prevalence in the industry.
-	[Embedded Javascript Templates (EJS)](https://ejs.co/) as the front-end templating language for more DRY code compared to plain HTML and for dynamic user-experiences. This is a simple templating language, similar to [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) for Python. Both however fall short on front-end scalability, modularity, and performance compared to a framework like [React](https://reactjs.org/). Working with simple templating languges helps to remind me the benefits of working with a framework like React.

## ⚙️ Features

* Authentication:
  
  * User login with username and password

* Authorization:

  * One cannot manage posts and view user profile without being authenticated

  * One cannot edit or delete posts and comments created by other users

* Manage campground posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload campground photos

  * Display campground location on Maps
  
  * Search existing campgrounds

* Flash messages responding to users' interaction with the app

* Responsive web design

## 🚀 Getting Started
### Clone or download this repository

```sh
git clone https://github.com/Adam-Portfolio/campfinder.git
```

### Install dependencies

```sh
npm install
```

or

```sh
yarn install
```

### Start server 
```
node app.js
```

## 🔨 Built with

### Front-end

* [ejs](http://ejs.co/)
* [Mapbox APIs](https://www.mapbox.com/)
* [Bootstrap](https://getbootstrap.com/docs/5.2/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [async](http://caolan.github.io/async/)
* [joi](https://github.com/hapijs/joi)
* [helmet](https://helmetjs.github.io/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [cloudinary](https://cloudinary.com/)

### Platforms
* [Render](https://render.com/)
