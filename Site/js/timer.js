var countDownDate = new Date("Jul 17, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   
    
    document.getElementsByClassName("minute_p")[0].innerHTML = minutes;
    document.getElementsByClassName("hour_p")[0].innerHTML = hours;
    document.getElementsByClassName("day_p")[0].innerHTML = days;
    
    document.getElementsByClassName("minute_p")[1].innerHTML = minutes;
    document.getElementsByClassName("hour_p")[1].innerHTML = hours;
    document.getElementsByClassName("day_p")[1].innerHTML = days;
    
    document.getElementsByClassName("minute_p")[2].innerHTML = minutes;
    document.getElementsByClassName("hour_p")[2].innerHTML = hours;
    document.getElementsByClassName("day_p")[2].innerHTML = days;
    
}, 60000);