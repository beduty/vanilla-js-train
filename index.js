// // // JavaScript에서 html 객체를 어떻게 가져올까?? 
// // //  Css처럼 ID와 클래스를 통해서 접근할 수 있다. 
// // //  -> 시작점은 Document이다1 -> DOM으로 접근하여 Html내용을 수정할 수 있다. 

// // const title = document.getElementById("title");
// // console.log(title);
// // title.innerHTML = "Hi! from JS";
// // title.style.borderStyle = "solid";
// // document.title = "I Own you now."

// // // querSelector는 노드의 첫번쨰 자식을 반환한다.
// // //  querySelector("#title");로 쓰면 Id로 "title"에 해당하는 객체를 찾곘다.
// // //  querySelector(".title");로 쓰면 클래스로 "title"에 해당하는 객체를 찾곘다.
// // const title2 = document.querySelector("#title");
// // title2.style.backgroundColor = "tomato";

//  const title = document.querySelector("#title");
//  title.innerHTML = "Hi! from JS2";

//  function handleResize(){
//      console.log("I have been resized.");
//  }
 
//  const BASE_COLOR = "rgb(52, 73, 94)";
//  const OTHER_COLOR = "rgb(252, 73, 94)";

//  function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor == BASE_COLOR){
//         console.log("OTHER_COLOR.");
//         title.style.color = OTHER_COLOR;
//     }else{
//         console.log("BASE_COLOR.");
//         title.style.color = BASE_COLOR;
//     }
//  }


//  function init(){
//      title.style.color = OTHER_COLOR;
//      window.addEventListener("resize", handleResize);
//     //  title.addEventListener("click", handleClick);
//      title.addEventListener("mouseenter", handleClick);
//  }

//  init();    


const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
//     원하는 상태의 css 클래스를 만들고, 
// JavaScript의 이벤트 핸들러로 클래스를 교체하면 반응하는 WebApp을 만들 수 있다!
    // const currentClass = title.className;
    // if(currentClass !== CLICKED_CLASS){
    //     title.className = CLICKED_CLASS;
    // }else{
    //     title.className = "";
    // }


    // // html에서는 css클래스를 여러개 사용할 수 있으므로, 
    // // = 으로 대입하는것보다는 add와 remove를 쓰는게 더 적절하다!
    // const curClassList = title.classList;
    // if(false == curClassList.contains(CLICKED_CLASS)){
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }     

    // 클래스리스트에 CLICKED_CLASS가 없으면 추가하고,있으면 없앤다.
    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("click", handleClick);
}
init();
