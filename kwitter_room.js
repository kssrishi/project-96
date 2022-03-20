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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purepose: "adding room name",
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)'>#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
