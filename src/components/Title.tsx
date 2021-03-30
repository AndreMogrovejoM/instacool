/* eslint-disable jsx-a11y/heading-has-content */
import * as React from 'react'

const style = {
    color: '#555',
    
}

export default class Title extends React.Component{
    public render(){
        return (
         <h2 {...this.props} style={style}/>
        )
    }
}