
function remaindTime() {
    var now = new Date(); //현재시간
    var end = new Date(2022,1,7,00,00,00 );
    // var end = new Date(now.getFullYear(),now.getMonth(),now.getDate()+7,00,00,00);

    // console.log(now);

    var nt = now.getTime(); // 현재 시간
    var et = end.getTime(); // 종료시간

     sec =parseInt(et - nt) / 1000;
     day  = parseInt(sec/60/60/24);
     sec = (sec - (day * 60 * 60 * 24));
     hour = parseInt(sec/60/60);
     sec = (sec - (hour*60*60));
     min = parseInt(sec/60);
     sec = parseInt(sec-(min*60));
     if(day<10){day = "0"+day;}
     if(hour<10){hour="0"+hour;}
     if(min<10){min="0"+min;}
     if(sec<10){sec="0"+sec;}
      $(".day").html(day-31);
      $(".hours").html(hour);
      $(".minutes").html(min);
      $(".seconds").html(sec);
   
 }
 setInterval(remaindTime,1000); //1초마다 검사


 