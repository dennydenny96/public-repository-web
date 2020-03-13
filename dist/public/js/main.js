/* <div> Show Alert */
jQuery.fn.showAlert = function () {
    var _obj = $(this);
    setTimeout(function () { _obj.hide(); }, 2000);
    _obj.show();
};

jQuery.fn.showError = function () {
    var _obj = $(this);
    _obj.show();
};

var convert = {

    toMoney: function (val) {
        var _amount = parseFloat(val);

        if (_amount < 0) {
            return "<span class='text-red'>" + numeral(val).format('0,0.00') + "</span>";
        }
        else {
            return numeral(val).format('0,0.00');
        }
    },
    toMoney4Dec: function (val) {
        var _amount = parseFloat(val);

        if (_amount < 0) {
            return "<span class='text-red'>" + numeral(val).format('0,0.0000') + "</span>";
        }
        else {
            return numeral(val).format('0,0.0000');
        }
    },
    toMoneyColor: function (val) {
        var _amount = parseFloat(val);

        if (_amount < 0) {
            return "<span class='text-red'>" + val + "</span>";
        }
        else {
            return val;
        }
    },
    toMoneyPlain: function (val) {
        return numeral(val).format('0,0');
    },
    toOdds: function (odds, oddsStep) {

        if (oddsStep == 3) {
            return numeral(odds).format('0,0.00') + ' %';
        }
        else {
            if (parseFloat(odds) < 0) {
                return numeral(odds).format('0,0.00');
            }
            else {
                return numeral(odds).format('0,0');
            }
        }
    },
    toColor: function (val) {
        var _result = val;
        switch (val.toLowerCase()) {
            case 'deposit':
                _result = "<span class='text-blue text-bold'>" + val + "</span>"; break;
            case 'withdraw':
                _result = "<span class='text-red text-bold'>" + val + "</span>"; break;
            case 'result':
                _result = "<span class='text-green'>" + val + "</span>"; break;
        }
        return _result;
    },
    toDateDMY: function (val) {
        return moment(val).format("DD MMMM YYYY");
    },
    toDateYMD: function (val) {
        return moment(new Date(val)).format("YYYY-MM-DD");
    },
    toDateTimeYMD: function (val) {
        return moment(new Date(val)).format("YYYY-MM-DD");
    },
    toDateTimeSec: function (val) {
        return moment(val).format("DD-MM-YYYY HH:mm:ss");
    },
    toDateTime: function (val) {
        return moment(val).format("DD-MMM-YYYY HH:mm:ss");
    },
    toDateTimeNoSec: function (val) {
        return moment(val).format("DD-MMM-YYYY HH:mm");
    },
    toDateTime_split: function (val) {
        return moment(val).format("DD-MMM-YYYY") + '<br/>' + moment(val).format("HH:mm:ss");
    },
    toTime: function (val) {
        return moment(val).format("HH:mm:ss");
    },
    statusWL: function (val) {
        if (val.toLowerCase() == 'loss') {
            return "<span class='text-red'>" + val + "</span>";
        }
        else if (val.toLowerCase() == 'win') {
            return "<span class='text-blue'>" + val + "</span>";
        }
        else if (val.toLowerCase() == 'running') {
            return "<span class='text-green'><i>" + val + "</i></span>";
        }
        return val;
    }
};

function dec2(data){
    return numeral(Number.parseFloat(data.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]).toFixed(2)).format('0,0.00')
}

function setModal_SubHeader(obj, _subheader) {
    //- modal - label sub header
    /**
    .modal-body
        ol.modal-breadcrumb
            li
                i.fa.fa-hand-o-right
                label#lblsubheader
     */
    $($(obj).attr('data-target')).find('#lblsubheader').html(_subheader);
}

function getCombo(_null, url, param, elmTarget, _val, callback) {
    $.ajax({
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        type: 'POST',
        data: param,
        success: function (data) {
            var option = [];
            $.each(data.data, function (i, value) {
                option.push('<option value="' + value.Key + '">' + value.Name + '</option>');
            });
            if (!_null) {
                option.shift();
            }
            $(elmTarget).html(option.join(''));

            if (_val && _val != null) {
                $(elmTarget).val(_val);
            }

            if (callback)
                callback();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            pageError(thrownError);
        }
    });

}

function getCombo2(_null, url, param, elmTarget, _val, callback) {
    $.ajax({
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        type: 'POST',
        data: param,
        success: function (data) {
            var option = [];
            $.each(data.data, function (i, value) {
                if (value.Disabled != "")
                    option.push('<option value="' + value.Key + '" disabled="' + value.Disabled + '">' + value.Name + '</option>');
                else
                    option.push('<option value="' + value.Key + '" >' + value.Name + '</option>');
            });
            if (!_null) {
                option.shift();
            }
            $(elmTarget).html(option.join(''));

            if (_val && _val != null) {
                $(elmTarget).val(_val);
            }

            if (callback)
                callback();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            pageError(thrownError);
        }
    });

}

