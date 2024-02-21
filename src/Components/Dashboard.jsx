import React, { useState } from 'react'
import Header from './Header'
import DashboardButton from './DashboardButton'
import NewPartyForm from './NewPartyForm'

const Dashboard = () => {


    const [newPartyForm, setNewPartyForm] = useState(false);
    const [updatePartyForm, setUpdatePartyForm] = useState(false);

    const showPartyForm = () => {

        if(!newPartyForm){
            setNewPartyForm(true);
        }
    };

    const showUpdatePartyForm = () => {

        if(!updatePartyForm){
            setUpdatePartyForm(true);
        }
    };

    const goToPreviousPage = () => {
      setNewPartyForm(false);
    };
    
    return (
        <div className='bg-gradient-to-l from-indigo-300 to-indigo-200 grid sm:col-span-5'>


            {
                !newPartyForm ?  
                <div className='grid gap-4 content-center justify-center'>

                    <Header headerText="Party Planner" subHeader="- a digital platform to plan parties -"></Header>

                    <div className='grid grid-cols-2 gap-1 h-14'>

                        <DashboardButton
                            name="newParty"
                            buttonLable="Plan New Party"
                            onClickFunction={showPartyForm}
                        ></DashboardButton>

                        <DashboardButton
                            name="updateParty"
                            buttonLable="Update Existing Party"
                            onClickFunction={showUpdatePartyForm}
                        ></DashboardButton>

                    </div>
                </div>

                :

                <div className='text-left ml-1'>
                    <DashboardButton
                        name="backButton"
                        buttonLable="Back"
                        onClickFunction={goToPreviousPage}
                    ></DashboardButton>

                    <NewPartyForm></NewPartyForm>
                </div>
            }


        </div>
    )
}

export default Dashboard