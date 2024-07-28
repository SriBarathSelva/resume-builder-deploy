const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialization: String,
  careerObjective: String,
  education: [{
    school: String,
    degree: String,
    mark:String,
    year: String
  }],
  workExperience: [{
    title:String,
    describe:String
  }],
  project: [{
    title:String,
    describe:String
  }],
  internship: [{
    title:String,
    describe:String
  }],
  course: [String],
  achievement: [String],
  address1: String,
  address2: String,
  phone: String,
  email: { type: String, required: true },
  linkinId: String,
  githubId: String,
  skills: [String],
  areaOfInterest: [String],
  personaltraits: [String],
  languageKnown: [String],
  imageUrl: String
  
});

module.exports = mongoose.model('Resume', resumeSchema);
