import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Loading from './../Loading';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Body = (props) => {
const latitude = props.coords.latitude
const longitude = props.coords.longitude

useEffect( () => {
if (latitude){
props.getWeather(latitude, longitude)
}}, [latitude, longitude])

if (!props.weather.sys) {return <Loading />}

const wimage = (`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`)
const tempC = Math.round(props.weather.main.temp-273.15)

const adjustBGColor = (tempC) => {
//    console.log("TEMPC", tempC);
    let bgColor=''
    switch (true) {
        
        case tempC <= -10:
            bgColor= '#00ffff' 
            break
        case  tempC > -10 && tempC <= 10:
            bgColor= '#fff700'
            break
        case  tempC > 30:
            bgColor= '#ff8c00';
            break
        default: bgColor= '#ffc800'
        break;
    }
//    console.log("COLOR", bgColor);
    return bgColor
}

const updateTemp =(e) => {
    props.updateTemp(e+273.15)
}
const bgColor = adjustBGColor(tempC)
    
return (
<div className="center">
    <div className="mySlider">
        <Slider min={-15} max={40} defaultValue={tempC} onChange={updateTemp} />
    </div>
        <div> {props.error && <span>{props.error}</span> } </div>
    <div>
        <Card style={{ width: '14rem', backgroundColor: bgColor }}>
            <Card.Img variant="top" src={wimage} width="5" height="230" />
            <Card.Body>
                <Card.Title>{props.weather.name} , {props.weather.sys.country}</Card.Title>

                <div>
                    <span className="badge badge-info"> {tempC}°С </span>
                    <span className="badge badge-info"> {props.weather.weather[0].description} </span>
                    <div> latitude : {props.weather.coord.lat.toFixed(2)} </div>
                    <div> longitude : {props.weather.coord.lon.toFixed(2)} </div>
                </div>
            </Card.Body>
        </Card>
    </div>
</div>
)}

export default Body;