const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  // const c = new Campground({ title: 'purple field' });
  // await c.save();
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '62323c869e7648d4160df3ea',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores porro veritatis quaerat totam sint! Sed provident sequi molestiae asperiores molestias quasi natus, doloribus est ipsam expedita nisi, amet odio fugiat?',
      price,
      images: [
        {
          url: 'https://res.cloudinary.com/dkj3vq23f/image/upload/v1647743752/YelpCamp/k0gom4hpfeccuqugfyxz.jpg',
          filename: 'YelpCamp/k0gom4hpfeccuqugfyxz'
        },
        {
          url: 'https://res.cloudinary.com/dkj3vq23f/image/upload/v1647743752/YelpCamp/fgjhusq07zuxbtoez0hi.jpg',
          filename: 'YelpCamp/fgjhusq07zuxbtoez0hi'
        },
        {
          url: 'https://res.cloudinary.com/dkj3vq23f/image/upload/v1647743752/YelpCamp/jryxjmzjtl1sxddaunvx.jpg',
          filename: 'YelpCamp/jryxjmzjtl1sxddaunvx'
        }
      ]
        })
    await camp.save();
  }
}

seedDB().then(() => {
  mongoose.connection.close();
})