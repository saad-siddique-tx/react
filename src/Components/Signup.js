import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, label} from 'react-bootstrap';
import './login.css'

function Signup() {
    const history = useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("")
    const onSubmit = (e)=>{
        e.preventDefault();
            setmessage("successfull")
            history.push("/");

        

    }
    return (
        <div className="container-fluid bg">
            
            <div className="d-flex flex-row justify-content-center align-items-center " style={{height: "100vh"}}>
                    <Form onSubmit={onSubmit} className="form-container" >
                             <h3 className="text-center">Sign up</h3>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required  placeholder="Email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label >password</label>
                                <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required className="form-control" placeholder="Password" />

                            </div>
                            <input type="submit" value="submit" className="btn btn-primary"/>

                    </Form>                
                </div> 

            </div>

    )
}
export default Signup