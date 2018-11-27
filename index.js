function getFirstSelector(selector) {
  const firstElem = document.querySelector(selector);
  return firstElem;
}
function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}
function increaseRankBy(n) {
  let lis = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n; 
  }
}
function deepestChild() {
  let deepChild = document.getElementById("grand-note").querySelectorAll('div');
  
}