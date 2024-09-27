// import React from "react";
// function Students(){
//     return(
//         <>
//         <div class="head">
//         <h5>
//         <a href="https://www.w3schools.com/"> StoreList</a> </h5>  
//         <h5>
//         <a href="https://www.w3schools.com/"> TourLocation</a> </h5>  
//         <h5>
//         <a href="https://www.w3schools.com/"> TourLocation</a> </h5>  
//         <h5>
//         <a href="https://www.w3schools.com/"> Tutorial</a> </h5>  </div>
//         </>
//     )
// }

function head(propse){
    return(
        <>
   name:{propse.name};
   age:{propse.age};
   department:{propse.department};
   </>)
}

export default head;