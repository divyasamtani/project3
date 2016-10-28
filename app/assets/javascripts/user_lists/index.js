$('.user_lists.index').ready(function(){
  console.log("user_lists index");

  var getMyLists = function () {
    $.ajax({
      url: '/api/user/lists',
      method: 'get',
      success: function (lists) {
        $('#mylists-index').html('');

        lists.forEach(function (list) {
          html =
                    '<div class="col s6">' +
                      '<ul class="collapsible" data-collapsible="accordion">' +
                        '<li>' +
                          '<div class="collapsible-header">' +
                            '<div class="col s11">' + '<h6>' + list.title + '</h6>' +
                            '</div>' +
                          '</div>' +
                          '<div class="collapsible-body">' +
                            '<p>' + list.description + '</p>' +
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

  getMyLists();












});
