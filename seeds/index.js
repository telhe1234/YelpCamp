const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

// mongoose.connect("mongodb://localhost:27017/yelp-camp", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/yelp-camp";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  // const c = new Campground({ title: 'purple field' });
  // await c.save();
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "623d208f3d222c587b2f279e",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores porro veritatis quaerat totam sint! Sed provident sequi molestiae asperiores molestias quasi natus, doloribus est ipsam expedita nisi, amet odio fugiat?",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dkj3vq23f/image/upload/v1648308394/YelpCamp/fzfbre7ecpzmn8kpueym.jpg",
          filename: "YelpCamp/fzfbre7ecpzmn8kpueym",
        },
        {
          url: "https://res.cloudinary.com/dkj3vq23f/image/upload/v1648308394/YelpCamp/c7xycvybjbebxqelmtxv.jpg",
          filename: "YelpCamp/c7xycvybjbebxqelmtxv",
        },
        {
          url: "https://res.cloudinary.com/dkj3vq23f/image/upload/v1648308395/YelpCamp/hwbuyie5xfygukl1xkt4.jpg",
          filename: "YelpCamp/hwbuyie5xfygukl1xkt4",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
