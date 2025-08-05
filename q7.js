const value=100;
const result = 0;

for(let i=0; i<=value; i++){
    if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else if(i%3==0 && i%5==0){
        console.log("FuzzBuzz");
    }
}