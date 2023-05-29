# Node Booking REST API

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