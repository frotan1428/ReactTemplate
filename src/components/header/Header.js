import React from 'react'
import NaveHeader from './navbar-header'

const Header = () => {

  return (
   <>
   
   <header className="header">
    <div className="container">
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="navbar-header">
          <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="#" className="navbar-brand scroll-top logo"><b>Neu Profile</b></a>
        </div>
        {/*/.navbar-header*/}
        <div id="main-nav" className="collapse navbar-collapse">
          <NaveHeader/>
        </div>
        {/*/.navbar-collapse*/}
      </nav>
      {/*/.navbar*/}
    </div>
    {/*/.container*/}
  </header>

<div id="#top"></div>

   </>

  )
}

export default Header