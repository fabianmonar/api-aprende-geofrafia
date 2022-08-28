import React,{useEffect,useState} from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import ContinetOptions from './ContinetOptions';
import Loader from '../Loader';
import MenuContinentOption from './MenuContinentOption';

const api = helpHttp();

const StudyMainMenu = () => {
    const [data, setData] = useState(null);

    const [europeSelection , setEuropeSelection ] = useState(false);
    const [asiaSelection, setAsiaSelection] = useState(false);
    const [africaSelection, setAfricaSelection] = useState(false);
    const [north_americaSelection, setNorth_americaSelection] = useState(false);
    const [south_amercicaSelection, setSouth_amercicaSelection] = useState(false);
    const [oceaniaSelection, setOceaniaSelection] = useState(false);
    const [antarticaSelection, setAntarticaSelection] = useState(false);

    useEffect(() => {;
        let url = "https://restcountries.com/v3.1/all";
        api.get(url).then(res =>{
            if(!res)return;
            let countrys = []
            res.map( country => {
                if(!country.capital)return;
                let information = {
                    continent: country.continents[0],
                    name: country.name.common,
                    capital: country.capital[0],
                    population: country.population,
                    flag: country.flags.png,
                    mapLink: country.maps.googleMaps
                }
                countrys.push(information);
            })
            setData(countrys);
        })
    }, []);

    let europe = [],
        asia = [],
        africa = [],
        north_america = [],
        south_america = [],
        oceania = [],
        antartica =  [];

    if(data){
        europe = data.filter(country => country.continent==="Europe").sort((a,b) => b.population - a.population);
        asia = data.filter(country => country.continent==="Asia").sort((a,b) => b.population - a.population);
        africa = data.filter(country => country.continent==="Africa").sort((a,b) => b.population - a.population);
        north_america = data.filter(country => country.continent==="North America").sort((a,b) => b.population - a.population);
        south_america = data.filter(country => country.continent==="South America").sort((a,b) => b.population - a.population);
        oceania = data.filter(country => country.continent==="Oceania").sort((a,b) => b.population - a.population);
        antartica = data.filter(country => country.continent==="Antarctica").sort((a,b) => b.population - a.population);
    }

    if(!data)return <Loader/> 

    return (
    <div>
        <MenuContinentOption 
            continentName="Europe" 
            continentData={europe} 
            countrySelection={europeSelection} 
            setCountrySelection={setEuropeSelection}/>
        
        <MenuContinentOption 
            continentName="Asia" 
            continentData={asia} 
            countrySelection={asiaSelection} 
            setCountrySelection={setAsiaSelection}/>
        
        <MenuContinentOption 
            continentName="Africa" 
            continentData={africa} 
            countrySelection={africaSelection} 
            setCountrySelection={setAfricaSelection}/>

        <MenuContinentOption 
            continentName="North America" 
            continentData={north_america} 
            countrySelection={north_americaSelection} 
            setCountrySelection={setNorth_americaSelection}/>

        <MenuContinentOption 
            continentName="South America" 
            continentData={south_america} 
            countrySelection={south_amercicaSelection} 
            setCountrySelection={setSouth_amercicaSelection}/>

        <MenuContinentOption 
            continentName="Oceania" 
            continentData={oceania} 
            countrySelection={oceaniaSelection} 
            setCountrySelection={setOceaniaSelection}/>
        
        <MenuContinentOption 
            continentName="Antartica" 
            continentData={antartica} 
            countrySelection={antarticaSelection} 
            setCountrySelection={setAntarticaSelection}/>
    </div>
  )
}

export default StudyMainMenu