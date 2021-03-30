/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';

const style = {
    img: {
        borderRadius: '100%',
    }
}


export default class Profileimg extends React.Component{
    public render() {
        return (
            <div>
                <img style={style.img} src={'http://placekitten.com/100/100'}/>
            </div>
        )
    }
}