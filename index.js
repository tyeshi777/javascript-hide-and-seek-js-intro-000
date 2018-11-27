function getFirstSelector(selector) {
  const firstElem = document.querySelector(selector);
  return firstElem;
}
function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}
function increaseRankBy(n) {
  let lis = document.getElementById("app").querySelectorAll("ul .ranked-list li ul.ranked-list li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n; 
  }
}