const todo = {
    id1:{
        desc:'buy grossaries',
        duedate:'24353'
    },
    id1:{
        desc:'okya',
        duedate:'24353'
    }
}

Object.entries(todo).forEach(([id, todInf])=>{
    console.log(todInf[id].duedate);
    console.log(todInf[id].desc);
})