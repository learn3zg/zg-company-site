// 导航菜单移动端
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn && menuBtn.onclick = ()=>{
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Banner轮播
const bannerItems = document.querySelectorAll('.banner-item');
const dots = document.querySelectorAll('.dot');
let cur = 0;
function switchBanner(i){
    bannerItems[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = i;
    bannerItems[cur].classList.add('active');
    dots[cur].classList.add('active');
}
dots.forEach((dot,idx)=>dot.onclick=()=>switchBanner(idx));
setInterval(()=>{
    let next = (cur+1) % bannerItems.length;
    switchBanner(next);
},5000)

// 滚动导航变色
window.onscroll = ()=>{
    const header = document.querySelector('.header');
    if(window.scrollY>50){
        header.style.background="#051424";
    }else{
        header.style.background="rgba(0,22,45,0.92)";
    }
}