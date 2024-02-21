import React, { useState, useEffect, useContext } from 'react'
import InputField from './InputField'
import TextAreaInputField from './TextAreaInputField'
import SubmitButton from './SubmitButton'
import { WarningMessage } from './WarningMessage'
import { CommonContext, EditField } from '../App'
import Header from './Header'


const NewPartyForm = () => {
  
  const { newState } = useContext(CommonContext);
  const { editState } = useContext(EditField);

  const [validationErrorMsg, setValidationErrorMsg] = useState('');
  const [count, setCount] = useState(0);

  const validateAndNext = () => {    

    if(newState.partyName === ""){
      setValidationErrorMsg('Party name required');
      return;

    } else if(count === 0) {
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }
    
    if(newState.partyBudget === ""){
      setValidationErrorMsg('Party budget required');
      return;

    } else if(count === 1){
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }
    
    if(newState.partyVenue === ""){
      setValidationErrorMsg('Party venue required');
      return;

    } else if(count === 2){
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }
    
    if(newState.partyFood === ""){
      setValidationErrorMsg('Party food required');
      return;

    } else if(count === 3){
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }
    
    if(newState.partyReturnGift === ""){
      setValidationErrorMsg('Return gift name required');
      return;

    } else if(count === 4){
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }
    
    if(newState.totolInvitations === ""){
      setValidationErrorMsg('Total invitee no. required');
      return;

    } else if(count === 5){
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }
    
    if(newState.partyDecorations === "" ){
      setValidationErrorMsg('Party decorations required');
      return;

    } else if(count === 6){
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }
    
    if(newState.partyEvents === ""){
      setValidationErrorMsg('Party event required');
      return;

    } else if(count === 7){
      setCount(count+1);
      setValidationErrorMsg('');
      return;
    }

  };

  useEffect( () => {
    // if(editState.newStateArr.length < 0) return

    if(editState.editPartyName === "") return
    setCount(editState.newStateArr.indexOf(editState.editPartyName));

    // above if is the example of js es6 - guard clause
    // if(editState.editPartyName !== "") {
    //   setCount(editState.newStateArr.indexOf(editState.editPartyName));
    // }

  },[editState])

  return (
    <div className='grid content-center justify-center sm:h-96 mt-20'>

      <form 
        className="grid justify-center sm:py-20 sm:w-96 border-indigo-300 rounded-md bg-gradient-to-r from-indigo-300 to-indigo-200 shadow-inner
        transition duration-500 ease-in-out hover:scale-110 hover:shadow-md" 
        action=''
      >

        {
          count === 0  &&

          <div>
            <InputField
              name="partyName"
              id="partyName"
              type="text"
              lable="Party Name"
              placeholder="Enter name of Party"
            ></InputField>

            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }

        {
          count === 1 &&

          <div>
            <InputField
              name="partyBudget"
              id="partyBudget"
              type="number"
              min='1'
              lable="Budget"
              placeholder="Enter budget of Party"
            ></InputField>

            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }
        
        {
          count === 2 &&

          <div>
            <InputField
              name="partyVenue"
              id="partyVenue"
              type="text"
              lable="Venue"
              placeholder="Enter Venue of Party"
            ></InputField>

            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }

        {
          count === 3 &&

          <div>
            <InputField
              name="partyFood"
              id="partyFood"
              type="text"
              lable="Food"
              placeholder="Enter Food in Party"
            ></InputField>

            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }

        {
          count === 4 &&

          <div>
            <InputField
              name="partyReturnGift"
              id="partyReturnGift"
              type="text"
              lable="Return Gift"
              placeholder="Enter return gift"
            ></InputField>

            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }

        {
          count === 5 &&

          <div>
            <InputField
              name="totolInvitations"
              id="totolInvitations"
              type="number"
              lable="No. of Invitations"
              placeholder="Enter no. of people invited"
            ></InputField>
            
            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }

        {
          count === 6 &&

          <div>
            <TextAreaInputField
              name="partyDecorations"
              id="partyDecorations"
              lable="Decorations"
              placeholder="Enter decorations to be made"
            ></TextAreaInputField>
                        
            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }

        {
          count === 7 &&

          <div>
            <TextAreaInputField
              name="partyEvents"
              id="partyEvents"
              lable="Events"
              placeholder="Enter events of the party"
            ></TextAreaInputField>

            <WarningMessage warningText={validationErrorMsg}></WarningMessage>
          </div>
        }

        {
          count > 7 &&

          <div className='text-emerald-950'>
            <Header headerText="Plan Ready !! " subHeader="Now submit party details from summary"></Header>
          </div>
        }
        
        {
          count <= 7 &&

          <SubmitButton submitButtonLable="Save & Next" submitButtonName="next" onClickSubmit={() => validateAndNext()}></SubmitButton>
        }

      </form>

    </div>
  )
}

export default NewPartyForm