import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render(){
      return(  
      <div> 
          <Navbar/>
          <div className="BadgeNew__hero"> 
            <img className="img-fluid" src={header} alt="Logo"/>

          </div>
          <div className="container">
            <div className="row">
                <div className="col">
                    <Badge firstName="Felipe" lastName="Letelier" twitter="fletelier" jobTitle="Frontend Engineer" avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                </div>
            </div> 
          </div>

      </div>);
    }
}

export default BadgeNew;