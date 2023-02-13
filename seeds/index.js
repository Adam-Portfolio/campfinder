if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/campfinder", {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({}); // delete everything
  // seed 100 new campgrounds
  for (let i = 0; i < 100; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    // custom
    const name = `${sample(descriptors)} ${sample(places)}`;
    const price = Math.floor(Math.random() * 20) + 10;
    // custom
    const location = `${cities[random1000].city}, ${cities[random1000].state}`;
    const geoData = await geocoder
      .forwardGeocode({
        query: location,
        limit: 1,
      })
      .send();
    // end custom
    const camp = new Campground({
      // My User Id from MongoDB
      author: "63e179a6e02f6abffb1c863b",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
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
          // url: "https://res.cloudinary.com/doh0oy2mj/image/upload/v1675871052/CampFinder/osdujnkip28nnkd5shdb.jpg",
          url: "https://source.unsplash.com/random/500x300?campground%20camping",
          // filename: "CampFinder/osdujnkip28nnkd5shdb",
          filename: "unsplash.com",
        },
        {
          // url: "https://res.cloudinary.com/doh0oy2mj/image/upload/v1675871051/CampFinder/v1p6ol2lux4kqevw4ham.jpg",
          url: "https://source.unsplash.com/random/500x300?campground",
          // filename: "CampFinder/v1p6ol2lux4kqevw4ham",
          filename: "unsplash.com",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
