// import React, { useState, useEffect } from 'react';
// import "./css/NavBarLooged.css"

// const NavBarLogged = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//         try {
//           const response = await fetch('http://localhost:6950/user');
//           const data = await response.json();
//           setUser(data);
//         } catch (error) {
//           console.error('Error fetching user details:', error);
//         }
//       };
//     fetchUserDetails();
//   }, []);

 

//   return (
//     <nav>
//       <div className="logo">Medium Clone</div>
//       <div className="user-details">
//         {user ? (
//           <>
//             <img src={user.avatar} alt={user.name} className="avatar" />
//             <span className="username">{user.name}</span>
//           </>
//         ) : (
//           <div className="loading">Loading...</div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBarLogged;
