$(document).ready(function () {

  pageTable = $("#pageTable").DataTable({
    serverSide: true,
    searching: false,
    ordering: false,
    pagingType: "input",
    lengthMenu: [[25, 50, 75], [25, 50, 75]],
    dom: "<'row'<'toolbar'>l>rt<'row'<'col-sm-9'p><'col-sm-3'i>>",
    autoWidth: false,
    destroy: true,
    scrollY: '80vh',
    scrollX: true,
    ajax: {
      url: '/userlist',
      type: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      data: function (d) {
      },
      error: function (xhr, error, thrown) {
      }
    },
    columnDefs: [
      {
        width: '200px',
        targets: [0, 1]
      }
    ],
    columns: [
      { data: "UserLogin" },
      {
        data: "Level",
        render: function (data, type, row) {
          switch (data) {
            case "P":
              return "Provider"
            case "U":
              return "User"
            case "A":
              return "Admin"
          }
        }
      }
    ],
    initComplete: function (settings, json) {
      evDatatableResize();
    },
    drawCallback: function (oSettings) {
      $(window).trigger('resize');
    }
  });

  $(pageTable.table().container()).removeClass('form-inline');

  $("div.toolbar").html("<button type='button' id='btnAdd' class='btn btn-primary' data-toggle='modal' data-target='#frmAdd'><span class='fa fa-plus'> " + objlang['add'] + "</span></button>");

});