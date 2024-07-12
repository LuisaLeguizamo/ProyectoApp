import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyBvv5eTEt0rnX6WyFgPuOzLfBljtTboCoE",
    authDomain: "loginsuradualll.firebaseapp.com",
    projectId: "loginsuradualll",
    storageBucket: "loginsuradualll.appspot.com",
    messagingSenderId: "942432322796",
    appId: "1:942432322796:web:281e40ee553c0901f1d1c9",
    measurementId: "G-6WCZ17HPFL"
  };

  const app = initializeApp(firebaseConfig);

  let avatar=document.getElementById("avatar")
  let botonsalir=document.getElementById("botonsalir")
  //Utilizando la información del usuario loggeado
  const auth=getAuth()
  onAuthStateChanged(auth,(user)=>{
    if(user){
        let uid=user.uid
        avatar.classList.remove("invisible")
        avatar.textContent=user.email
    }else{

    }
  })

  botonsalir.addEventListener("click", function(){
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href="./views/login.html"
    })
  })