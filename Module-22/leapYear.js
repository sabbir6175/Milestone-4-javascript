// simple logics
// lipiyer k jodi 4 diye vag korle vagsesh 0 hoy tahole lipiyer dhora hoy sei year k


function isleapYear(year1){
    if(year1 % 4 === 0){
        return true
    }
    else{
        return false
    }
}
const isLeap = isleapYear(2047);
console.log(isLeap);


// hard logics but 2 logics different 


function isleapYear2(year){
    if(year % 100 !==0 && year % 400 === 0){
        return true
    }
    else if(year %  100 ===0 && year % 400 ===0){
        return true
    }
    else{
        return false
    }
}
const isleap1 = isleapYear2(2100);
const isleap2 = isleapYear2(2400);
const isleap3= isleapYear2(1900);
const isleap4= isleapYear2(2000);
console.log(isleap1,isleap2,isleap3,isleap4);
