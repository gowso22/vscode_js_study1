// 위에서 아래로 순차적으로 코드가 실행 : 인터프리터 언어

// 함수 선언문 : 어디서든 호출 가능
// 자바스크립트 내부알고리즘으로 실행 전 초기화 단계에서
// 코드의 모든 함수 선언문을 찾아서 생성

// 함수 표현식 : 해당 코드에 도달하면 생성
// 순차적으로 실행됨


// showError();
// 함수 표현식
//  let showError = function(){
//     console.log('error');
//  }

 // 함수 선언문
//   function showError(){
//     console.log('error');
//  }

// 화살표 함수 ES6이후 활발히 사용됨

 // 화살표 함수1
 let showError = () => {
    console.log("error");
 }

 showError();

 // 화살표 함수2
 const sayHello = (name) =>{
    // 지역변수 msg >> 전역변수와 같은이름으로 선언가능하며 서로 간섭을 받지 아니함
   const msg = `Hello, ${name}`; 
    console.log(msg);
}

sayHello('mikkke');

// 화살표 함수3 >> return문 없이 한 줄로 표현
const add = (num1, num2) => num1 + num2;

console.log(add(2,3));