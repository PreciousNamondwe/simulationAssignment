const word ="hell my freind";
 let count=0;
function countword(word){
    word.split(",");
    for(let i in word){
        if(word[i]=='a' ||word[i]=='e' ||word[i]=='i' || word[i]=='o' || word[i]=='u'){
            count++;
        }
    }

    return count;
}

console.log(countword(word));