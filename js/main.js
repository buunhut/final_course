// thanh menu
var logo = document.querySelector("#main__menu .logo");
var menu = document.querySelector("#main__menu .list__menu");
var opener = document.querySelector("#main__menu .logo .opener");
var closer = document.querySelector("#main__menu .logo .closer");
var overlay = document.querySelector(".overlay");

//tạo function bắt resize màn hình, truyền vào tham số breakpoint
function resizeWindow(breakpoint) {
  // xử lý khi chạm điểm breakpoint, bằng .matches
  if (breakpoint.matches) {
    // chạm breakpoint
    menu.classList.add("none");
    opener.classList.remove("none");
  } else {
    // chưa chạm breakpoint
    menu.classList.remove("none");
    opener.classList.add("none");
    closer.classList.add("none");
    overlay.classList.add("none");
  }
}
// tạo biến chưa giá trị breakpoint
var breakpoint = window.matchMedia("(max-width: 768px)");
// chạy function resizeWindow, lúc không thay đổi kích thước
resizeWindow(breakpoint);
// bắt thuộc tính khi thay đổi giá trị breakpoint
breakpoint.addEventListener("change", () => {
  resizeWindow(breakpoint);
});
// xử lý nút menu bar
opener.onclick = function () {
  opener.classList.add("none");
  closer.classList.remove("none");
  menu.classList.remove("none");
  overlay.classList.remove("none");
};
closer.onclick = function () {
  opener.classList.remove("none");
  closer.classList.add("none");
  menu.classList.add("none");
  overlay.classList.add("none");
};
overlay.onclick = function () {
  opener.classList.remove("none");
  closer.classList.add("none");
  menu.classList.add("none");
  overlay.classList.add("none");
};
// nút back to top
var backTotop = document.getElementById("backTotop");
// ở trên thì ẩn nút backtotop
window.onscroll = function () {
  // bắt sự kiện scroll chuột cách top 30px
  if (document.documentElement.scrollTop > 30) {
    backTotop.style.display = "block";
  } else {
    backTotop.style.display = "none";
  }
};
// bắt sự kiện click trượt lên top 0
backTotop.onclick = function(){
  document.documentElement.scrollTop = 0;
}
