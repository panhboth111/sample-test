import React from 'react'
import './Header.scss'
const Header = ()=>{
    return(
        <header>
            <div className="wrap" data-test="wrap">
                <div>
                    <h1>ReactTests</h1>
                </div>
            </div>
        </header>
    )
}
export default Header