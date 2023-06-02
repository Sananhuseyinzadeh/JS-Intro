let date = new Date();
let hour= date.getHours();
console.log(hour);

if(hour>=6 && hour<=12){
    alert('Sabahiniz Xeyir')
}
else if(hour>12 && hour<=18){
    alert('Gunortaniz Xeyir')
}
else if(hour>18 && hour<=24){
    alert('Axsaminiz xeyir')
}