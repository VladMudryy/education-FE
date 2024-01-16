import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    margin: "10px 0",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "cornflowerblue",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  googleLogin: {
    display: "block",
    marginTop: "20px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
  },
};

function App() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    async function getMe() {
      await axios
        .get("http://localhost:4000/auth/me", {
          withCredentials: true,
        })
        .then((res) => setMe(res.data));
    }

    getMe();
  }, []);

  if (me) {
    return <h2>hi {JSON.stringify(me.email)}</h2>;
  }

  return (
    <div className="AppContainer">
      <div className="App">
        <div style={styles.container}>
          <h2 style={styles.title}>Login</h2>
          <form style={styles.form}>
            <label style={styles.label}>
              Username:
              <input type="text" style={styles.input} />
            </label>
            <br />
            <label style={styles.label}>
              Password:
              <input type="password" style={styles.input} />
            </label>
            <br />
            <button type="button" style={styles.button}>
              Login
            </button>
          </form>
          <a
            style={styles.googleLogin}
            href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fgoogle&client_id=559929738939-60h6joef7v4ohkcinv0a8vi7ag6i37oq.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email">
            LOGIN WITH GOOGLE
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
