import { useEffect, useRef, useState } from "react";

export default function SearchList() {
 
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
  const formRef = useRef();
  const [filterList, setFilterList] = useState(list);

  const onSearch = (e) => {
    let value = e.target.value;
    if (value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );

    setFilterList(filteredValues);
  };
  return (
    <div className="App">
      <form ref={formRef}>
        <label>Search: </label>
        <input name="search" onChange={onSearch} />
      </form>
      <ul>
        {filterList.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
