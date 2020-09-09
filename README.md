# Sports Learning Online

In Sports organizations, there is a lack of problem solving and business skill set. Most of the time, Professional development is not prioritised within the industry. Another problem is the Siloed scenario, which is present in almost every level of industry. As a solution to provide basic skill sets to professionals, presenting our application, SLO (Sports Learning Online).SLO is a content aggregation platform that focuses on providing industry related content to its target markets.SLO hopes to open up the world of sports outside of the siloed sports organizations.

For the frontend , we used React, Material UI and Quill JS and for the backend we used Express, Nodejs and PostgresSql. Currently SLO has two types of users. An author and a student. The author can create and manage  courses. And students can search for the available courses and can buy the courses accordingly.

## SneakPeek of SLO

### Screenshot of Register
!["Screenshot of Register"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/Register.png?raw=true)

### Screenshot of Author home page
!["Screenshot of Author home page"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/Authorhomepage.png?raw=true)

### Screenshot of Create Course page
!["Screenshot of Create Course page"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/CreateCourse.png?raw=true)

### Screenshot of Manage Course page
!["Screenshot of Manage Course page"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/ManageCourse.png?raw=true)

### Screenshot of Edit Profile page
!["Screenshot of Edit Profile page"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/EditProfile.png?raw=true)

### Screenshot of Revenue Report page
!["Screenshot of Revenue Report page"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/RevenueReport.png?raw=true)

### Screenshot of Student home page
!["Screenshot of Student home page"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/Studenthomepage.png?raw=true)

### Screenshot of Search bar
!["Screenshot of Search bar"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/Search.png?raw=true)

### Screenshot of Add to cart
!["Screenshot of Add to cart"](https://github.com/poojathakkar/sports_learning_online/blob/master/docs/AddtoCart.png?raw=true)

## Project Setup

The project has 2 main folders:

 - client (React Front-End)
 - backend (Express Back-End)

 Run npm install in both folders to install the dependencies.

 To start both servers:

 `npm start` in the client folder
 `npm run dev` in the backend folder

 ## Back-End Setup

- create a postgres database. At the terminal, type the following:

  `createdb database_name -O username`

  replace database_name with your database name and username with your own user.

- create a `.env` file with your database settings. Look at .env.example for usage.


- Modify the sql scripts under `db/schema/` to create the tables and seed the data.

- run `npm run reset` that will run the reset scripts in package.json to reset the database. Modify the reset script in package.json accordingly:

```json
"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
    "reset": "psql -U labber -d final_project < ./db/schema/create.sql && psql -U labber -d final_project < ./db/schema/seed.sql"
  },
```
- replace `labber` with your own username and `final_project` with your database name

- currently, the users route is setup with a get and a post as examples. Modify it according to your needs and/or create additional route files.

## Client Setup

- A custom hook in `hooks/useApplicationData.js` contains the state.
- a `useEffect` with an axios request is adding the users in the state. Modify the initial state and the useEffect according to your needs. 


