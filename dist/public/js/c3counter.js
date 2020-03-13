function C3Counter(id, opt) {

  this.options = {
      stepTime: 60, // not used
      startTime: "00:00:00",
      stopTime: "00:00:00",
      digitImages: 1,
      digitWidth: 30,
      digitHeight: 44,
      digitSlide : true,
      digitSlideTime : 200,
      digitImageHeight : 484,
      digitAnimationHeight : 44, 
      timerEnd: function(){},
      image: "digits.png", 
      updateInterval : 1000
  };

  var s;
  if (typeof opt != "undefined") {
    for (s in this.options) {
      if (typeof opt[s] != "undefined") {
        this.options[s] = opt[s];
      }
    }
  } 

  var _startTime = new Date(options.startTime).getTime();
  //var _startTime = new Date().getTime();
  var _stopTime = new Date(options.stopTime).getTime();
  var newStartTime = (Math.abs(_stopTime - _startTime) / 1000);
  if(options.startTime != options.stopTime)
    newStartTime -=1;
  options.startTime = newStartTime;

  if (String(options.startTime).indexOf(":") == -1) {
    options.tempStartTime = options.startTime;
  } else {
    options.tempStartTime = newStartTime;
  }

  this.pad2 = function(number) {
    return (number < 10 ? '0' : '') + number;
  }

  var timer = setInterval( "this.updateCounter()", options.updateInterval);
  var startTime = new Date().getTime();
  var dc = 0;
  var digits = new Array();
  var d = new Date();
  var lastTime = d.getTime();


  this.calculateTime = function() {

    if (String(options.tempStartTime).indexOf(":") == -1) {  
      var seconds=Math.round(options.tempStartTime % 60);
      options.tempStartTime=Math.floor(options.tempStartTime/60);
      var minutes=Math.round(options.tempStartTime % 60);
      options.tempStartTime=Math.floor(options.tempStartTime/60);
      var hours=Math.round(options.tempStartTime % 24);
      options.tempStartTime=Math.floor(options.tempStartTime/24);
      var days=Math.round(options.tempStartTime);
      //- options.timeStr = this.pad2(days)+this.pad2(hours)+this.pad2(minutes)+this.pad2(seconds);
      options.timeStr = this.pad2(hours)+this.pad2(minutes)+this.pad2(seconds);
    }

    var currTime = new Date().getTime();
    var diff = currTime - startTime;

    options.tempStartTime = options.startTime - Math.round(diff/1000);
  }


  this.calculateTime();

  for (dc=0; dc<6; dc++) {
    digits[dc] = { digit: this.options.timeStr.charAt(dc)};
            
    $("#"+id).append("<div id='digit"+dc+"'  style='position:relative;float:left;width:"+this.options.digitWidth+"px;height:"+this.options.digitHeight+"px;overflow:hidden;'><div class='digit' id='digit-bg"+dc+"' style='position:absolute; top:-"+digits[dc].digit*this.options.digitAnimationHeight+"px; width:"+this.options.digitWidth+"px; height:"+this.options.digitImageHeight+"px; '></div></div>");

    if (dc % 2 == 1 && dc < 4) {
      $("#"+id).append("<div class='digit-separator' style='float:left;'>:</div>");
    }
  }

  $("#"+id).append("<div style='clear:both'></div>");

  this.animateDigits = function() {
    for (var dc=0; dc<6; dc++) {
      digits[dc].digitNext = Number(this.options.timeStr.charAt(dc));
      digits[dc].digitNext = (digits[dc].digitNext + 10)%10;

      var no = dc;

      if (digits[no].digit == 0) $("#digit-bg"+no).css("top", -this.options.digitImageHeight+this.options.digitHeight + "px");
      if (digits[no].digit != digits[no].digitNext) {
        $("#digit-bg"+no).animate( { "top" : -digits[no].digitNext*options.digitHeight+"px"}, options.digitSlideTime);
        digits[no].digit = digits[no].digitNext;
      }

    }
    var end = this.checkEnd();
  }

  this.checkEnd = function() {
    console.log(digits);
    for (var i = 0; i < digits.length; i++) {
      if (digits[i].digit != 0) {
        return false;
      }
    }
    clearInterval(timer);
    this.options.timerEnd();
    return true;
  }

  this.updateCounter = function() {
    d = new Date();
    //console.log((d.getTime() - lastTime))
    if ((d.getTime() - lastTime) < (options.updateInterval - 50)) {
      //clearInterval(timer);
      return;
    }
    lastTime = d.getTime();
    
    this.calculateTime();
    this.animateDigits();
  }

}