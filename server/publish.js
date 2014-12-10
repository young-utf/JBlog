/**
 * Created by youngmoon on 12/7/14.
 */
Meteor.publish('posts', function(){
  return Posts.find({});
});

Meteor.methods({
  'Post': function(caption) {
    var loginUser = Meteor.userId()
    Posts.insert({
      writer: loginUser,
      caption: caption,
      createdAt: new Date(),
      loginUserInfo: loginUserInfo
    });
  },
  'deletePost': function(post) {
    Posts.remove({_id: post});
  }
});

UserStatus.events.on("connectionLogin", function(fields){
  console.log(fields);
  loginUserInfo = fields;
  Meteor.users.update({_id:Meteor.userId}, {$set: {loginInfo: fields}});
});