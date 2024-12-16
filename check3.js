// # 7. factorial
function fact(n) { 
    let nos = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        nos = nos * i; 
    return nos; 
}

let n = 5; 
//console.log(fact(n));

// # 8. Phone number check
