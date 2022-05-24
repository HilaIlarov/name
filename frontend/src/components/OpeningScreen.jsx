import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./OpeningScreen.css";
import logo from "../icons/logo.png"

function OpeningScreen() {
    return (
        <div className="OpeningScreen">
            <img src={logo} className="logo" />
            <div className="contbutton">

            </div>
        </div>

    );
};
export default OpeningScreen;