import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the schema for the external UI details
const ExternalUISchema = new Schema({
  main_image: { type: String, required: true },
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  note: { type: String },
  rating: { type: String },
  stars: { type: String },
  hours: { type: String },
  price: { type: String },
  duration: { type: String },
  bonus: { type: String },
});

// Define the schema for offers in internal UI
const OfferSchema = new Schema({
  title: { type: String, required: true },
  info: { type: String, required: true },
});

// Define the schema for tour details in internal UI
const TourDetailSchema = new Schema({
  title: { type: String, required: true },
  info: { type: String, required: true },
});

// Define the schema for description details
const DescriptionSchema = new Schema({
  things_to_know: [{ type: String }],
});

// Define the schema for internal UI details
const InternalUISchema = new Schema({
  main_image: { type: String, required: true },
  introduction: { type: String, required: true },
  offers: [OfferSchema],
  tour_details: [TourDetailSchema],
  description: DescriptionSchema,
  inclusions: [{ type: String }],
  exclusions: [{ type: String }],
  meeting_point: { type: String, required: true },
});

// Define the main schema for the tour
const TourSchema = new Schema({
  order: { type: String, required: true },
  bookeo_link: { type: String, required: true },
  repuso_link: { type: String },
  external_ui: ExternalUISchema,
  internal_ui: InternalUISchema,
});

// Export the model
const TourModel = mongoose.model('Tour', TourSchema);

export default TourModel;
