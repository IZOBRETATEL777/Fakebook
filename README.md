# Fakebook hacking app

A special login form that emirates a Facebook login page and stores all credentials in the target DB. **ONLY FOR LEARNING AND SCIENTIFIC PURPOSES**.

## Technology Stack:
+ node.js
+ Express + EJS template engine
+ MySQL database
+ Docker can be integrated

## How to start:
1. Install necessary dependencies:
`npm install`

2. Start MySQL Database. The easiest way to do with Docker:
`docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345678`

3. Prepare the DB using the `init_db.sql` script.

3. Start the app:
`node app.js`

4. Open the app in your browser:
`http://localhost:3000`

Please, note that the DB credentials are hardcoded in the `app.js` file :).

## Preview
![Screen](./docs/screen.png)
