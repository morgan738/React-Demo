import  ReactDOM  from "react-dom";
import React from 'react'
import { createRoot } from 'react-dom/client'
import ToppingList from './Toppinglist'


const root = createRoot(document.getElementById('app'))
root.render(<ToppingList/>)