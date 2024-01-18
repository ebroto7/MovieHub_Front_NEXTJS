export const formatDate = (date: Date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-') ;
}
let mockDate = new Date("December 17, 1995 03:24:00");

const date = formatDate(mockDate)
console.log("new",new Date())
console.log("format date ", date)