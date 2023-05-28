function clock(){
   let date=new Date();
   let hours= date.getHours();
   let minuts= date.getMinutes();
   let second= date.getSeconds();
   let clockFormate='AM'


   if( hours == 0 ){
    hours = 12;
   }else if( hours > 12 ){
    hours = hours-12;
    clockFormate="PM"
   }


   hours= hours < 10 ? '0'+hours:hours;
   minuts= minuts < 10 ? '0'+minuts:minuts;
   second= second < 10 ? '0'+second:second;

   let finalTime=`${hours}:${minuts}:${second}`;
   document.querySelector('#time').innerText=finalTime;
   document.querySelector('small').innerText=clockFormate;

   setInterval(clock,1000);
}
clock();





