import React, { useState } from 'react'
import '../styles/cor.css'
import CorDetails from './CorDetails'


const createAPIUrl = query =>
`https://api.covid19api.com/total/country/${query}`;





function CountryComp(){

    const [searchQuery, setSearchQuery] = useState('');

    const [coronaData, setCoronaData] = useState({
        country:null,
        loading: true,
        confirm: null,
        active: null,
        death: null,
        recover: null,
        prevConfirm: null
    });

   


    function updateSearchQuery(e) {
            
        setSearchQuery(e.target.value);      
            
    }

    
    async function getCoronaData() {
       
    
        const response = await fetch(createAPIUrl(searchQuery));
    
        if (!response.ok) {
          return;
        }
    
        const res = await response.json();
    
        setCoronaData({
            country: res.slice(-1)[0].Country,
            confirm: res.slice(-1)[0].Confirmed,
            active:  res.slice(-1)[0].Active,
            death:  res.slice(-1)[0].Deaths,
            recover:  res.slice(-1)[0].Recovered,
            prevConfirm: res.slice(-2)[0].Confirmed,
            prevRecover: res.slice(-2)[0].Recovered,
            prevDeath: res.slice(-2)[0].Deaths,
            
        });
      }
        
        

    return (
        <div className="covid-con container white darken-4 z-depth-4">
          
            <h2 className="center red-text">Covid-19 Meter</h2>
            <div className="container">
            <div className="section">
            
            <input className="light-blue-text text-darken-3" placeholder="country"  id="countryName" type="text" onChange={updateSearchQuery}/>
            <i id="search-ico" className="animate__animated animate__bounce right animate__slow material-icons" onClick={getCoronaData} >search</i>

            
            
            </div>
            
            </div>
            <div className="container section">
                

                {coronaData.country ? (
          <CorDetails data={coronaData} />
        ) : (
            <p className="no-info center blue-text text-darken-4">No Information to display
                        <i className="material-icons animatedIcon">autorenew</i></p>
        )}
            </div>
           
        </div>
        
    )
}

export default CountryComp
