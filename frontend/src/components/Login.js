import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
          <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;