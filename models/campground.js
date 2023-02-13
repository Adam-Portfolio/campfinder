const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const mongoosePaginate = require("mongoose-paginate-v2");

// Image schema
const ImageSchema = new Schema({
  url: String,
  filename: String,
});

// Image schema virtual
ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

// Campground schema
const campgroundOptions = { toJSON: { virtuals: true } };
const CampgroundSchema = new Schema(
  {
    title: String,
    images: [ImageSchema],
    geometry: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    price: Number,
    description: String,
    location: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  campgroundOptions
);

// Campground schema virtual
CampgroundSchema.virtual("properties.popUpMarkup").get(function () {
  return `<strong><a href="/campgrounds/${this._id}">${this.title}</a></strong>
	<p>${this.description.substring(0, 20)}...</p>`;
});

// Mongoose delete review middleware
CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

CampgroundSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Campground", CampgroundSchema);
