import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import Dashboard from './Components/Dashboard';
import NavPanel from './Components/NavPanel';

export const CommonContext = React.createContext();
export const EditField = React.createContext();

const initialState = {
  partyName: '',
  partyBudget: '', 
  partyVenue: '', 
  partyFood: '', 
  partyReturnGift: '', 
  totolInvitations: '', 
  partyDecorations: '',
  partyEvents: ''
};

const reducer = (state, action) => {
  switch(action.type) {
    case action.type: 
      return { ...state, [action.type]: action.value}
    default:
      return state
  }
}

const editInitialState = {
  editPartyName: '',
  newStateArr: [],
};

const reducer2 = (state, action) => {
  switch(action.type) {
    case action.type: 
      // console.log("reducer2",state)
      return { ...state, [action.type]: action.value}
    default:
      return state
  }
}


function App() {

  const [newState, dispatch] = useReducer(reducer, initialState);
  const [editState, dispatch2] = useReducer(reducer2, editInitialState);
  const [newStateArr, setNewStateArr] = useState([]);

  // useEffect( () => {
  //   console.log("newState",newState);
  // },[newState]);
  
  useEffect( () => {
    console.log("editState",editState);
  },[editState]);

  useEffect( () => {
    setNewStateArr(Object.keys(newState));
  },[])

  useEffect( () => {
    newStateArr.map( (name) => {
      editInitialState.newStateArr.push(name);
    })
  },[newStateArr])

  return (
    <CommonContext.Provider
      value = { {newState: newState , dispatch: dispatch} }   
    >

      <div className="grid sm:grid-cols-6 text-center h-screen font-sans sm:overflow-hidden">
        <EditField.Provider
          value = { {editState: editState , editDispatch: dispatch2} } 
        >
          <NavPanel></NavPanel>
          <Dashboard></Dashboard>
        </EditField.Provider>
      </div>

    </CommonContext.Provider>
  );
}

export default App;
