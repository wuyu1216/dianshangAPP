window.addEventListener('load',function () {
    let section = document.querySelector('section'),
        imgBox = document.querySelector('.imgBox'),
        lis = document.querySelectorAll('.dot > li'),
        sx,dirs,
        sw = section.offsetWidth,
        count =  0;
    let flag = true;
    //////////实现一直轮播////////////////////////////
    imgBox.innerHTML += imgBox.innerHTML;
    count=imgBox.childElementCount;//获取加之后的个数
    imgBox.style.width = sw * count+'px';
////////////////////////////////////////////////////////////
    section.addEventListener('touchstart',function (e) {
        let event = e.changedTouches[0];
        sx = event.pageX;
        dirs = imgBox.offsetLeft;
        imgBox.style.transition = 'none';
        ////////////////////////////////////////
        if(dirs/sw==0){
            imgBox.style.left = -lis.length * sw +'px';
        }else if(dirs/sw==(1-count)){
            imgBox.style.left = (1-lis.length) * sw +'px';
        }
        dirs = imgBox.offsetLeft;
        ///////////////////////////////////
    });
    section.addEventListener('touchmove',function (e) {
        let event = e.changedTouches[0];
        let mx = event.pageX;
        imgBox.style.left = dirs + (mx - sx)+'px';
    });
    section.addEventListener('touchend',function (e) {
        //////////////////判断返回上一张还是下一张///////////////////////////////
        let num = Math.round(imgBox.offsetLeft/sw);//imgBox.offsetLeft/sw移动距离所占百分比
        lis.forEach(ele=>{
            ele.classList.remove('hot')
    });
        /*
        * 5 6 7 8 9   0 1 2 3 4
        * 0 1 2 3 4   0 1 2 3 4
        * 对5取余 确定第几个原点
        * */
        lis[(-num%5)].classList.add('hot');
        imgBox.style.transition = 'all .5s';
        imgBox.style.left = num * sw + 'px';
    })
});