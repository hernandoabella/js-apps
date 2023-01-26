var hits = 0;
var hitElement = document.querySelector(".hits");
document.body.onkeyup = function (e) {
if ((e.keyCode == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) {
addHit();
}
};
var addHit = function () {
hits++;
renderHits();
};
var renderHits = function () {
hitElement.innerHTML = hits;
};