function digitalClock(){
  let date = new Date();  // setting up the object

  let hours = date.getHours() + "";   //setting up the hh
  let minutes = date.getMinutes() + ""; //setting up the mm
  let seconds = date.getSeconds() + ""; //setting up the ss
  let day = date.getDay();

    if(hours.length < 2){  // This is the make sure the format is set up /hh:mm:ss/ This sets length of clock
      hours = "0" + hours;
    }

     if(minutes.length < 2){   //format 00:00:00
       minutes = "0" + minutes;
     }

      if (seconds.length < 2){
       seconds = "0" + seconds;
 }
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let clock = hours + ':' + minutes + ":" + seconds; // weekDays[day] + ' ' +

  let holy = weekDays[day];
   document.getElementById('clock').innerHTML = clock;
   document.getElementById('holy').innerHTML = holy;

  console.log();
};

digitalClock();

setInterval(digitalClock, 1000);
