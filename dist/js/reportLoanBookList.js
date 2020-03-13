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
      url: '/report/loan/book/list',
      type: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      data: function (d) {
      },
      error: function (xhr, error, thrown) {
      }
    },
    columnDefs: [
      {
        className: 'dt-center',
        targets: [3, 4]
      },
      {
        width: '150px',
        targets: [0]
      },
      {
        width: '200px',
        targets: [1, 2, 3, 4]
      }
      
    ],
    columns: [
      { data: "UserName" },
      { data: "Title" },
      {
        data: "Price",
        render: function (data, type, row) {
          return dec2(data)
        }
      },
      {
        data: "LoanDay",
        render: function (data, type, row) {
          return convert.toDateDMY(data)
        }
      },
      {
        data: "ReturnDay",
        render: function (data, type, row) {
          if(data == '0001-01-01T00:00:00') 
            return 'Has not yet return'
          else
            return convert.toDateDMY(data); 
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

  // $("div.toolbar").html("<button type='button' id='btnAdd' class='btn btn-primary' data-toggle='modal' data-target='#frmAdd'><span class='fa fa-plus'> Borrow Book </span></button>");

});