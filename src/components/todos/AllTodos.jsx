import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../api/Api";
import Todo from "./Todo";



const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
        try {
            const getAllTodos = async () => {
                const response = await axios.get(`${apiUrl}/todos`);
                setTodos(response.data);
              };
              getAllTodos();
        } catch (error) {
            console.log(error)
            
        }
    
  }, []);

  return <div>
    {
        todos.length > 0? 
        todos.map((data, key) => {
            return <Todo key={key} id={data.id} title={data.title}  />
        }) : <h1>no data found error404</h1>
    } 
  </div>;
};

export default AllTodos;
