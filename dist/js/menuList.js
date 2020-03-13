var firstName_fltr = "", lastName_fltr = "", email_fltr = "", departmentName_fltr = 0, jobTitleName_fltr = 0
$(document).ready(function () {
  var _fltr = ['firstName_fltr', 'lastName_fltr', 'email_fltr', 'departmentName_fltr', 'jobTitleName_fltr']

  $('#pageTable tr').clone(true).appendTo('#pageTable');
  $('#pageTable tr:eq(1) th').each(function (i) {
    var title = $(this).text();
    if (_fltr[i] == undefined) {
      $(this).html('').attr('style', 'background-color:#f3f5f1');
    } else if (_fltr[i] == 'departmentName_fltr' || _fltr[i] == 'jobTitleName_fltr') {
      $(this).html('<select class="form-control input-lg select2" id="' + _fltr[i] + '"></select>');
    } else {
      $(this).html('<input id="' + _fltr[i] + '" class="input-fltr" style="width:100%;" type="text" placeholder="' + objlang["search"] + ' ' + title + '" />');
    }
  });
  $('input', this).on('keypress', function (e) {
    if (e.which == 13) {
      page_load();
    }
  });

  getCombo(true, '/combo/departments', '', '#departmentName_fltr', null, function () {
    var param = "departmentID=" + $('#departmentName_fltr').val()
    getCombo(true, '/combo/jobtitles', param, '#jobTitleName_fltr', null, function () {
      $('#departmentName_fltr, #jobTitleName_fltr').select2();
    })
  });

  $('#departmentName_fltr').on('change', function () {
    var param = "departmentID=" + $('#departmentName_fltr').val()
    getCombo(true, '/combo/jobtitles', param, '#jobTitleName_fltr', null, function(){
      page_load();
    })
  })

  $('#jobTitleName_fltr').on('change', function(){
    page_load();
  })

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
      url: '/menu/list',
      type: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      data: function (d) {
        d.firstName = firstName_fltr
        d.lastName = lastName_fltr
        d.email = email_fltr
        d.departmentName = departmentName_fltr
        d.jobTitleName = jobTitleName_fltr
      },
      error: function (xhr, error, thrown) {
      }
    },
    columnDefs: [
      {
        className: 'dt-center',
        targets: [5, 6]
      },
      {
        width: '150px',
        targets: [0, 1, 4, 5]
      },
      {
        width: '200px',
        targets: [2, 3, 6]
      }
    ],
    columns: [
      { data: "FirstName" },
      { data: "LastName" },
      { data: "Email" },
      { data: "DepartmentName" },
      { data: "JobTitleName" },
      {
        data: "HireDate",
        render: function (data, type, row) {
          return convert.toDateDMY(data)
        }
      },
      {
        data: null,
        render: function (data, type, row) {
          var result = " <a id='show' href='#' class='btn-dt2 is-blue' data-toggle='modal' data-action='show' data-target='#frmShow'><span class='icon'>" + objlang['show'] + "</span></a>"
          result += " <a id='edit' href='#' class='btn-dt2 is-semi-gray' data-toggle='modal' data-action='edit' data-target='#frmEdit'><span class='icon'>" + objlang['edit'] + "</span></a>"
          result += " <a id='delMenu' href='#' class='btn-dt2 is-red'><span class='icon'>" + objlang['delete'] + "</span></a>"
          return result;
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

  $('#pageTable').on('click', '#delMenu', function () {
    var item = $(this);
    var row = item.parents('tr')[0];
    var rowData = (pageTable.row(row).data());
    var nameTitle;
    (rowData.Gender == 'M') ? nameTitle = "Mr." : nameTitle = "Ms.";
    var msgName = nameTitle + rowData.FirstName + ' ' + rowData.LastName
    var confirmHeader = objlang['employee'] + ' ' + objlang['delete'];
    var confirmMessage = 'Are you sure you want to delete the employee data of ';
    modalConfirm(confirmHeader, confirmMessage, msgName, function () {
      var param = "ID=" + rowData.ID + "&NIK=" + rowData.NIK;
      $.ajax({
        url: '/employee/delete',
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

function page_load() {
  firstName_fltr = $('#firstName_fltr').val()
  lastName_fltr = $('#lastName_fltr').val()
  email_fltr = $('#email_fltr').val()
  departmentName_fltr = $('#departmentName_fltr').val()
  jobTitleName_fltr = $('#jobTitleName_fltr').val()

  pageTable.ajax.reload();
}