// 객체의 method 

let boy ={
   name : 'Mike',
   showName : function(){
      console.log(this.name); 
      // boy가 null 값이므로 boy.name보다
      // this.name으로 설정
   }
}

boy.showName();

let man = boy; // 같은 객체를 boy로도 접근 가능하고 man으로도 접근가능

boy = null; 

man.showName();


// 화살표 함수에서의 this
// 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴.
// 화살표 함수 내부에서 this 선언
// >> 브라우저 환경 : window, node.js환경 : global 가리킴
let boy1 ={
   name : "Mario",
   sayThis : () => {
      console.log(this);
   }
}

boy1.sayThis(); // 전역객체 window가 확인됨


