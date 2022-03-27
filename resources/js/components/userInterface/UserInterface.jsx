import React, { useState } from "react";
import Header from "../Header";
import UI_card from "./ui_cards/UI_card";
import { useParams } from "react-router-dom";


function UserInterface({responseData}) {

    // Getting the parameters data and passing it to the the decendent components with props
    let {user_id} = useParams();
    console.log(user_id);
    return (
        <div className="UI_cnt">
            
            <h1 class="UI_title">Do you want to register as </h1>
            <div className="UI_card__cnt">
                <UI_card title="Player" />
                <UI_card title="Organization" />
                <UI_card title="Staff" />
                
            </div>
        </div>
    )
}

export default UserInterface;