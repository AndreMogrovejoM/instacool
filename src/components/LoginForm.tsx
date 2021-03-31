import * as React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import Input from './Input';
import Button from './Button';
import Center from './Center';

class LoginForm extends React.Component<InjectedFormProps>{
    public render(){
        const { handleSubmit } = this.props
        return (
        <form onSubmit={handleSubmit}>
            <Field placeholder='email' label='email' name='email' type='email' component={Input}/>
            <Field placeholder='password' label='password' name='password' type='password' component={Input}/>
            <Button block={true}>Send</Button>
            <Center>
                <Link to='/register'>Go to Register</Link>
            </Center>
        </form>
        )
    }
}

export default reduxForm ({
    form: 'login',
})(LoginForm)