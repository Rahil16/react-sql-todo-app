import react, { useEffect,useState} from 'react';
import Axios from "axios";
import Navbar from './Navbar';
import DatenDay from './Date';
import Quote from './quote';
import Todolist from './todolist';
import TodoItem from './todoItem';
import Footer from './Footer';
import './css/styles.css'



function App(){ 
  return (
    <div>
    <Navbar></Navbar>
    <DatenDay></DatenDay>
    <Quote></Quote>
    <div className='todolist-parent'>
    <div className="todolist">
    <Todolist></Todolist>
    <TodoItem></TodoItem>
    </div>
    </div>
    <Footer></Footer>
    </div>
  )   
}






export default App
