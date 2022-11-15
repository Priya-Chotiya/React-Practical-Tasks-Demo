import { useCallback, useState, useMemo } from "react";

const MemoHook = () =>{
    const [data, setData] = useState([]);
    function format(){
        console.log('formatting....'); // this will print only when data has changed
        const formattedData = [];
        data.forEach(item => {
            const newItem =Math.random();
            if (newItem) {
                formattedData.push(newItem);
            }
        })
        return formattedData;
    }
    const formattedData = useMemo(format, [data])
    const updateData = () => {
        setData((prev) => [...prev , Math.random()])
    }
    return (
        <>
        {formattedData.map(item => (
            <div key={item}>
            {item}
            </div>
        ))}
        <button onClick={updateData}>Set Data</button>
        </>
    )  
}

export default MemoHook;