function getComboCurrencyBank(_null, url, param, elmTarget, _val, callback) {

    $.ajax({
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        type: 'POST',
        data: param,
        success: function (data) {
            var option = [];
            if (_null) {
                option.push('<option value="0">All</option>');
            }

            $.each(data.data, function (i, value) {
                option.push('<option value="' + value.BankListID + '">' + value.Currency + ' - ' + value.BankDesc + '</option>');
            });

            $(elmTarget).html(option.join(''));

            if (_val && _val != null) {
                $(elmTarget).val(_val);
            }
            if (callback)
                callback();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            pageError(thrownError);
        }
    });
}

function getComboGroupBankAccount(_null, url, param, elmTarget, _val, callback) {
    $.ajax({
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        type: 'POST',
        data: param,
        success: function (data) {
            var option = [];
            if (_null) {
                option.push('<option value="">All</option>');
            }

            $.each(data.data, function (i, value) {
                option.push('<option value="' + value.BankAccountCode + '" >' + value.BankAccountNo + ' - ' + value.BankAccountName + ' - ' + value.BankLimitInterbank + '</option>');
            });

            $(elmTarget).html(option.join(''));

            if (_val && _val != null) {
                $(elmTarget).val(_val);
            }
            if (callback)
                callback();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            pageError(thrownError);
        }
    });
}

