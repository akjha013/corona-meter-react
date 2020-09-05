import React, {useState} from 'react'
import '../styles/CorStyle.css'

function CorDetails({ data: { country,confirm, active, recover, death, prevConfirm, prevRecover, prevDeath } }) {

    const addCase = {confirm}-{prevConfirm};
    return (
   
      
        <div id="covcon-wrapper" className="section">
      
            <div className="row">
                <div className="col s12 indigo-text text-darken-2">
                    <h1 id="info-display" className="center animate__animated animate__fadeInDown animate__delay-1s animate__slower">{country}</h1>
                    
                </div>
            </div>
            <div className="row">
                <div className="col s3 center animate__animated animate__fadeInUp animate__delay-1s animate__slow  blue-text text-darken-4">
                    <h5 className="flow-text center">Confirmed</h5>
                    <p className="center">{confirm}</p>
                    <p className="center">+{Number(confirm)-Number(prevConfirm)}</p>
                </div>
                <div className="center animate__animated animate__fadeInUp animate__delay-1s animate__slow col s3 amber-text text-darken-4">
                    <h5 className="flow-text center">Active</h5>
                    <p className="center">{active}</p>
                </div>
                <div className="center animate__animated animate__fadeInUp animate__delay-1s animate__slow col s3 light-green-text text-darken-4">
                    <h5 className=" center">Recovered</h5>
                    <p className="center">{recover}</p>
                    <p className="center">+{Number(recover)-Number(prevRecover)}</p>
                </div>
                <div className="center animate__animated animate__fadeInUp animate__delay-1s animate__slow col s3 red-text text-darken-3">
                    <h5 className="flow-text center">Death</h5>
                    <p className="center">{death}</p>
                    <p className="center">+{Number(death)-Number(prevDeath)}</p>
                </div>
                
                
            </div>
            
            
        </div>
    );
      
   
  }
  
  export default CorDetails;