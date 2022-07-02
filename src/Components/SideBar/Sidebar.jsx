import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../images/OneWeb_Logo.png'
import { SidebarData } from '../../Data/Data'


const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className="Sidebar">
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>

            <div className="menu"> 
                {SidebarData.map((item, idx)=>{
                    return (
                        <div className={selected===idx ?'menuItem active' : 'menuItem'} key={idx} onClick={()=>setSelected(idx)}>
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar