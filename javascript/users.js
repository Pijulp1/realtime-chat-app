const searcBar = document.querySelector(".users .search input"),
searcBtn = document.querySelector(".users .search button");

searcBtn.onclick = ()=>{
    searcBar.classList.toggle("active");
    searcBar.focus();
    searcBtn.classList.toggle("active");
}