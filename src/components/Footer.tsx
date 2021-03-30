/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'

const styles = {
    button: {
        cursor: 'pointer',
        flex: 1,
        padding: '10px 15px',
        textAlign: 'center',
    },
    footer: {
        backgroundColor: '#eee',
        display: 'flex',
        color: '#555',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft: '-15px',
        marginBottom: '-10px',
        width: 'calc(100% + 30px)',
    },
    
} 


export default class Footer extends React.Component{
    public render(){
        return (
            <div style={styles.footer}>
                <div style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp}/> Like</div> 
                <div style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faRetweet}/> Share</div>
            </div> 
        )
    }
}


