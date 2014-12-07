/**
 * Created by youngmoon on 12/3/14.
 */
Template.postItem.helpers({
  post: function() {
    return this;
  },
  writer: function() {
    var writer = Meteor.users.findOne(this.writer);
    return writer.username;
  },
  createdAt: function() {
    var d = new Date(this.createdAt);
    return (d.getFullYear()+' / '+ d.getMonth()+' / '+ d.getDate());
  }
});

Template.postItem.events({
  'click .fa-trash-o': function() {
    console.log(this);
    Meteor.call('deletePost', this._id);
  }
});