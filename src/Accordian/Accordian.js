import React, { useState } from 'react'
import AccordianItem from "./AccordianItem";
const list = [
    {
        id:1 , label:"My First Label", details:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
    },
    {
        id:2 , label:"My Second Label", details:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
    },
    {
        id:3 , label:"My Third Label", details:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
    }
];

const Accordion = () => {
    const [data , setData] = useState(list);
  return (
    <div>
        {
            data.map((e , i) => {
                return(
                    <AccordianItem key={i}  {...e} />
                )
            })
        }
    </div>
  )
}

export default Accordion