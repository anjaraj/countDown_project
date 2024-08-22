 const endDate = "15 September 2024 12:00 PM"

 document.getElementById("end-date").innerText = endDate;

 const input = document.querySelectorAll("input");

 const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end,now);

    const difference = (end - now)/1000;
    //console.log(difference);

    if(difference < 0) return;

    // convert into days
    input[0].value = Math.floor(difference/3600/24);

    //calculate hours
    input[1].value = Math.floor((difference/3600) % 24);

    //calculate Minutes
    input[2].value = Math.floor((difference/60) % 60);

    //calculate Seconds
    input[3].value = Math.floor(difference % 60);

 }

 clock()


 /**
  * 1day = 24hrs
  * 1hr = 60mins
  * 60min = 3600 sec
  * 
  */

//call the clock() function in each seconds

 setInterval(
    ()=>{
        clock();
    },
    1000
 )