export function NextDayCalculator(day:number,month:number,year:number) {
    function isLeapYear(year:number):boolean{
        let isLeapYear: boolean = false
        if(year%4===0){
            if(year%100===0){
                if(year%400===0){
                    isLeapYear = true
                }
            } else {
                isLeapYear = true
            }
        }
        return isLeapYear
    }
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if(day<31){
                return [day+1,month,year]
            } else return [1,month+1,year]
        case 4:
        case 6:
        case 9:
        case 11:
            if(day<30){
                return [day+1,month,year]
            } else return [1,month+1,year]
        case 12:
            if(day<31){
                return [day+1,month,year]
            } else return [1,1,year+1]
        case 2:
            if(isLeapYear(year)){
                if(day<29){
                    return [day+1,month,year]
                } else {
                    return [1,month+1,year]
                }
            } else {
                if(day<28){
                    return [day+1,month,year]
                } else {
                    return [1,month+1,year]
                }
            }
    }
}