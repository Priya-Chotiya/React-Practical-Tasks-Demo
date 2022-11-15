import { useState } from "react";
const Folder = ({data}) =>{
    const [show , setShow] = useState(false)
    if(data.isFolder){
        return(
            <>
                <ul>
                  
                  <li >{data.name } <button onClick={() =>setShow(!show)}> {show ? "^" : ">"} </button> </li>
                <li style={{display:show ? 'block' : "none" }}>
                    {
                          data.list &&  data.list.length > 0 &&  data.list.map((e) =>{
                            return <Folder key={e.name} data={e} />
                          })
                    }
                </li>
                </ul>
            </>
        )
    }else{
        return <div>{data.name}</div>
    }
    
};

export default Folder;