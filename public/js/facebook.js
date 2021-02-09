function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
          console.log('Successfully logged in with Facebook');
           FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
  }

  //callback function
  function changeUser(response) {
    //Add code to change name and image 
    //1. hide the FB login button
    $('.facebookLogin').hide();
    //2.change 'Scott Klemmer' to my name 'Xuan Ding'
    $('#name').text('Xuan Ding');
    //3.set my photo as the profile picture
    $('#photo').attr("src", '/images/Xuan.jpg');
    $('#photo').width(300);
    $('#photo').height(500);
  }