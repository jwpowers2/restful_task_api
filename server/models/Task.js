let mongoose = require('mongoose');

mongoose.model('Task', new mongoose.Schema({

  title:{type: String, required:true, minlength:2, maxlength:255},
  description:{type: String, default:""},
  completed:{type: Boolean,default:false}

},{timestamps: true}));
