import { useEffect, useState } from "react";
import data from "./data";
import Folder from './Folder';

const Menubar = () =>{
    const [menuData , setMenuData] = useState(data);
   
    return(
        <>
            
            <Folder data={menuData} />
        </>
    )
};

export default Menubar;