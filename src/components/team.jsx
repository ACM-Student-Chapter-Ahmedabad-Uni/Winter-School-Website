import React from 'react';
import './team-style.css';
const Team = (props) => {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="profiles">
          <div className="profiles__group">
            <img
              src="https://images.unsplash.com/photo-1525591932088-8eb7ed314934?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
            <p>Amy</p>
          </div>

          <div className="profiles__group">
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg9fQ"
              alt=""
            />
            <p>Jorge</p>
          </div>

          <div className="profiles__group">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
            <p>Kevin</p>
          </div>

          <div className="profiles__group">
            <img
              src="https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
            <p>Stacey</p>
          </div>

          <div className="profiles__group">
            <img
              src="https://images.unsplash.com/photo-1533689476487-034f57831a58?ixlib=rb-1.2.1?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
            <p className="profiles__name">Amelia</p>
          </div>

          <div className="profiles__group">
            <img
              src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?ixlib=rb-1.2.1?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
            <p>Jennifer</p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Team;

// import React from 'react';
// import './team-style.css';
// const Team = ({ imageSrc, name }) => {
//   return (
//     <div className="team-member">
//       <div className="box">
//         <div className="image-container">
//           <img src={imageSrc} alt="Team Member" />
//         </div>
//         <div className="text-container">
//           <h3>{name}</h3>
//           <div className="icon-container">
//             <a href="#" className="instagram-icon"><img src="instagram_icon.png" alt="Instagram" /></a>
//             <a href="#" className="linkedin-icon"><img src="linkedin_icon.png" alt="LinkedIn" /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
