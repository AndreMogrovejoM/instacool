import * as React from 'react'

const style = (block: boolean): React.CSSProperties => ({
    backgroundColor: '#00D1B2',
    border: '0',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#fff',
    marginBottom: '10px',
    padding: '10px 15px',
    width: block? '100%' : undefined,
})

interface IButtonProps {
    block?: boolean
}

export default class Button extends React.Component<IButtonProps>{
    public render(){
        const { block = true } = this.props
        return (
         <button {...this.props} style={style(block)} />
        )
    }
}