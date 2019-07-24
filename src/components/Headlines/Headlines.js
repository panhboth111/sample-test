import React from 'react'

class Headlines extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {header, desc} = this.props
        if(!header){
            return null
        }
        return(
            <div data-test="headcomp">
                <h1 data-test="header">{header}</h1>
                <h4 data-test="disc">{desc}</h4>
            </div>
        )
    }
}
export default Headlines