import React from 'react'

const Nav = () => {
    const menu = ["Home","About","Services","Contact"];

    const style = {
        headerStyle : {
            color : "red",
            backgroundColor : "black"
        },
        menuStyle : {
            color : "red",
            backgroundColor : "black"
        }
    }
  return (
    <div className='navContainer'>
        <div>
            <h3 style={style.headerStyle}>ASK</h3>
        </div>
        <ul className='menuContainer'>
            {
                menu.map((i, index) => <li style={style.menuStyle} key={index}>{i}</li>)
            }
        </ul>
    </div>
  )
}

export default Nav