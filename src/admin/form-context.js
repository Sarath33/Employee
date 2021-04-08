// import React, { createContext, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Store,{add} from './store';

// export const Former = createContext(); 


// function Form_ee(props)
// {
   
    
 
//     const[namer,setname] = useState("");
//     const[emailr,setemail] = useState("");
//     const[contactr,setcontact] = useState("");
//     const[genderr,setGender] = useState("");
//     const[category,setCategory] = useState("1");
//     const[formy,setformy]  = useState(false);


   
//     const name = (tt)=>{
//             setname(tt);
//      }
// console.log(formy);
//     const email = (tt)=>{
//         setemail(tt);
        
//     }
//     const contact = (tt)=>{
//         setcontact(tt);
        
//     }
//     const Gender = (tt)=>{
//         setGender(tt);
//     }
//     const Category = (tt)=>{
//         setCategory(tt);
//     }
// console.log(namer);
//     if(name != "" && formy)
//     {
//         let it = {id: uuidv4(),name: namer,email:emailr,contact: contactr,
//         category: category,gender: genderr}
        
//         add(it);
//        // setformy(false);
       
//     }
    
//     return(
//         <Former.Provider value={{formy,name,email,contact,Gender,Category,setformy}}>
//             {props.children}
//         </Former.Provider>
//     )

// }

// export default Form_ee;



