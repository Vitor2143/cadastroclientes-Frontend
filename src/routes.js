import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home.js";
import ListUsers from "./screens/listusers";

export default function Rota(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/allusers" element={<ListUsers/>} />
            </Routes>
        </BrowserRouter>
    );}

