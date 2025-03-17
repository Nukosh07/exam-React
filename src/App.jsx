// import { useState, useEffect } from "react";

// export default function Login() {
//   const [username, setUsername] = useState(
//     localStorage.getItem("username") || ""
//   ); 

//   useEffect(() => {
//     localStorage.setItem("username", username);
//   }, [username]); 

//   return (
//     <div>
//       <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)} 
//         placeholder="Атыңызды енгізіңіз"
//       />
//       <button onClick={() => setUsername("")}>🚪 Шығу</button>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function Login() {
//   const [username, setUsername] = useState(
//     localStorage.getItem("username") || ""
//   );

//   useEffect(() => {
//     if (username) {
//       localStorage.setItem("username", username);
//     } else {
//       localStorage.removeItem("username");
//     }
//   }, [username]);

//   return (
//     <div>
//       {username ? (
//         <>
//           <h2>Сәлем, {username}!</h2>
//           <button onClick={() => setUsername("")}>🚪 Шығу</button>
//         </>
//       ) : (
//         <>
//           <h2>Жүйеге кіріңіз</h2>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Атыңызды енгізіңіз"
//           />
//           <button onClick={() => localStorage.setItem("username", username)}>
//             ✅ Тіркелу
//           </button>
//         </>
//       )}
//     </div>
//   );
// }


import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!email);

  const handleLogin = () => {
    if (email === "tujmebajnursultan@gmail.com" && password === "Beka0102@") {
      localStorage.setItem("email", email);
      setIsLoggedIn(true);
    } else {
      alert("Қате email немесе пароль!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Сәлем, {email}!</h2>
          <button onClick={handleLogout}>🚪 Шығу</button>
        </>
      ) : (
        <>
          <h2>Жүйеге кіріңіз</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
          <button onClick={handleLogin}>✅ Кіру</button>
        </>
      )}
    </div>
  );
}
