$('.user_lists.index').ready(function(){
 console.log("current_user_page ready");

 var getMyLists = function () {
   $.ajax({
     url: '/api/user/lists',
     method: 'get',
     success: function (userlists) {
       $('#mylists-index').html('');

       userlists.forEach(function(userlist) {

         var restaurants = "";

         for(var i = 0; i < userlist.restaurants.length; i++) {
           var check = ''

           if (userlist.restaurant_checked[i][0] == true) {
             check = 'checked="checked"'
           } else {
             check = ''
           };

           restaurants += '<li>' + '<span data-list-id="' + userlist.id + '"><input type="checkbox" ' + check + ' id="' + userlist.title + userlist.restaurants[i] + i + '" data-id="' + userlist.restaurant_checked[i][1] +'"/><label for="' + userlist.title + userlist.restaurants[i] + i + '">' + userlist.restaurants[i] + '</label>' + '</span></li>';
         }

// *************************************************
 // json.title              userlist.title
 // json.restaurants        userlist.restaurants.select(:name).pluck(:name)
 // json.restaurant_checked userlist.restaurant_lists.select(:checked, :id).pluck(:checked, :id)
// *************************************************

         var html =
                   '<div class="col s4 bookmark-collapsible" data-list-id="' + userlist.id + '" ">' +
                     '<ul class="collapsible" data-collapsible="accordion">' +
                       '<li>' +
                         '<div class="collapsible-header green lighten-5">' +
                            '<span class="listTitle">' + userlist.title + '</span>' +
                         '</div>' +
                         '<div class="collapsible-body white">' +
                           '<form action="#">' +
                             '<div class="showrestaurants">' +
                               '<div id="userListRestaurantWrapper">' + '<ul class="restaurantlist">' + restaurants + '</ul>'  +
                               '</div>' +
                               '<div class="icons">' +
                                  '<i class="fa fa-pencil-square-o fa-2x editbutton" aria-hidden="true">' + '</i>' +
                                  '<i class="fa fa-times fa-2x deleteUserListButton" aria-hidden="true" data-list-id="' + userlist.id + '"></i>' +
                               '</div>' +
                             '</div>' +
                           '</form>' +
                         '</div>' +
                       '</li>' +
                     '</ul>' +
                   '</div>';
         $('#mylists-index').append(html);
       });

       $(".collapsible").collapsible({
         accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
       });

     }, error: function (resp) {
       console.log(resp);
     }
   });
 }