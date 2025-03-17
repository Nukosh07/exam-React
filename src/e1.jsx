import { useState, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  }, [username]);

  return (
    <div>
      {username ? (
        <>
          <h2>Сәлем, {username}!</h2>
          <button onClick={() => setUsername("")}>🚪 Шығу</button>
        </>
      ) : (
        <>
          <h2>Жүйеге кіріңіз</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Атыңызды енгізіңіз"
          />
          <button onClick={() => localStorage.setItem("username", username)}>
            ✅ Тіркелу
          </button>
        </>
      )}
    </div>
  );
}
