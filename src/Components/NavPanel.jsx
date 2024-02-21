import React, {useContext} from 'react'
import NavContent from './NavContent';
import SubmitButton from './SubmitButton';
import {CommonContext, EditField} from '../App';


const NavPanel = () => {

  const {newState, dispatch} = useContext(CommonContext);
  const {editState, editDispatch} = useContext(EditField);

  
  const updateField = (updateContentType) => {
    // dispatch({type: name , value: e.target.value})
    console.log("Update Content Type", updateContentType);
  };


  return (
    <div className="sm:min-h-full sm:text-left text-slate-300 bg-gradient-to-r from-indigo-950 to-cyan-700 font-sans py-2 pl-2 pr-1">
      {
        newState &&
        <div>
          <span className='sm:text-2xl font-bold text-slate-400'>Planning Summary</span> <br/><br/>

          {
            newState.partyName &&
            <NavContent title="Party Name" subtitle={newState.partyName} onClick={() => editDispatch({type: "editPartyName" , value: "partyName"}) }></NavContent>
          }

          {
            newState.partyBudget &&
            <NavContent title="Budget" subtitle={newState.partyBudget + "/-"} onClick={() => editDispatch({type: "editPartyName" , value: "partyBudget"}) }></NavContent>
          }

          {
            newState.partyVenue &&
            <NavContent title="Venue" subtitle={newState.partyVenue} onClick={() => editDispatch({type: "editPartyName" , value: "partyVenue"}) }></NavContent>          
          }

          {
            newState.partyFood &&
            <NavContent title="Food" subtitle={newState.partyFood} onClick={() => editDispatch({type: "editPartyName" , value: "partyFood"}) }></NavContent>          
          } 

          {
            newState.partyReturnGift &&
            <NavContent title="Return Gift" subtitle={newState.partyReturnGift} onClick={() => editDispatch({type: "editPartyName" , value: "partyReturnGift"}) }></NavContent>          
          } 

          {
            newState.totolInvitations &&
            <NavContent title="Totol Invitations" subtitle={newState.totolInvitations} onClick={() => editDispatch({type: "editPartyName" , value: "totolInvitations"}) }></NavContent>          
          } 

          {
            newState.partyDecorations &&
            <NavContent title="Decorations" subtitle={newState.partyDecorations} onClick={() => editDispatch({type: "editPartyName" , value: "partyDecorations"}) }></NavContent>          
          } 

          {
            newState.partyEvents &&
            <NavContent title="Events" subtitle={newState.partyEvents} onClick={() => editDispatch({type: "editPartyName" , value: "partyEvents"}) }></NavContent>          
          } 

          {
            newState.partyName !== "" && 
            newState.partyBudget !== "" && 
            newState.partyVenue !== "" && 
            newState.partyFood !== "" && 
            newState.partyReturnGift !== "" && 
            newState.totolInvitations !== "" && 
            newState.partyDecorations !== "" && 
            newState.partyEvents !== "" &&

            <SubmitButton submitButtonLable="Save Planned Details" submitButtonName="save"></SubmitButton>
          }
        </div>
      }
    </div>
  )
}

export default NavPanel