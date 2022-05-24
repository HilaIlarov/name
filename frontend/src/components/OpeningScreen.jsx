import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./OpeningScreen.css";
import logo from "../icons/logo.png"
import GeneralForm from './GeneralForm';

function OpeningScreen() {
    return (
        <div className="OpeningScreen">
            <img src={logo} className="logo" />
            <div className="contbutton">
                <div className="text">
                    <a href='./GeneralForm'> Let's study!</a>
                </div>
            </div>
        </div>

    );
};
export default OpeningScreen;