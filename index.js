// JavaScript에서 html 객체를 어떻게 가져올까?? 
//  Css처럼 ID와 클래스를 통해서 접근할 수 있다. 
//  -> 시작점은 Document이다1 -> DOM으로 접근하여 Html내용을 수정할 수 있다. 

const title = document.getElementById("title");
console.log(title);
title.innerHTML = "Hi! from JS";
title.style.borderStyle = "solid";
document.title = "I Own you now."

// querSelector는 노드의 첫번쨰 자식을 반환한다.
//  querySelector("#title");로 쓰면 Id로 "title"에 해당하는 객체를 찾곘다.
//  querySelector(".title");로 쓰면 클래스로 "title"에 해당하는 객체를 찾곘다.
const title2 = document.querySelector("#title");
title2.style.backgroundColor = "tomato";

 