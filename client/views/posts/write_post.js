/**
 * Created by youngmoon on 12/3/14.
 */
Template.writePost.helpers({
  user : function() {
    return Users.findOne();
  }
})