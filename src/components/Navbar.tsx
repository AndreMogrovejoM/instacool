import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'


const styles = {
    link:{
        color: '#555',
        fontSize: '20px',
        fontWeight: 600,
        textDecoration: 'none',
    },
    navbar: {
        bordderBottom: 'solid 1px #aaa',
        padding: '10px 15px',
    }
}

export default class Navbard extends React.Component {
    public render(){
        return (
            <div style={styles.navbar}>
                <Link to='/app/newsfeed' style={styles.link}><FontAwesomeIcon icon={faNewspaper}/> InstaCat</Link>
                <div style={{float: 'right'}}>
                    <Link to='/app/profile' style={styles.link}><FontAwesomeIcon icon={faUser}/> Profile</Link>
                </div>
                
            </div>   
        )
    }
}