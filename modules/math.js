function sum(...rest){
    // console.log(rest);
    let s=0;
    for(let i of rest){
        if(!isNaN(i)){
            s+=i;
        }
        else{
            return `${i} is not a valid input`;
        }
    }
    return s;
}


function multiPlication(...rest){
    let m=1;
    for(let i of rest){
        if(!isNaN(i)){
            m*=i;
        }
        else{
            return `${i} is not a valid input`;
        }
    }
    return m;
}

function factorial(n){

    if(!isNaN(n)|| n>=0){

        if(n==0||n==1){
            return 1;
        }
        let res=1;
        for(let i=1;i<=n ;i++){ 
                res*=i; 
        }
        return res;
    }
    else{
        return `${n} is not a valid input`;
    }
    
}
module.exports={
    sum,multiPlication,factorial
}

