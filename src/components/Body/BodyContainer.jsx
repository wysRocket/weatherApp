import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Body from './Body';
import {getWeather, getParticularCityWeather, updateTemp} from './../../redux/weather-reducer';


class BodyContainer extends PureComponent {
    
    render () {
        return <> 
            <Body error={this.props.error}
            coords={this.props.coords}
            getWeather={this.props.getWeather}
            weather={this.props.weather}
            getParticularCityWeather={this.props.getParticularCityWeather}
            updateTemp={this.props.updateTemp}/>        
    </>
}
}

const mapStateToProps = (state) =>({
    error: state.weather.error,
    coords: state.weather.coords,
    weather: state.weather.weather,
})

export default compose (
    
    connect (mapStateToProps, {getWeather, getParticularCityWeather, updateTemp})
) (BodyContainer)