# Node Booking REST API

Backend server for [React Booking Web application](https://github.com/adarraji/booking-react) and [React Booking Admin Dashboard](https://github.com/adarraji/booking-admin).

Created using Node.js and MongoDB. This server inlcudes Node.js CRUD operations, fetching with queries and MongoDB methods. Also to provide security, This server uses JSON Web Token and verify user and admin requests. 

This is one of three parts of full stack Booking app. You can find the React Booking Web application [here](https://github.com/adarraji/booking-react) and React Booking Admin Dashboard [here](https://github.com/adarraji/booking-admin)


To run the application

1. Clone this repo
2. Run `npm install`
3. Run `npm start


## Built With

* Node.js
* Express.js
* MongoDB
* Bcrypt JS
* JSON Web Token

## Environmental Variables

### MongoDB URL

In the `index.js` replace `process.env.MONGO` with your MongoDB url 


### JSON Web Token secret key

Replace `process.env.JWT` with JWT secret in:
*  `src/auth.js` 
* `verifyToken.js`

## Deployment

Backend deployed on [Render](https://render.com/)

Database deployed on [MongoDB Cloud Services](https://www.mongodb.com/cloud)


## Authors

- **Ali Darraji** - [https://github.com/adarraji](https://github.com/adarraji)