import React from 'react'
import CountryInfo from './CountryInfo'
import './continents.css'

const ContinetOptions = ({countryList}) => {
    return (
    <div className='countryList'>
        {countryList.map((el,i)=> <CountryInfo key={i} info={el}/>)}
    </div>
  )
}

export default ContinetOptions