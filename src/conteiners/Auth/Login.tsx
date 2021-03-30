import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Center from '../../components/Center';

export default class Login extends React.Component {
    public render() {
        return (
        <Container center={true}>
            <Card>
            <Title>Loggin</Title>
            <Input placeholder='Email' label="Email"/>
            <Input placeholder='Password' label="Password"/>
            <Button>Send</Button>
            <Center>
                <Link to='/register'>Go to Register</Link>
            </Center>
            
            </Card>
        </Container>
        )
    }
}