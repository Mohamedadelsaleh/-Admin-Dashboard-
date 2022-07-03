import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../images/OneWeb_Logo.png'
import { SidebarData } from '../../Data/Data'
import {UilBars} from '@iconscout/react-unicons'
import {motion} from 'framer-motion'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const sidebarVariants ={
        true:{
            left:'0',
        },
        false:{
            left:'-60%',
        }
    }

    return (
        <>
            <div className="bars"  style={expanded ? {left:'60%'} : {left:'5%'}} onClick={()=>setExpanded(!expanded)}>
                <UilBars />
            </div>
            <motion.div className="Sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}`: ''}
            >
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
            </motion.div>
        </>
    )
}

export default Sidebar