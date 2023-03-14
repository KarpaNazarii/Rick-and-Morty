import './App.scss';
import Content from "./components/Content/Content";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "./Firebase/firebase";

function App() {
    const [user] = useAuthState(firebase.auth());

    const handleSignOut = () => {
        firebase.auth().signOut();
    };
  return (
    <div className="App">
      <div className="container">
          <div className="user">
              {user ? (
                  <div className="user__logged-in">
                      <p className="user__logged-in-name">Welcome, {user.displayName}!</p>
                      <button className="user__logged-in-btn" onClick={handleSignOut}>Sign out</button>
                  </div>
              ) : (
                  <button className="user__login-btn" onClick={() => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
                      Sign in with Google
                  </button>
              )}
          </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
