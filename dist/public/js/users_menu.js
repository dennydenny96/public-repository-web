var UsersMenu = function(){

  var onload = function(){
    $.ajax({
      url: "/dashboard/menu/",
      type: 'POST',
      // contentType: 'application/x-www-form-urlencoded',
      data: 'moduleid=7',// + $('#ddlModule').val(),
      success: function (data) {
        
        var _default = {
          id: "9000",
          text: "NAVIGATION",
          icon: "",
          isHeader: true
        };
        
        var arMain = [];
        var arMenu = [];

        arMain[0] = _default;

        var _m = 0;

        $.each(data.data, function(idx, obj){
          _m = 0;

          $.each(obj.Data, function(i, o){
            if (_m == 5)
            _m = 0;
            arMenu.push({
              id: o.MenuID,
              // text: objlang[o.MenuName],
              text: o.MenuName,
              url: o.WebURL + "/?id=" + o.MenuID,
              targetType: "iframe-tab",
              // icon: "fa fa-arrows-alt text-primary"
              // icon: "fa fa-circle-o " + arColor[(_m)]
            });
            _m++;
          });
          
          arMain.push({
            id: obj.SectionID,
            text: obj.SectionName,
            icon: obj.SectionIcon,
            children: arMenu
          });

          arMenu = [];
        });

        $('.sidebar-menu').empty();
        $('.sidebar-menu').sidebarMenu({data: arMain});
        $('.sidebar-menu a:first').trigger('click')
      },
      error: function (response) {
          //alert(response);
      }
    });
  };

  return {
    load: function(){
      onload();
    }
  };
}();
