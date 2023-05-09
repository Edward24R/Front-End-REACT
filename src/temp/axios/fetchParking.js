import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";


//Info Page about Parkwise and its Members

const lst = [];  
const populateData = (data) => {lst.push(data)} 

async function axiosTest() {
    try{
        const response = await axios.get('https://swapi.dev/api/people/')
    return response.data
    }
    catch (error) {
        console.log(error);
      }
}

// now we can use that data from the outside!
axiosTest()
    .then(data => {
        response.json({ message: 'Request received!', data })
    })
    .catch(err => console.log(err))



export default function P_Data() {

  const [people, setPeople] = useState([]);
  const [error, setError] = useState('');
  const peopleArr = [];

  useEffect(async () => {
      try {
          const data = await axios.get('https://swapi.dev/api/people/');

          setPeople(data.data?.results)
      } catch (e) {
          setError('Something went wrong.')
      }

  }, [])

  getPeople(people.map(person => person.name))
  

  return (
    <> 

   
    {error && <h3>{error}</h3>}
        {people.length
            ? (
                <>
                    {people.map((person) => (
                        <h1>{person.name}</h1>
                    ))}
                </>
            )
            : <div>Loading...</div>}   
</>
  );

}
