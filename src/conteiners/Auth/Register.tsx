import * as React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import Center from '../../components/Center';

export default class Register extends React.Component {
    public render() {
        return (
        <Container center={true}>
            <Card>
            <Title>Register</Title>
            <Input placeholder='Email' label="Email"/>
            <Input placeholder='Password' label="Password"/>
            <Button block={true}>Send</Button>
            <Center>
                <Link to='/'>Go to Loggin</Link>
            </Center>
            
            </Card>
        </Container>
        )
    }
}