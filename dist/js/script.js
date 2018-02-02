document.addEventListener('DOMContentLoaded', function(){
    var asideRightBtn = document.getElementById('asideRightBtn');
    var asideLeftBtn = document.getElementById('asideLeftBtn');
    
    asideLeftBtn.addEventListener('click', function(){
        let asideLeft = document.getElementById('asideLeft')
        
        asideLeft.classList.toggle('active');
    });
    
    asideRightBtn.addEventListener('click', function(){
        let asideRight = document.getElementById('asideRight')
        
        asideRight.classList.toggle('active');
    });
    
    window.addEventListener('scroll', function(){
        let stickyBlock = document.getElementById('stickyBlock');
        let scrolling = stickyBlock.offsetTop;
        
        if(window.pageYOffset >= scrolling){
            stickyBlock.style.position = 'fixed';
        }
        else{
            stickyBlock.style.position = 'static';
        }
    });
});
