

import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
  render(){
  return <div>
            <div>
              <img src={confLogo} alt="Logo de la conferencia"/> 
            </div>
            <div>
              <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
              <h1> Felipe <br/> Letelier </h1>
            </div>
            <div>
              <p> Front-End Engineer</p>
              <p> @FelipeLetelier</p>
            </div>
            <div>
              #platziconf
            </div>
         </div>
  }
}

export default Badge;