function getAjax(url, param, callback) {
    $.ajax({
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        type: 'POST',
        data: param,
        success: function (data) {
            callback(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            pageError(thrownError);
        }
    });

}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function pageSuccess() {
    $("#SuccessDiv").showAlert();
    $("#SuccessMsg").html("Successfully updated");
}
function pageError(msg) {
    $('#ErrDiv').showError();
    $('#ErrMsg').html(msg);
}
function modalSuccess(target) {
    $(target + " #SuccessDivModal").showAlert();
    $(target + " #SuccessMsgModal").html("Successfully updated");
}
function modalError(target, msg, value) {
    $(target + " #ErrDivModal").showError();
    $(target + " #ErrMsgModal").html(msg);
    if (value && value == -1)
        window.top.location.href = "/login?e=" + msg;
}

function getIcons(val) {
    var result = '';
    switch (val) {
        case 'delete': result = 'trash'; break;
        case 'addmenu': result = 'menu'; break;
        case "addauth":
        case 'addauthorization': result = 'setting'; break;
        case 'adduser': result = 'add'; break;
        case 'currency': result = 'currency'; break;
        case 'editfee': result = 'currency'; break;
        case 'editlimit': result = 'currency'; break;
        case 'editpin': result = 'pin'; break;
        case 'changepassword': result = 'password'; break;
        case 'deviceconfig': result = 'device'; break;
        case 'asgbankacc': result = 'bank'; break;
        case 'asgmerchant': result = 'add'; break;
        case 'asgbankpool': result = 'bank'; break;
        case 'merchantgroupinfo': result = 'info'; break;
        case 'adjustment': result = 'currency'; break;

        default: result = val; break
    }
    return result;
}
function table_legend(objlang, auth, list, custom) {
    var _str = '';
    var _text = '';
    var translate = '';

    if (custom != null) {
        _len = custom.length;

        for (var i = 0; i < _len; i++) {
            _text = custom[i].split('~');

            if (_str != '') {
                _str += "<span class='ml-4 mr-8'> | </span>";
            }
            _str += "<i class='i fa icon icon_" + _text[1] + "'> " + _text[0] + " </i>";
        }
    }

    // for (var _obj in auth) {
    //     if ($.inArray(_obj, list) >= 0) {
    //         if (auth[_obj] == 'Y') {
    //             _text = _obj.toLowerCase().replace("frm", "");
    //             translate = objlang[_text.replace('add', '')]


    //             if (_str != '') {
    //                 _str += "<span class='ml-4 mr-8'> | </span>";
    //             }

    //             _str += "<i class='i fa icon icon_" + getIcons(_text) + "'> " + translate + " </i>";
    //         }
    //     }
    // }

    list.map(function (val, i) {
        _text = val.toLowerCase().replace("frm", "");
        translate = objlang[_text.replace('add', '')]
        if (auth[val] == 'Y') {
            if (_str != '') {
                _str += "<span class='ml-4 mr-8'> | </span>";
            }
            _str += "<i class='i fa icon icon_" + getIcons(_text) + "'> " + translate + " </i>";
        }
    })

    if (_str != '')
        $("div.legend").html(_str);
    else
        $("div.row-info").hide()
}

$(document).ready(function () {
    $.fn.dataTable.ext.errMode = function (settings, helpPage, message) {
        var arMsg = message.split('-');
        if (arMsg.length > 0) message = arMsg[1];
        pageError(message);
    };

    /* form id = frmFilters - default event keypress */
    $('#frmFilters :input').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $('#btnFilters').click();
        }
    });

    $('div.modal').each(function () {
        var elmId = $(this).attr('id');

        $(this).on('show.bs.modal', function (e) {
            $(this).find('.alert-modal').hide();

            if (elmId.toLowerCase().startsWith('frmadd')) {
                $("#" + elmId + " input").val('');
                $("#" + elmId + " input[type=number]").val('');
            }
        });
    });

    $('input:checkbox').iCheck({
        checkboxClass: 'icheckbox_flat-orange'
    });

    $('[data-toggle="popover"]').popover({
        container: 'body'
    });

    $(window).resize(function () {
        if ($('.card form').length != 0 && $('.card .card-body table').length == 0) { }
        else {
            $('.card').first().css('min-height', (window.innerHeight - 40) + 'px');
        }
    });

    $('select.disabled, input.disabled, textarea.disabled').prop('disabled', true);
});
function reinnitialDatePicker(data) {
    $('.daterange').daterangepicker({
        ranges: {
            'Today': [moment(data), moment(data)],
            'Yesterday': [moment(data).subtract(1, 'days'), moment(data).subtract(1, 'days')],
            'Last 7 Days': [moment(data).subtract(6, 'days'), moment(data)],
            'Last 30 Days': [moment(data).subtract(29, 'days'), moment(data)],
            'This Month': [moment(data).startOf('month'), moment(data).endOf('month')],
            'Last Month': [moment(data).subtract(1, 'month').startOf('month'), moment(data).subtract(1, 'month').endOf('month')],
            'This Year': [moment(data).startOf('year'), moment(data).endOf('year')],
            'Last Year': [moment(data).subtract(1, 'year').startOf('year'), moment(data).subtract(1, 'year').endOf('year')]
        },
        "startDate": moment(data),
        "endDate": moment(data),
        "alwaysShowCalendars": true,
        locale: {
            format: 'DD-MMM-YYYY'
        }
    });

    $('.datetimerange').daterangepicker({
        "timePicker": true,
        "timePicker24Hour": true,
        ranges: {
            'Today': [moment(data).startOf('day'), moment(data).endOf('day')],
            'Yesterday': [moment(data).subtract(1, 'days').startOf('day'), moment(data).subtract(1, 'days').endOf('day')],
            'Last 7 Days': [moment(data).subtract(6, 'days').startOf('day'), moment(data).endOf('day')],
            'Last 30 Days': [moment(data).subtract(29, 'days').startOf('day'), moment(data).endOf('day')],
            'This Month': [moment(data).startOf('month'), moment(data).endOf('month')],
            'Last Month': [moment(data).subtract(1, 'month').startOf('month'), moment(data).subtract(1, 'month').endOf('month')],
            'This Year': [moment(data).startOf('year'), moment(data).endOf('year')],
            'Last Year': [moment(data).subtract(1, 'year').startOf('year'), moment(data).subtract(1, 'year').endOf('year')]
        },
        "startDate": moment(data).startOf('day'),
        "endDate": moment(data).endOf('day'),
        "alwaysShowCalendars": true,
        locale: {
            format: 'DD-MMM-YYYY HH:mm'
        }
    });
}
function headerDatepicker(data) {
    $('.daterange').daterangepicker({
        ranges: {
            'All': [moment(data).subtract(45, 'days'), moment(data)],
            'Today': [moment(data), moment(data)],
            'Yesterday': [moment(data).subtract(1, 'days'), moment(data).subtract(1, 'days')],
            'Last 7 Days': [moment(data).subtract(6, 'days'), moment(data)],
            'Last 30 Days': [moment(data).subtract(29, 'days'), moment(data)],
            'This Month': [moment(data).startOf('month'), moment(data).endOf('month')],
            'Last Month': [moment(data).subtract(1, 'month').startOf('month'), moment(data).subtract(1, 'month').endOf('month')],
            'This Year': [moment(data).startOf('year'), moment(data).endOf('year')],
            'Last Year': [moment(data).subtract(1, 'year').startOf('year'), moment(data).subtract(1, 'year').endOf('year')]
        },
        startDate: moment(data).subtract(45, 'days'),
        endDate: moment(data),
        locale: {
            format: 'DD-MMM-YYYY'
        }
    })
}

