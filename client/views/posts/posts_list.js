/**
 * Created by youngmoon on 12/3/14.
 */
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});