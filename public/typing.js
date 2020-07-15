console.log("hello")
// set typing speed and wait times
var timeInit = 1000;     // initial wait before typing first line
var timeGap = 1000;      // wait time between each line
var timeChar = 40;       // time until next letter

var cursorChar = '&#9608;';

var originId = ['header1', 'header2'];
var originText = new Array();
for (var i = 0; i < originId.length; i++) {
  originText.push(document.getElementById(originId[i]).innerHTML);
}

var currentTimeout;
var showCursor;

var typeWriter = function (index) {
  console.log("typeWriter called")
  var loc = document.getElementById(originId[index]);
  var fullText = originText[index];
  var letterCount = 0;

  // this function spits out one letter per call, then calls the subsequent typeLetter()
  var typeLetter = function () {
    console.log("typeLetter called")

    currentTimeout = setTimeout(function () {
      loc.className = 'visible';
      letterCount += 1;
      var showText = fullText.substring(0, letterCount);

      // stops the function from self-calling when all letters are typed
      if (letterCount === fullText.length) {
        loc.innerHTML = showText;
        if (document.getElementById('header2').className == 'visible') {
          var button = document.getElementById('check');
          button.classList.remove('hidden');
          button.classList.add('visible');
        }
      } else {
        loc.innerHTML = showText + '<span class="typed-cursor">' + cursorChar + '</span>';
        typeLetter();
      }
    }, timeChar);

    
  };

  typeLetter();

};

// calculated time delays
var delayTime = [timeInit];
var cumulativeDelayTime = [timeInit];
for (var i = 0; i < originId.length; i++) {
  var elapsedTimeLine = originText[i].length * timeChar + timeGap + timeChar * 2;
  delayTime.push(elapsedTimeLine);
  var sum = 0;
  for (var j = 0; j < delayTime.length; j++) {
    sum += delayTime[j];
  };
  cumulativeDelayTime.push(sum);
  console.log("delaycalled")

};

// calls setTimeout for each line
var typeLineTimeout = new Array();
for (var i = 0; i < originId.length; i++) {
  typeLineTimeout[i] = setTimeout((function (index) {
    return function () {
      // cursorLine.className = 'hidden';
      typeWriter(index);

    }
  })(i), cumulativeDelayTime[i]);
};



// stops all timeouts
var skip = function () {
  clearTimeout(currentTimeout);
  clearTimeout(showCursor);
  for (var i = 0; i < typeLineTimeout.length; i++) {
    clearTimeout(typeLineTimeout[i]);
  };
};