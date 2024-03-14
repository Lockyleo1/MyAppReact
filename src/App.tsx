import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import logo from "./assets/logo512.png";
import Display from './components/Display';
import Counter from './components/Counter';
import { TextComponent } from './components/TextComponent';
import CounterWithObjectState from './components/CounterWithObjectState';
import { MyCustomInput } from './components/MyCustomInput';
import { MiddleComponent } from './components/MiddleComponent';
import PersonInput from './components/PersonInput';
import IntervalComponent from './components/IncrementalComponent';
import { useMemo } from 'react';
import ToDoList from './components/ToDoList/ToDoList';

/**
 * 
 * ToDoList 
 * <- stato: array di stringhe
 * per eliminare usare la callback da todolistitem
 *
 * 
 * 
 * ToDoListItem
 * <-props: stringa del ListItem, indice,callback di eliminazione
 * callback che trasporti un contenuto informativo da todolistitem a todolist
 * 
 * 
 * ListemAdder
 * <- stato: stringa imputata da utente.
 * <- props: callback che trasporti un evento da notificare al genitore (ToDoList), per salvare (callback di salvataggio/aggiunta stringa)
 * 
 * 
 */


export default function App() {

const SaveP = (person: { name: string; surname: string }) => {
       console.log('Persona salvata:', person);
     };

  return <>
    <div>
      <ToDoList/>
    </div>
    <div>
      <h1>Applicazione SalvaPersona:</h1>
      <PersonInput onSave={SaveP} />
    </div>
  </>
};



/**
 * 
 * person input
 * 
 * 
 * 
 * const SaveP = (person: { name: string; surname: string }) => {
 *    console.log('Persona salvata:', person);
 *  };
 * 
 * return (
 *    <div>
 *      <h1>Applicazione</h1>
 *      <PersonInput onSave={SaveP} />
 *    </div>
 * );
 * 
 */

