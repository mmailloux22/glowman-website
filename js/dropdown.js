var mobileMenu = document.getElementById("mobile-menu");

document.getElementById("hamburger").onclick = function toggleMobileMenu(){
	mobileMenu.style.visibility = mobileMenu.style.visibility === "visible" ? "hidden" : "visible";
}
