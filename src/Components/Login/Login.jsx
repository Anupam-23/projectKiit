// import React, { useState } from 'react'
// import { auth } from 'firebase.js'
// import {useHistory} from 'react-router-dom'

// export default function Login() {
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const navigate= useHistory()
//     const handleSubmit= async (e)=>{
//         e.preventDefault()
//         try{
//         const result= await auth.signInWithEmailAndPassword(email,password)
//         window.M.toast({html:`welcome:${result.user.email}`,classes:"green"})
//         navigate('/')
//         }
//         catch(error)
//         {
//             window.M.toast({html:'Invalid User',classes:"red"})
//             navigate('/signup')
//         }
//     }
//   return (
//     <div className='center container' style={{width:'500px'}}>
//         <h3>Please Login</h3>
//         <form onSubmit={(e)=>handleSubmit(e)}>
//         <div >
//           <input type='email' placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
//         </div>
//         <div>
//           <input type='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
//         </div>
//         <button className='btn-small blue'>Login</button>
//         </form>
//     </div>
    
//   )
// }
