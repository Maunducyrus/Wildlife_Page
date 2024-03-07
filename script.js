let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let sliderDom = document.querySelector('.slider');
let listItemDom = document.querySelector('.slider .list');
let thumbnailDom = document.querySelector('.slider .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
function showSlider(type){
    let itemSlider = document.querySelectorAll('.slider .list .item');
    let itemThumbnail = document.querySelectorAll('.slider .thumbnail .item');

    prevDom.onclick = function(){
showSlider('prev');
    }


    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);


    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        sliderDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length -1 ;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        sliderDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        sliderDom.classList.remove('next');
        sliderDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

