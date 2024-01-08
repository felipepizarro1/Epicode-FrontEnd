import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Image from './components/Image';
import Card from './components/Card';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('https://swapi.dev/api/people', {method:'GET'})
  .then(response => {
    if(response.ok){
      return response.json();
    } else {
      console.error('Error:', response);
      throw new Error('Bad request');
    }
  })
  .then(data =>{
    console.log("Data fetch: ", data);
    setData(data);
    
    //inserire functions per compilare
  })
  .catch(error => console.log("Error " + error));

  }, []);

  if (!data){
    return <div>Loading..</div>;
  }

  

  return (
    <div className="App">
     <Button nome="Button React"/>
     <Image srcUrl="https://i.natgeofe.com/n/528dc615-a30a-496f-b005-154995111cb3/torres-del-paine-national-park-patagonia.jpg?w=636&h=424" />
     {data.results.map(ele=>(
     <Card name={ele.name} height={ele.height}/>
     )
     )}
     
    </div>
  );
}

export default App;
