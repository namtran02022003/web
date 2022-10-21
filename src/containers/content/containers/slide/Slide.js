import './App.css'
import { useEffect } from 'react'
function Slide(){
   useEffect(()=>{
    const mySlide = document.querySelectorAll('.mySlide')
    var indexs = 1
    document.querySelector('.s').onclick=()=>{clickSlide(-1)}
    document.querySelector('.e').onclick=()=>{clickSlide(1)}
    function clickSlide(x){
        showSlide(indexs += x)
    }
        showSlide(indexs)
        function showSlide(n){
            if(n> mySlide.length){indexs = 1}
            if(n<1){indexs = mySlide.length}
            for(var i = 0;i<mySlide.length;i++){
                mySlide[i].style.display='none'
            }
            mySlide[indexs - 1].style.display='block'
        }
       var autoIndex = 0
       autoSlide()
        function autoSlide(){
            for(var i =0;i<mySlide.length;i++){
                mySlide[i].style.display='none'
            }
            autoIndex++
            if(autoIndex > mySlide.length){autoIndex = 1}
          
            mySlide[autoIndex -1].style.display='block'
            setTimeout(autoSlide, 3000)
        }
   })
       console.log('bbbb');
    return(
        <>
       <div className="slideContent bg-info position-relative  ">
            <div className='mySlide'>
                <img  width="100%" src='https://cdn.tgdd.vn/2022/08/banner/720-220-720x220-145.png' alt='img'/>
            </div>
            <div className='mySlide'>
                <img  width="100%" src='https://cdn.tgdd.vn/2022/09/banner/reno8-720-220-720x220.png' alt='img'/>
            </div>
            <div className='mySlide'>
                <img  width="100%" src='https://cdn.tgdd.vn/2022/09/banner/flip4-720-220-720x220-4.png' alt='img'/>
            </div>
            <div className='mySlide'>
                <img  width="100%" src='https://cdn.tgdd.vn/2022/09/banner/w5-720-220-720x220-1.png' alt='img'/>
            </div>
            <span style={{left:'0%'}} className="slideClick s">S</span>
            <span style={{right:'0%'}} className="slideClick e">E</span>
       </div>
        </>
    )
}
export default Slide