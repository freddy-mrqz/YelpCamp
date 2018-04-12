var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");


var data = [
  {
    name: "Cloud's Rest",
    image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
    description: ";oiwgosdhgoap howhg oasjg a;shdg lahsg a"
  },
  {
    name: "Desert Mesa",
    image: "https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg",
    description: ";oiwgosdhgoap howhg oasjg a;shdg lahsg a"
  },
  {
    name: "Canyon Floor",
    image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
    description: ";oiwgosdhgoap howhg oasjg a;shdg lahsg a"
  }
]
function seedDB() {
  // remove all campgrounds
  Comment.remove({}, function(err){

  });
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    // console.log("everything removed...");
    // // add a few campground
    // data.forEach(function(seed){
    //   Campground.create(seed, function(err, campground){
    //     if(err){
    //       console.log(err);
    //     }else{
    //       console.log("added a campground");
    //       //create a comment
    //       Comment.create(
    //         {
    //           text: "this place sucks. there is no WiFi!",
    //           author: "Dick"
    //         }, function(err, comment){
    //             if(err){
    //               console.log(err);
    //             }else {
    //               campground.comments.push(comment);
    //               campground.save();
    //               console.log("Created new comment");
    //             }
    //       });
    //     }
    //   });
    // });
  });
}
module.exports = seedDB;
