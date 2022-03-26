# YelpCamp Project

YelpCamp is a website where users can create and review campgrounds. YelpCamp includes a cluster map that displays markers of all the campgrounds available . In order to review or create a campground, you must have an account. This project was part of Colt Steele's 'The Web Developer Bootcamp 2021' on Udemy.

This web app uses HTML, Bootstrap, plain ol' css, JS for its front-end, and Node, Express, MongoDB for its back-end. Passport was also used to handle authentication.

## Final Product

!["Screenshot of YelpCamp Main Page the Desktop Version"](https://github.com/telhe1234/YelpCamp/blob/main/docs/YelpCamp_IMain_Page.png)

!["Screenshot of YelpCamp Main Page the Mobile and Tablet Version""](https://github.com/telhe1234/YelpCamp/blob/main/docs/main_page_phone_version.jpg)

!["Screenshot of YelpCamp Campgrounds Page the Desktop Version"](https://github.com/telhe1234/YelpCamp/blob/main/docs/campgrounds_index_Page.png)

!["Screenshot of YelpCamp Campgrounds Page the Mobile and Tablet Version""](https://github.com/telhe1234/YelpCamp/blob/main/docs/campgrounds_samples.jpg)

!["Screenshot of Cluster Map"](https://github.com/telhe1234/YelpCamp/blob/main/docs/cluster_Map.png)

!["Screenshot of Login Form"](https://github.com/telhe1234/YelpCamp/blob/main/docs/login_page.png)

!["Screenshot of Review Form and List of Reviews"](https://github.com/telhe1234/YelpCamp/blob/main/docs/leave_a_review_and_reviews_list.png)

!["Screenshot of New Campground Form"](https://github.com/telhe1234/YelpCamp/blob/main/docs/create_new_campground_page.png)

## Getting Started

1. git clone git@github.com:telhe1234/YelpCamp.git for ssh and https://github.com/telhe1234/YelpCamp.git for HTTPS
   cd yelpcamp
2. Install dependencies using the `npm install` command.
3. Create a .env file in the root of the project and add the following:

   CLOUDINARY_CLOUD_NAME=<name>
   CLOUDINARY_KEY=<key>
   CLOUDINARY_SECRET=<secret>
   MAPBOX_TOKEN=<token>
   DB_URL=<<url>
   PORT=80

4. Install mongodb and run mongod in another terminal
5. Create a cloudinary account to get an API key and secret token 6. Start the web server using the `node app.js` or `npm start` command. The app will be served at <http://localhost:3000/>.
6. Go to <http://localhost:3000/> in your browser.

## Dependencies

- Express
- Node
- mapbox
- dotenv
- Helmet
- Joi
- Cloudinary
- method-override
- Mongoose
- Passport
- sanitize-html
