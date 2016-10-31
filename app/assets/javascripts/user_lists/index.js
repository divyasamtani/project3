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

          for(var i = 0; i < userlist.list_restaurants.length; i++) {
            restaurants += '<li>' + '<input type="checkbox" class="filled-in" id="filled-in-box" checked="" /> <label for="filled-in-box">' + userlist.list_restaurants[i] + '</label>' + '</li>';
          }

          var html =
                    '<div class="col s6">' +
                      '<ul class="collapsible" data-collapsible="accordion">' +
                        '<li>' +
                          '<div class="collapsible-header green lighten-5">' +
                             '<span id="listTitle">' + userlist.title + '</span>' +
                          '</div>' +
                          '<div class="collapsible-body white">' +
                            '<form action="#">' +
                              '<div class="row" id="padding">' + '</div>' +
                              '<div class="col s10">' +  userlist.description  + '</div>' +
                                '<p>' + '<ul>' + restaurants + '</ul>' + '</p>' +
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


  var getMyBookmarks = function () {
    $.ajax({
      url: '/api/user/bookmarks',
      method: 'get',
      success: function (bookmarks) {
        $('#mybookmarks-index').html('');

        bookmarks.forEach(function(bookmark) {
          var html =
                    '<div class="col s6">' +
                      '<ul class="collapsible" data-collapsible="accordion">' +
                        '<li>' +
                          '<div class="collapsible-header">' +
                            '<div class="col s11">' + '<h6>' + bookmark.bookmark_title + '</h6>' +
                            '</div>' +
                          '</div>' +
                          '<div class="collapsible-body">' +
                            '<p>' + bookmark.bookmark_description + '</p>' +
                            '<p>' + bookmark.bookmark_restaurants + '</p>' +
                          '</div>' +
                        '</li>' +
                      '</ul>' +
                    '</div>';
          $('#mybookmarks-index').append(html);
        });

        $(".collapsible").collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });

      }, error: function (resp) {
        console.log(resp);
      }
    });
  }

  var deleteBookmark = function () {
    $.ajax({
      url: '/api/user/bookmarks/' + id,
      method: 'delete',
      success: function (bookmarks) {
        console.log('bookmark deleted');
      }, error: function (resp) {
        console.log(resp);
      }
    });
  }


// DELETE BOOKMARK BUTTON FUNCTIONALITY
    var setBookmarkButton = function (params) {
    $('#lists-index').on('click', '.bookmark', function(e) {
      e.preventDefault();
      // if window = user profile, delete the bookmark, otherwise
      deleteBookmark(params);
    });
  };

  var init = function () {
    getMyLists();
    getMyBookmarks();
    setBookmarkButton();
  }

  init ();

});

