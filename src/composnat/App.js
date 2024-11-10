import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
export default function App() {
  //logique
  //1 const
  const name = "hello world";
  const element = <h1> maarahbe bikom </h1>;

  //2 objet
  const etudiant = { nom: "Mohamed Aziz", prenom: "Ben Ismail", age: 25 };

  //3 function
  function getName(nom) {
    return nom;
  }

  function getObjectV1(objet) {
    return `Nom : ${objet.nom}| prenom ${objet.prenom}| age : ${objet.age}`;
  }

  function getObjectV2(objet) {
    const result = etudiant.nom + " " + etudiant.prenom + " " + etudiant.age;
    return result;
  }

  function getObjectV3(objet) {
    const result = objet.color + " " + objet.fontSize ;
    return result;
  }

  //4 list

  const listeEtudiant = [
    { nom: "Doe", prenom: "Jane", age: 20, objectId: 0 },
    { nom: "fadoua", prenom: "ben foulen", age: 24, objectId: 1 },
    { nom: "aziz", prenom: "ben ismail", age: 25, objectId: 2 },
    { nom: "nour", prenom: "ben foulen", age: 26, objectId: 3 },
  ];

  // () => () / function fn() { return }

  // const [fawzi , setFawzi] = useState()

  // const count = 0
  const [count, setCount] = useState(0);

  // const string
  const [string, SetString] = useState("a");

  const codeCss = {
    color: "#2ecc71",fontSize: "20px"
  }

  //useEffect(,[x]) 
  //useEffect(() => {},[x])

  // useEffect(() => {
  //   console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable count ');
  //   console.log('car le deuxieme argument est count ');
  //   return () => {
  //   console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
  //   }
  //   }, [string]);

 //useEffect(,[]) 
 //useEffect(() => {},[])

//  useEffect(() => {
//     console.log('cette fonction va etre execute une fois seulement ');
//     console.log('car le deuxieme argument est un tableau vide ');
//     return () => {
//     console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
//     }
//   }, [])
   
 //useEffect() 
 //useEffect(() => {})

  // useEffect(() => {
  //   console.log('cette fonction va etre execute chaque re-render');
  //   console.log('car pas de deuxieme argument passer');
  //   });
  
  return (
    //view
    <div className="App">
      <header className="App-header">
        {name}
        {element}
        Bonjout {etudiant.nom} , {etudiant.prenom} <br />
        {getName("fawzi")}
        <h3> getObjectV1 {getObjectV1(etudiant)} </h3> <br />
        <h3> getObjectV2 {getObjectV2(etudiant)} </h3> <br />
        {/* {listeEtudiant.map(function (item) { 
            return (
              <div key={item.objectId}>
                {item.nom} {item.prenom} {item.age}
              </div>
            );
          })} */}
        {listeEtudiant.map((item) => (
          <div key={item.objectId}>
            {item.nom} {item.prenom} {item.age}
          </div>
        ))}
        {count}
        <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
        {string}
        {/* <button onClick={() => SetString(string + "a")}>Ajouter A</button> */}
        {/* <button onClick={function () { return  SetString(string + "a")} }>Ajouter A</button> */}
        <input onChange={(e) => SetString(e.target.value) }/>

        {/* <p className="maClasse" style={{ color: "#FF0000", fontSize: "240px" }} >Formation React</p> */}
        <p style={codeCss}  >Formation React</p>
        {/* <h3> getObjectV3 {getObjectV3(codeCss)} </h3> <br /> */}

        <table border={2} >
          <caption>Liste etduiant </caption>
  <thead>
    <tr>
      <td>Nom</td>
      <td>Prénom</td>
      <td>Âge</td>
      <td>ObjectID</td>
    </tr>
  </thead>
  <tbody>
    {listeEtudiant.map((item) => (
      <tr key={item.objectId}>
        <td>{item.nom}</td>
        <td>{item.prenom}</td>
        <td>{item.age}</td>
        <td>{item.objectId}</td>
      </tr>
    ))}
  </tbody>
</table>

        </header>
    </div>
  );
}
