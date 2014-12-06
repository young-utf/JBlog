/**
 * Created by youngmoon on 12/3/14.
 */
Template.writePost.helpers({
  user : function() {
    return Users.findOne();
  }
})

Template.writePost.events = {
  'click .post-button': function(evt, tmpl) {
    //console.log(evt);
    //console.log(tmpl);
    Session.set('loginUser', Users.find({userName:'youngmoon'}).fetch());
    Deps.autorun( function() {console.log(Session.get('loginUser'));} );
    alert($(window).width());
  }
}

Template.writePost.rendered = function() {
  Session.set('loginUser', Users.find({userName:'youngmoon'}).fetch());
  console.log(Session.get('loginUser'));
}