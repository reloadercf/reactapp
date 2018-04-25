import React from 'react';
import "./Login.css";
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
/*
*
*
*
*
* */

const LoginDisplay = ({}) => {
    return (
        <div className="Login">

            <Form layout="inline">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>

                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button>
                        Log in
                    </Button>
                </FormItem>
            </Form>

        </div>
    )
};

export default LoginDisplay;