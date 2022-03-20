//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyB3KgD4k_YN658XwAIKVXM7ROJgU3_62Ko",
  authDomain: "kwitter-ad394.firebaseapp.com",
  databaseURL: "https://kwitter-ad394-default-rtdb.firebaseio.com",
  projectId: "kwitter-ad394",
  storageBucket: "kwitter-ad394.appspot.com",
  messagingSenderId: "1022313443054",
  appId: "1:1022313443054:web:3eb4be21066e5500488dff",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
       like:0
      })
      document.getElementById("msg").value = "";     
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}