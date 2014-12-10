/**
 * Created by youngmoon on 12/3/14.
 */
Template.writePost.helpers({
  user : function() {
    return Meteor.user();
  }
})

Template.writePost.events = {
  'submit form': function(evt, tmpl) {
    evt.preventDefault();
    var caption = evt.target.caption.value;
    Meteor.call('Post', caption);
    evt.target.caption.value = '';
    $('body').scrollTop(0);
  }
}

Template.writePost.rendered = function() {

}