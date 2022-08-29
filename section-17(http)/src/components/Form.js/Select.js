import React, { useState, useEffect } from 'react';
import useHttp from '../../Hooks/use-http';
import Option from './option';


export default function Select() {
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([])
    const [countaryId, setCountaryId] = useState("1")
    const [stateId, setStateId] = useState("2");
    const { countryLoading, countryError, sendRequest: getCountrys} = useHttp();
    const { stateLoading, stateError, sendRequest: getState} = useHttp();
    const { cityLoading, cityError, sendRequest: getCity} = useHttp();


    useEffect(() => {
        const transformCountry = count => {
            setCountry(count.data)
        }
        
        getCountrys({
            url: "https://develop.hipoz.com/api/countrylist?country_id=0"
        }, transformCountry)
    }, [getCountrys])

    useEffect(() => {
        const transfromState = state => {
            setState(state.data)
        }

        getState({
            url: `https://develop.hipoz.com/api/statelist?country_id=${countaryId}`
        }, transfromState)
    }, [countaryId, getState])

    useEffect(() => {
        const trasformCity = city => {
            setCity(city.data);
        }

        getCity({
            url: `https://develop.hipoz.com/api/citylist?state_id=${stateId}`
        }, trasformCity)
    }, [getCity, stateId])

    const countryChangeHandler = event => {
        const index = event.target.selectedIndex;
        const element = event.target.childNodes[index]
        const id = +(element.getAttribute("id"))
        setCountaryId(id);
    }

    const stateChangeHandler = event => {
        const index = event.target.selectedIndex;
        const element = event.target.childNodes[index]
        const id = +(element.getAttribute("id"))
        setStateId(id);
    }

    return (
        <React.Fragment>
             <div className='control-box'>
                 {countryError}
                 {stateError}
                 {cityError}
                 {(countryLoading || stateLoading || cityLoading) && <h3>Loading...</h3>}
                        <div className='form-controls'>
                            <label>Select Country</label>

                            <select onChange={countryChangeHandler}>
                                <option></option>
                                {country.map(count => {
                                    return (
                                        <Option
                                            key={count.country_id}
                                            id={count.country_id}
                                            name={count.country_name}
                                        />
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form-controls'>
                            <label>Select State</label>
                            <select onChange={stateChangeHandler}>
                            <option></option>
                                {state.map(count => {
                                    return (
                                        <Option
                                            key={count.state_id}
                                            id={count.state_id}
                                            name={count.state_name}
                                        />
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='control-box'>
                        <div className='form-controls'>
                            <label>Select City</label>

                            <select>
                            <option></option>
                                {city.map(count => {
                                    return (
                                        <Option
                                            key={count.city_id}
                                            id={count.city_id}
                                            name={count.city_name}
                                        />
                                    )
                                })}
                            </select>
                        </div>
                    </div>
        </React.Fragment>
    )
}
