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
module.exports={
    sum,multiPlication
}