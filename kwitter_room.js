
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDzY1Od0R7MQLzypv_s3YCVAYIWsE8RIso",
  authDomain: "projecttest-3fcc8.firebaseapp.com",
  databaseURL: "https://projecttest-3fcc8-default-rtdb.firebaseio.com",
  projectId: "projecttest-3fcc8",
  storageBucket: "projecttest-3fcc8.appspot.com",
  messagingSenderId: "1025495723222",
  appId: "1:1025495723222:web:9f0e309e6de17c675ded77",
  measurementId: "G-L0PCWCV028"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNames(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomNames(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}