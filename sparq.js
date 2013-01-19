if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return Session.get('greet') || 'hi';
  };

  Template.hello.events({
    'click input' : function () {
      $('#container').css('visibility', 'visible').css('overflow', 'hidden').css('background-color', 'red');

      setTimeout(function(){
        Session.set('greet', 'HELLO');
      }, 5000);
    }
  });

  Template.hello.preserve({
    '#container': function (node) { return node.id; }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
