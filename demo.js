const checkLicensePlateHanoi=(LicensePlate) =>{
    const array=["29", "30", "31", "32", "33", "40"];
    for(const value of array){
        if(LicensePlate.startsWith(value)){
            return true;
        }
    }
    return false;
}

const licensePlate=["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
let list=[];

for (const value of licensePlate){
    if(checkLicensePlateHanoi(value)){
        list.push(value);
    }
}

console.log(list)