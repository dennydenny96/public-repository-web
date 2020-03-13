window.alert = function(){};
    this.top.location !== this.location && (this.top.location = this.location);

    $(function(){
      if("#{auth}" == "Y"){
        $('#frmAuth').modal('show');
        $('#frmAuth').on('shown.bs.modal', function(){
          $('#auth').focus();
        });
      }else{
        $('#username').focus();
      }

      var e = getUrlVars()["e"];
      if(e != undefined){
        $('#expired').show();
        $('#session').text(e.replace(/%20/g,' '));
      }
      else{
        $('#expired').hide();
      }
    });

    function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }