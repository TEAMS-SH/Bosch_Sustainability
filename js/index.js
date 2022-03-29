
// Set the date we're counting down to
var countDownDate = new Date("Jul 23, 2029 08:46:03").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.3));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.3)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    let newdays = days.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false
    })
    let newhours = hours.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
    })
    let newminutes = minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    let newseconds = seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    

  // Display the result in the element with id="demo"
    document.getElementById("years").innerHTML = years;
    document.getElementById("days").innerHTML = newdays;
    document.getElementById("hours").innerHTML = newhours;
    document.getElementById("minutes").innerHTML = newminutes;
    document.getElementById("seconds").innerHTML = newseconds;
  
 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  console.log('good morning')
} else if (curHr < 18) {
  console.log('good afternoon')
} else {
  console.log('good evening')
}
