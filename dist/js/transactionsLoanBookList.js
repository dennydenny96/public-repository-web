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
      url: '/transaction/loan/book/list',
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
        targets: [2, 3, 4]
      },
      {
        width: '200px',
        targets: [0, 1, 2, 3]
      },
      {
        width: '100px',
        targets: [4]  
      }
    ],
    columns: [
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
            return 'Still on loan'
          else
            return convert.toDateDMY(data);          
        }
      },
      {
        data: null,
        render: function (data, type, row) {
          var result = " <a id='returnBook' href='#' class='btn-dt2 is-yellow'><span class='icon'> Return Book</span></a>"
          
          return row.ReturnDay == '0001-01-01T00:00:00' ? result : "";
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

  if(level !== "A"){
    $("div.toolbar").html("<button type='button' id='btnAdd' class='btn btn-primary' data-toggle='modal' data-target='#frmAdd'><span class='fa fa-plus'> Borrow Book </span></button>");
  }

  $('#pageTable').on('click', '#returnBook', function () {
    var item = $(this);
    var row = item.parents('tr')[0];
    var rowData = (pageTable.row(row).data());
    var msgName = rowData.Title
    var confirmHeader = 'Returning Book';
    var confirmMessage = 'Are you sure you want to returning the ';
    modalConfirm(confirmHeader, confirmMessage, msgName, function () {
      var param = "bookID=" + rowData.BookID;
      $.ajax({
        url: '/transaction/loan/book/return',
        contentType: 'application/x-www-form-urlencoded',
        type: 'POST',
        data: param,
        success: function (data) {
          if (data.value == "1") {
            pageSuccess();
          }
          else {
            pageError(data.msg)
          }
          pageTable.ajax.reload(null, false);
        },
        error: function (xhr, ajaxOptions, thrownError) {
          pageError(thrownError);
        }
      });
    });
  });

});