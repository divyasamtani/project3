$(document).ready(function(){
  console.log('j-toker ready')

  $.auth.configure({
    apiUrl: 'http://localhost:3000'
  });

  // var auth = {
  //   signup: function() {
  //     $.auth.emailSignUp({
  //       email: 'test@test.com',
  //       password: '*****',
  //       password_confirmation: '*****'
  //     }).then(function(user){
  //       console.log('Welcome')
  //     }).fail(function(user){
  //       console.log('failure: ' + resp.errors.join(' '));
  //     })
  //   }
  // }

  // $.auth.emailSignUp({
  //   email: 'test@test.com',
  //   password: '*****',
  //   password_confirmation: '*****',
  //   config: 'altUser'
  // });

  var SignupClick = function(){
    var params = {
      email: $('#email').val(),
      password: $('#password').val()
    }

    $.auth.emailSignUp(params).then(function(user){
      alert('Welcome!');
    }).fail(function(resp) {
      alert('Authentication failure: ' + resp.errors.join(' '));
    });
  }

  $('#signup-btn').click(function(e){
    e.preventDefault();
    SignupClick();
  })

  var LoginClick = function(){
    var params = {
      email: $('#email').val(),
      password: $('#password').val()
    }

    $.auth.emailSignIn(params).then(function(resp){
      alert('Logged In!');
    }).fail(function(resp) {
      console.log(resp)
    })
  }

  $('#login-btn').click(function(e){
    e.preventDefault();
    LoginClick();
  })


  var LogoutClick = function(e){
    $.auth.signOut().then(function(user){
      alert('Logged Out')
    }).fail(function(resp){
      console.log(resp)
    })
  }

  $('#logout-btn').click(function(e){
    e.preventDefault();
    LogoutClick();
  })

});