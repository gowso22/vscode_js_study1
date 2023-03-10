// 배열 >> 순서가 있는 리스트
// 특징 : 문자 뿐만 아니라, 숫자 객체 함수 등도 포함할 수 있음
// length : 배열의 길이, push() : 배열 끝에 요소 추가
// pop() : 배열 끝에 요소 제거, unshift/shift : 배열 앞에 요소 추가(unshift)/제거(shift)

// 배열사용 가장 큰 이유 중 하나 반복문 사용 위해서(for / for ... of)

let days = ['mon', 'tue', 'wed'];

days[1] = '화요일'
console.log(days);
console.log(days.length);


days.push('thu');
days.unshift('sun');

console.log(days);

//for문
for(let index =0 ; index<days.length ; index++){
   console.log(days[index]);
}
// for ... of
for(let day of days){ //day는 배열의 요소로 아무 이름으로 지정해도 됨.
   console.log(day);
}