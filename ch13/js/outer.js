//자바스크립트에서의 한줄 주석.. 
/*
  여러줄 주석.. 
*/
//  javascript 에서 html 의 dom node 획득.. 
//tag - element(요소) - node(js 에서 주로 사용하는 용어.. )
//dom - Document Object Model
//전체 html 문서가 계층구조로.. (DOM 구조)
// id 로 html 문서내의 node 를 획득.. 
var heading = document.querySelector('#a1');
//node 유저 클릭 이벤트.. 
heading.onclick = function () {
  heading.style.color = 'blue';
}