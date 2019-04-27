import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from "./../../../constants/weather";

import "./styles.css";


const icons = {
    [SUN]: "day-sunny",
    fog: "day-fog",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]:"snow",
    [WINDY]: "windy",
}
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return  <WeatherIcons className="wicon" name={icon} size="2x"/>
    else
        return <WeatherIcons className="wicon" name={"day-sunny"}  size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weather-temperature-cont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperature-type">{` C°`}</span>
    </div>
);

WeatherIcons.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string
}

export default WeatherTemperature;