function dateParam(d, _date, rangeKey) {
    if (rangeKey == 'All') {
        d.dateStart = '01-Jan-1753 00:00'
        d.dateEnd = _date[1] + ' 23:59';
    } else {
        d.dateStart = _date[0] + ' 00:00';
        d.dateEnd = _date[1] + ' 23:59';
    }
}

$(document).on('keyup', '.force-upper', function () {
    $(this).val($(this).val().toUpperCase());
});

$(document).on('keydown', '*[data-timepicker]', function (e) {

    // Input Value var
    var inputValue = $(this).val();

    // Make sure keypress value is a Number
    if ((e.keyCode > 47 && e.keyCode < 58) || e.keyCode == 8) {

        // Make sure first value is not greater than 2
        if (inputValue.length == 0) {
            if (e.keyCode > 49) {
                e.preventDefault();
                $(this).val(2);
            }
        }

        // Make sure second value is not greater than 4
        else if (inputValue.length == 1 && e.keyCode != 8) {
            e.preventDefault();
            if (e.keyCode > 51 && inputValue[0] == 2) {
                $(this).val(inputValue + '3:');
            }
            else {
                $(this).val(inputValue + String.fromCharCode(e.keyCode) + ':');
            }
        }

        else if (inputValue.length == 2 && e.keyCode != 8) {
            e.preventDefault();
            if (e.keyCode > 52) {
                $(this).val(inputValue + ':5');
            }
            else {
                $(this).val(inputValue + ':' + String.fromCharCode(e.keyCode));
            }
        }

        // Make sure that third value is not greater than 5
        else if (inputValue.length == 3 && e.keyCode != 8) {
            if (e.keyCode > 52) {
                e.preventDefault();
                $(this).val(inputValue + '5');
            }
        }
        else if (inputValue.length == 3 && e.keyCode != 8) {
            if (e.keyCode > 52) {
                e.preventDefault();
                $(this).val(inputValue + '5');
            }
        }
        else if (inputValue.length == 5 && e.keyCode != 8) {
            e.preventDefault();
            if (e.keyCode > 52) {
                $(this).val(inputValue + ':5');
            }
            else {
                $(this).val(inputValue + ':' + String.fromCharCode(e.keyCode));
            }
        }

        else if (inputValue.length == 6 && e.keyCode != 8) {
            if (e.keyCode > 52) {
                e.preventDefault();
                $(this).val(inputValue + '5');
            }
        }
        // Make sure only 5 Characters can be input
        else if (inputValue.length > 7 && e.keyCode != 8) {
            /* FOCUS ELEMENT */
            /*var inputs = $(this).parents("form").eq(0).find(":input");
            var idx = inputs.index(this);
    
            if (idx == inputs.length - 1) {
                inputs[0].select()
            } else {
                inputs[idx + 1].focus(); //  handles submit buttons
                inputs[idx + 1].select();
            }
            return false;*/
            e.preventDefault();
            return false;
        }
    }

    // Prevent Alpha and Special Character inputs
    else {
        if (e.keyCode != 9) {
            e.preventDefault();
            return false;
        }
    }
});

$(document).on('keyup', 'input.number', function (event) {

    // skip for arrow keys
    if (event.which >= 37 && event.which <= 40) return;

    // format number
    $(this).val(function (index, value) {
        return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            ;
    });
});

function evCheckBoxAll(chball, tableName) {
    $(chball).on('click', function () {
        // var checkOrUncheckAll = tableName.$("input[type=checkbox]").parents('tr')
        var checkOrUncheckAll = tableName.$("input[type=checkbox]").parents('tr:not(.status-no)')
        var checkboxStatNo = tableName.$(".status-no")
        tableName.$("input[type=checkbox]").prop('checked', $(this).prop('checked'));
        if (tableName.$("input[type=checkbox]").prop("checked") == true) {
            checkOrUncheckAll.addClass('highlight-checked')
            checkboxStatNo.addClass('highlight-statchecked')
        }
        else {
            checkOrUncheckAll.removeClass('highlight-checked')
            checkboxStatNo.removeClass('highlight-statchecked')
        }
    });
}

