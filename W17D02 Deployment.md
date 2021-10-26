# Deployment To Heroku

- In order for heroku to build our application we need to have all our backend files in the repo root level so move all files and delete the folder `backend`
- Be sure that you have mysql2 in backend package.json otherwise run `npm i mysql2`
- In order to serve react static build files we need to add some code in `server.js`:

```js
const path = require('path');
app.use(express.static(path.resolve(__dirname, './client/build')));
```

- add a build script in the root `package.json` that was in backend folder (client: clientDirectory):

```JSON
{
"scripts": {
  "start": "node server.js",
  "build": "cd ./client && npm ci && npm run build"
 }
}
```

## Host MySQL Database Online

- Go to [freesqldatabase](https://www.freesqldatabase.com/)
- Scroll down and under the `MySQL Free` click on `signup`
- Type a valid email and click `register`
- You will receive a verification email to activate your account
- They will ask you to reset your password
- After that login and select the country
- For `Server Location` select `Europe (Mainland)` then click `Save Location`
- Then scroll down and click on `Start new database`
- The process will take few minutes to create the database then you will receive an email with your credentials (the password will be in the email)
- To create your tables click on `Follow this link for phpMy Admin`
- To login you will need to use the same credentials sent to you when the db was created
- You will be navigated to the phpMyAdmin page
- Make sure you select your db by clicking on the db name from the left navigation
- Then to create tables you can either choose the structure or SQL tab from the top navigation
- You can also add seed data if you wish by selecting the table and running your queries
- Now in your `.env` fill in the values correctly
- Please note you will need to activate your db on weekly basis you will get email to keep your db hosted for free

## General notes

- All AJAX calls from the frontend should be relevant to the resource e.g `/users` not `http://localhost:5000/users`
- In order to test in the dev environment you can add a new key-value pair in the frontend package.json

```JSON
{
  "proxy":"http://localhost:5000"
}
```

- Now we can push the code to github
- Create a free account on [heroku](https://signup.heroku.com/login)
- After signin we can click on the `new` button and select `create new app`
- Type the app name `it have to be unique`
- Select `Europe` as region
- Click `create app`
- Under `Deployment method` section click connect to github
- You will need to authorize heroku to access github
- After that write the repo name and click connect

- We are almost done our app is deployed but now we need to add the environment variables in heroku
- Scroll all the way top click on the `settings tab` scroll down and click on the `reveal config vars` button
- Then simply copy your key value pairs from your `.env`and click add
- Scroll to the end under `Manual deploy` click `deploy branch`, **NOTE**: You might need to try this step till it works
- Finally click on the `open app` button, you can find it at the top also
