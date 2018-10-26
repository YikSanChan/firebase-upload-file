import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

class App extends React.Component {
  handleFileUpload = event => {
    event.persist();
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const birdsRef = storageRef.child("birds/" + file.name);
    const uploadTask = birdsRef.put(file);
    uploadTask
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(downloadURL => console.log("File available at:", downloadURL))
      .catch(error => console.log("error:", error));
  };
  render() {
    return <input type="file" onChange={this.handleFileUpload} />;
  }
}

const config = {
  apiKey: "AIzaSyBICdkEmRKwXmkVMAhjwuC7iSXPiB8GEGM",
  authDomain: "fir-upload-file-e3415.firebaseapp.com",
  databaseURL: "https://fir-upload-file-e3415.firebaseio.com",
  projectId: "fir-upload-file-e3415",
  storageBucket: "fir-upload-file-e3415.appspot.com",
  messagingSenderId: "204640500382"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById("root"));
