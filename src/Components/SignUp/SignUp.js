// import React, { useState } from 'react'
// import { auth } from '../firebase'
// import {useNavigate} from 'react-router-dom'
// export default function SignUp() {
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const navigate= useNavigate()
//     const handleSubmit= async (e)=>{
//         e.preventDefault()
//         try{
//         const result= await auth.createUserWithEmailAndPassword(email,password)
//         window.M.toast({html:`welcome:${result.user.email}`,classes:"green"})
//         navigate('/login')
//         }
//         catch(error)
//         {
//             window.M.toast({html:error.message,classes:"red"})
//         }
//     }
//   return (
//     <div className='center container' style={{width:'500px'}}>
//         <h3>Please SignUp</h3>
//         <form onSubmit={(e)=>handleSubmit(e)}>
//         <div>
//           <input type='email' placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
//         </div>
//         <div>
//           <input type='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
//         </div>
//         <button className='btn-small blue'>SignUp</button>
//         </form>
//     </div>
//   )
// }
