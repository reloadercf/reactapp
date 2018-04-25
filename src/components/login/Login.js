import React,{Component} from 'react';
import "./Login.css";
import { Form, Icon, Input, Button } from 'antd';
import LoginDisplay from "./LoginDisplay";
const FormItem = Form.Item;

class Login extends Component{
    render(){
        return(
           <LoginDisplay/>
        );
    }
}
export default Login;