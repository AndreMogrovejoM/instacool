/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react'
import Footer from '../components/Footer'
const style = {
    backgroundColor: '#fff',
    border: '2px solid #eee',
    marginBottom: '10px',
    padding: '10px 15px',

}

interface IPostProps {
    image: string
}

export default class Post extends React.Component<IPostProps>{
    public render(){
        const { image } = this.props
        return (
         <div style={style}>
             <img src={image} />
            <Footer />
         </div>   
        )
    }
}