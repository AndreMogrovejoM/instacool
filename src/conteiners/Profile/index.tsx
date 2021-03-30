/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import ProfileImg from '../../components/ProfileImg';
import Button from '../../components/Button';
import Card from '../../components/Card';

const style = {
    container: {
        padding: '15px',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        padding: '0px 10px',      
        
    }
}


export default class Profile extends React.Component{
    public render() {
        return (
            <div style={style.container}>
                <div style={style.row}>
                <ProfileImg />
                <Button block={false}> Add info </Button>
                </div>
                <div style={style.row}>
                <Card><img src='http://placekitten.com/200/200'/></Card>
                <Card><img src='http://placekitten.com/200/200'/></Card>
                <Card><img src='http://placekitten.com/200/200'/></Card>
                </div>
                <div style={style.row}>
                <Card><img src='http://placekitten.com/200/200'/></Card>
                <Card><img src='http://placekitten.com/200/200'/></Card>
                <Card><img src='http://placekitten.com/200/200'/></Card>
                </div>
            </div>
            
        )
    }
}