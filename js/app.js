let Height = Number (prompt ('Enter Your Height'));
let Weight = Number (prompt ('Enter Your Weight'));

let BMI = Weight / ((Height*0.3048)**2);

if(BMI < 18){
    document.querySelector('h1').innerText = 'Under Weight Range 🥴';
}else if(BMI >= 18.5 && BMI <25){
    document.querySelector('h1').innerText = 'Normal Weight Range 😊';
}else if(BMI>= 25 && BMI<30 ){
    document.querySelector('h1').innerText = 'Overweight Range 😱';
}
else if(BMI>=30){
    document.querySelector('h1').innerText = '😵‍💫';
}
    
