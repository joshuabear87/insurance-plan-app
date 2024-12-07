import React from 'react'

export default function InsuranceCard(props) {
  return (
    <div className="bg-dark rounded text-light p-3 m-3">  
        <h2>{props.insurance.name}</h2>
        <p>Is auth required for an imaging study: {props.insurance.imagingAuth}.</p>
        <p>Is auth required for surgeries: {props.insurance.surgeryAuth}.</p>
    </div>
  )
}
