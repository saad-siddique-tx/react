import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, } from 'react-bootstrap';



function Content() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setdata(data); } )
          
    }, [])
    
        
    return (
        <div className="container" style={{marginTop:"10px"}}>
       <div  className="card" >
           <Table responsive striped bordered hover size="lm">
               <th>
                   id
               </th>
               <th>title</th>
               <th>body</th>
         
           {data.map((user)=>(
               <tr>
                   <td>{user.id}</td>
                   <td>{user.title}</td>
           <       td>{user.body}</td>
               </tr>

           ))}
             </Table>
       </div>
       </div>
    )
}

 export default Content
