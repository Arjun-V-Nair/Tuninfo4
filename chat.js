var firebaseConfig = {
    apiKey: "AIzaSyBLEGcirR4xyJQYLDlj303I2SbFHIOg3qE",
    authDomain: "project93-9f0e2.firebaseapp.com",
    databaseURL: "https://project93-9f0e2-default-rtdb.firebaseio.com",
    projectId: "project93-9f0e2",
    storageBucket: "project93-9f0e2.appspot.com",
    messagingSenderId: "29629911868",
    appId: "1:29629911868:web:ee6cd3b05cf1378d6b0439"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

function back()
{
    window.location = "ti.html";
}