function evCheckBox(chball, tableName, tableDT, inputID) {
    $(tableDT).on('click', inputID, function () {
        var checkbox = $(this).parents('tr')
        var dataBank = $(this).data('bank')
        var dataID = $(this).data('id')
        var len = tableName.$('input[data-bank=' + dataBank + ']:checked').length

        if ($(this).prop("checked") == true) {
            if (checkbox.hasClass('status-no'))
                checkbox.addClass('highlight-statchecked')
            else
                checkbox.addClass('highlight-checked')
            if (dataBank != null) {
                len <= 1 ? tableName.$('input[data-bank=' + dataBank + ']').prop("disabled", true) : ""
                tableName.$('input[data-id=' + dataID + ']').prop("disabled", false)
            }
            if (chball != null)
                tableName.$('input[type="checkbox"]:checked').length == tableName.$('input[type="checkbox"]').length ? $(chball).prop("checked", true) : "";
        } else {
            if (checkbox.hasClass('status-no'))
                checkbox.removeClass('highlight-statchecked')
            else
                checkbox.removeClass('highlight-checked')
            chball != null ? $(chball).prop("checked", false) : ""
            dataBank != null ? tableName.$('input[data-bank=' + dataBank + ']').prop("disabled", false) : ""
        }
    })
}

function checkedToFalse(tableName1st, tableName2nd) {
    $(tableName1st + ' input[type="checkbox"]').prop("checked", false)
    $(tableName1st).find('tr').removeClass('highlight-checked')
    $(tableName1st).find('tr').removeClass('highlight-statchecked')

    $(tableName2nd + ' input[type="checkbox"]').prop("checked", false)
    $(tableName2nd).find('tr').removeClass('highlight-checked')
    $(tableName2nd).find('tr').removeClass('highlight-statchecked')
}

function evLabelYesNo(isYN, status_name, with_auth, row) {
    var result = '', cls = '', yes_no = '';
    if (isYN == 'Y' || isYN > 0) {
        cls = 'text-green';
        yes_no = 'Yes';
    }
    else {
        cls = 'text-red';
        yes_no = 'No';
    }
    if (row != undefined) {
        yes_no += row;
    }

    if (with_auth != '' && with_auth == 'Y') {
        result = "<a id='" + status_name + "' href='#'><span class='" + cls + "'>" + yes_no + "</span></a>"
    }
    else {
        result = "<span class='" + cls + "'>" + yes_no + "</span>"
    }
    return result;
}

function evLabelActiveInactive(isYN, status_name, with_auth) {
    var result = '', cls = '', yes_no = '';
    if (isYN == 'Y') {
        cls = 'text-green';
        yes_no = 'Active';
    }
    else {
        cls = 'text-red';
        yes_no = 'Inactive';
    }
    if (with_auth != '' && with_auth == 'Y')
        result = "<a id='" + status_name + "' href='#'><span class='" + cls + "'>" + yes_no + "</span></a>"
    else
        result = "<span class='" + cls + "'>" + yes_no + "</span>"
    return result;
}

function bankCode(data) {
    var result = "<div style='display:none;'>" + data + "</div>"
    switch (data) {
        case "BCA":
        case "BMRI":
        case "BNI":
        case "BRI":
        case "ACB":
        case "BIDV":
        case "SCB":
        case "TCB":
        case "VCB":
            return "<img src='/dist/public/img/" + data + ".png'>" + result + "</img>"
        default:
            return data
    }
}

var handleValidNumber = function (triggerValidation, el) {
    var n = el.val(), arNumber = n.split(''),
        isInValid = function (number) {
            number = parseFloat(number, 2);
            return number < 10.00 || number > 100.00;
        };
    if (n.length >= triggerValidation - 1 && isInValid(n)) {
        if (arNumber[0] == 0) {
            arNumber.shift()
        }
        if (arNumber.length == 4) {
            arNumber.push(0)
        }
    }
    if (n.length >= triggerValidation && isInValid(n)) {
        if (el.val().split('.')[0].length == 3) {
            arNumber.shift()
            if (arNumber[0] == 0) {
                arNumber.shift()
            }
            arNumber.pop()
            arNumber.push(el.val().split('.')[1].split('')[1])
        } else if (el.val().split('.')[1].length >= 2) {
            arNumber.pop()
        }
        el.val(arNumber.join(''));
        el.keyup();
    }
}

function resizeTable() {
    var wH = $(window).height();
    var dtH = $('.dataTables_wrapper').height();
    var _a = Math.abs(wH - dtH);
    var _b = (_a / wH) * dtH;
    var _c = dtH - _b - _newH;
    var _newH = $('.dataTables_scrollHead').height();
    _newH = (_newH > 37) ? (104 + _newH) : 143;

    $('.content .dataTables_scrollBody').css({
        // maxHeight: ($(window).height() - _newH) + 'px'
        height: ($(window).height() - _newH) + 'px'
    });
}
function evDatatableResize() {
    resizeTable();
    $(window).on('resize', function () {
        resizeTable();
    });
}
