// 객체

// 객체 설정
const superman ={
   name : 'clark',
   age : 30,
}

console.log(superman.name);
console.log(superman['age'])

//객체 추가
superman.haircolor = 'block';
superman['hobby'] = 'football';
//객체 삭제
delete superman.age;

// 객체 자체
console.log(superman);

//이름과 나이를 받아서 객체로 반환하는 함수
function makeObject(name, age){
   return{
      name,
      age,
      hobby : 'football'
   }
}

const Mike = makeObject('MIKE', 30);
console.log(Mike)

// property(속성) 존재 유무
// console.log("age" in Mike); // true
// console.log("birthday" in Mike); // false



function isAdult(user){
   if(!('age' in user) || user.age < 20){ // ㅕuser객체에 age property 가 없으면 false값이 나오도록 설정
      return false;
   }
   return true; // else
}


const Mario = {
   name : 'Mario',
   age : 30
}
const Jame = {
   name : "Jane"
}


console.log(isAdult(Mario));
console.log(isAdult(Jame)); // age가 없어도 true 값이 출력이 된다.

// 객체 for ... in

for(x in superman){
   console.log(x); // superman 객체의 KEY값이 출력
}
for(x in superman){
   console.log(superman[x]); // superman 객체의 Value 값이 순서대로 출력 
}





































