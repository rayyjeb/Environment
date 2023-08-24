var bodyvar = document.body

var consumptionvar = document.getElementById("consumption")
console.log("consumptionvar:", consumptionvar);

var peoplevar = document.getElementById("people")
console.log("peoplevar:", peoplevar);

var climatevar = document.getElementById("climate")
console.log("climatevar:", climatevar);

var resourcesvar= document.getElementById("resources")
console.log("resourcesvar:", resourcesvar);

//save text
var savetext= document.getElementById("save")

//frame
var frame = document.getElementById("frame")

// variable declaration done -----------

consumptionvar.onclick=()=>{
    //background
    
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    // save
    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
    
    // buttons
    
consumptionvar.style.background="#27AE60"
peoplevar.style.background="none"
resourcesvar.style.background="none"
climatevar.style.background="none"


consumptionvar.style.background
}

peoplevar.onclick=()=>{
// BACKGROUND
bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
bodyvar.style.backgroundSize= "100% 100%"

// frame
frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
// 

// save

savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

// buttons

peoplevar.style.background="#E63D55"
resourcesvar.style.background="none"
climatevar.style.background="none"
consumptionvar.style.background="none"


}

resourcesvar.onclick=()=>{
    // BACKGROUND
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    
    // frame
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    
    
    // save
    
    savetext.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle."
    
    // buttons
    
    resourcesvar.style.background="#E99555"
    peoplevar.style.background="none"
    climatevar.style.background="none"
    consumptionvar.style.background="none"
    
}

climatevar.onclick=()=>{
    // BACKGROUND
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    
    // frame
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    
    // save
    
    savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    
    // buttons
    
    climatevar.style.background="#3179E1"
    resourcesvar.style.background="none"
    peoplevar.style.background="none"
    consumptionvar.style.background="none"
    
}

// climatevar.onmouseover=()=>{

//     climatevar.style.background="#3179E1"

// }
// climatevar.onmouseout=()=>{

//     climatevar.onclick=()=>{
//         climatevar.style.background="#3179E1"
//     climatevar.style.background="transparent"
//     }
// }

// peoplevar.onmouseover=()=>{

//   peoplevar.style.background="#E63D55"

// }
// peoplevar.onmouseout=()=>{

//     peoplevar.style.background="#E63D55"
//     peoplevar.style.background="transparent"
// }

// resourcesvar.onmouseover=()=>{

//   resourcesvar.style.background="#E99555"
  
//   }
// resourcesvar.onmouseout=()=>{
  
//       resourcesvar.style.background="transparent"
//       resourcesvar.style.background="#E99555"
//   }

// consumptionvar.onmouseover=()=>{

//    consumptionvar.style.background="#27AE60"
    
//     }
//  consumptionvar.onmouseout=()=>{
    
//        consumptionvar.style.background="transparent"
//  }
