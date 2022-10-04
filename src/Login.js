import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import "./Login.css";
import {login} from "./features/userSlice"
function Login() {

const [email, setEmail] = useState("")   
const [password, setPassword] = useState("")
const [name, setName] = useState("")
const [profilePic, setProfilePic] = useState("")
const dispatch=useDispatch();

 const loginToApp=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(
    (userAuth)=>{
      dispatch(
        login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.user.photoURL,
        })
      );
    }).catch((error)=>alert(error));
  


    };
    const register=()=>{
     if(!name){
      return alert("Please enter full name");
     }
     auth.createUserWithEmailAndPassword(email,password).then(
      (userAuth)=>{
        userAuth.user 
        .updateProfile({
          displayName:name,
          photoURL:profilePic,
        })
        .then(()=>{
          dispatch(login({
email:userAuth.user.email,
uid:userAuth.user.uid,
displayName:name,
photoUrl:profilePic
          }))
        });
      }).catch((error)=>alert(error));
    };
  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv5NTn4Iw_QsC7kW0Lbw3LrlPcPAHso2l9A&usqp=CAU"
        alt=""
      />
      <form>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>
      <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder='Profile pic URL(optional)' type="text" />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' type="email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' type="password" />
<button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{" "}</p>
      <span className="login__register" onClick={register}>Register now</span>

    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import "./Login.css";
// import { auth } from "./firebase";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [profilePic, setProfilePic] = useState("")

//   const loginToApp=(e)=>{
//         e.preventDefault();
//         };

//   const register=()=>{
//     if(!name){
//             return alert("Please enter full name");
//            }
//            auth.createUserWithEmailAndPassword(email,password).then(
//             (userAuth)=>{
//               userAuth.user 
//               .updateProfile({
//                 displayName:name,
//                 photoURL:profilePic,
//               })
//               .then(()=>{
//                 dispatch(login({
//       email:userAuth.user.email,
//       uid:userAuth.user.uid,
//       displayName:name,
//       photoUrl:profilePic
//                 }))
//               });
//             }).catch(error=>alert(error));
//           };


//   return (
//     <div className='login'>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv5NTn4Iw_QsC7kW0Lbw3LrlPcPAHso2l9A&usqp=CAU" alt="" />
//    <form >
//      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>
//     <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder='Profile pic URL(optional)' type="text" />
//     <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' type="email" />
//     <input value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' type="password" />
//     <button type='submit' onClick={loginToApp}> Sign In</button>

//    </form>
//  <p>Not a member?</p>
//  <span className='login__register' onClick={register}>Register now</span>
//  </div>
//   )
// }

// export default Login
