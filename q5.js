const mon = "morning";
const afn = "afternoon";
const evn ="evening"

const timeofday=()=>{
    const day = new Date();
     const hrs = day.getHours();
    if (hrs <12 ){
        console.log(mon);
    }else if(hrs>=12 && hrs <13){
       console.log(afn);
    }else{
        console.log(evn);
    }

}
console.log(timeofday());