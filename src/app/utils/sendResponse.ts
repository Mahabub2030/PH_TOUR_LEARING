
interface TMeta{
    total:number
}


interface TResponse <T>{
    statusCode:number;
    success:boolean,
    message:string,
    data:T;
    meta?:TMeta
}

const sendRepose= <T> ()=>{}