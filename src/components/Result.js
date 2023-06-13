import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faPerson, faMoon, faSun, faWind, faGaugeHigh, faCalendar } from '@fortawesome/free-solid-svg-icons'




const Result = (props) => {

    const { date, city, sunrise, sunset, temp, pressure, wind, feels, icon, description, err} = props.weather

    let content = null;

    if(!err && city) {

        const sunriseTime = new Date(sunrise *1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset *1000).toLocaleTimeString()
        const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        content = (
            <React.Fragment>
            <div className="container-sm p-0 bg-light">
                <div className="p-2 mb-3 fs-5 bg-dark text-white text-center rounded"><FontAwesomeIcon icon={faCalendar} /> &nbsp; Today is {date}</div>
                <div className="d-flex m-3" >
                    <div className="d-flex rounded-pill bg-dark"><img src={imageUrl} alt="" /></div>
                    <p className=" align-items-center d-flex justify-content-center flex-grow-1 p-2 fs-6 fw-semibold text-monospace text-uppercase">{city}: {description}</p>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="p-2 m-2 d-flex  align-items-center justify-content-center border border-dark border-3 rounded fs-4"><span className="text-danger"><FontAwesomeIcon icon={faTemperatureThreeQuarters} /></span> &nbsp; Temperature: {temp} °C</div>
                    <div className="p-2 m-2 d-flex  align-items-center  justify-content-center  border border-dark border-3 rounded fs-4"><span className="text-success"><FontAwesomeIcon icon={faPerson} /></span> &nbsp;Feeling: {feels} °C</div>
                    <div className="p-2 m-2 d-flex  align-items-center justify-content-center border border-dark border-3 rounded fs-4"><span className="text-warning"><FontAwesomeIcon icon={faSun} /></span> &nbsp; Sunrise: {sunriseTime} </div>
                    <div className="p-2 m-2 d-flex   align-items-center justify-content-center border border-dark border-3 rounded fs-4"><FontAwesomeIcon icon={faMoon} /> &nbsp;Sunset: {sunsetTime} </div>
                    <div className="p-2 m-2 d-flex  align-items-center justify-content-center border border-dark border-3 rounded fs-4"><FontAwesomeIcon icon={faGaugeHigh} /> &nbsp; Air pressure: {pressure} hPa</div>
                    <div className="p-2 m-2 d-flex align-items-center justify-content-center border border-dark border-3 rounded fs-4"><span className="text-primary"><FontAwesomeIcon icon={faWind} /></span>&nbsp;Wind power: {wind} m/s</div>
                </div>
            </div>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <div> 
            {err ? <p className="container-sm fs-5 text-center">Find your city!</p>: content }
            </div>
            
        </React.Fragment>
        
    )
}

export default Result;