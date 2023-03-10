// 함수
// 1. 한 개의 함수는 한 개의 작업에 집중(한 개의 함수가 여러개의 기능을 구현하면 관리가 어려움)
// 2. 읽기 쉽고 어떤 동작을 하는지 알 수 있게 함수이름 설정

// 함수 설정 및 호출
let msg55 = 'Hello'; 
console.log('함수 호출 전')
console.log(msg55);


function sayHello(name){
  if(name){
    msg55 += `, ${name}`;
  }
  console.log('함수 내부')
  console.log(msg55)
}

sayHello('Mike')
console.log('함수 호출 후')


// 전역변수 msg와 지역변수 msg
let msg ='welcome'; // 전역 변수 msg
console.log(msg)

function sayHello1(name){
    // 지역변수 msg >> 전역변수와 같은이름으로 선언가능하며 서로 간섭을 받지 아니함
    let msg = "Hello"; 
    console.log(msg + ' ' + name);
}
sayHello1('MIKE');
console.log(msg);


let name = 'Mike'; // 전역변수 name

// 함수의 매개변수로 지정된 name 복사된 후 함수의 지역변수가 된다.
// 전체 서비스에서 공통으로 사용되는 변수가 아니면
// 함수에 특화된 지역변수로 선언하는 습관을 기르자
// 전역변수가 많아지면 관리가 힘들어짐.
function sayHello2(name){
    console.log(name);
}

sayHello2(); // 'undefined'로 출력
sayHello2('Jane');



// 디폴트값 설정
function sayHello3(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg);
}

sayHello3(); // default 값으로 설정한 friend 출력
sayHello3('JANE');


//return 값으로 반환
function add(num1, num2){
    return num1 + num2;
}

const result = add(2, 3);
console.log(result); // 5 출력

//return문 없는 함수
function showError(){
    alert('에러 발생');
    return;
}
const result1 = showError();
console.log(result1); // return문 없는 함수 undifined를 반환, return만 있어도 undifined를 반환



