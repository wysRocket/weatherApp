import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import wico from './../img/mwa.svg';
import {usePosition} from './../usePosition';
import {setCoordinates} from './../../redux/weather-reducer';


const Header = () => {

  const {latitude, longitude, error} = usePosition();
  const dispatch = useDispatch();
 
  useEffect( () => {
    const coords = {latitude, longitude}
    dispatch(setCoordinates(coords))
        }, [latitude, longitude])
    
    
return (
  <div>
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <img className="wicustom" src={wico} alt="wico" />
          Geolocation Weather App {error ? 
          <span className="alert-warning">{error}</span> : null}
      </Navbar.Brand>
    </Navbar>

  </div>
    
)
}

export default Header;
