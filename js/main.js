window.addEventListener("wheel",function(e){
	e.preventDefault();
},{passive:false});
let $html = $("html");
let page = 1;
let lastPage = $(".content").length;
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
	if($html.is(":animated")) return;
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
		page--;
	}
	let posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
});


$(window).scroll(function(){
  if($(window).scrollTop() > $('.about').height()){
  $('nav').addClass('scroll_nav');
  }
  else{
    $('nav').removeClass('scroll_nav');
  }
});



var swiper = new Swiper(".swiper", {
	slidesPerView: 'auto',
	spaceBetween: 30,
});

let num = 0
const bird = document.querySelector('.bird')
setInterval(function(){
    num ++
    if(num > 29){num = 0}
    bird.style.backgroundPosition = num*48 + 'px'
},150)


const thumbBtn = document.querySelectorAll(".thumb>li"); //썸네일 버튼
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal img");
const modalTitle = document.querySelector("#modal .tit");
const modalType = document.querySelector("#modal .type");
const modalTag = document.querySelector("#modal .tag");

for (let aa of thumbBtn) {
	aa.addEventListener("click", (e) => {
		e.preventDefault();
		let img = e.currentTarget.querySelector("a").getAttribute("href");
		let tit = e.currentTarget.querySelector(".tit").innerHTML;
		let type = e.currentTarget.querySelector(".type").innerText;
		let tag = e.currentTarget.querySelector(".tag").innerHTML;
		
		modal.classList.add("on");
		modalImg.setAttribute("src", img);
		modalTitle.innerHTML = tit;
		modalType.innerText = type;
		modalTag.innerHTML = tag;
	});
}

modal.addEventListener("click", (e) => {
	modal.classList.remove("on");
});