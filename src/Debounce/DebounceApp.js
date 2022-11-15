
const DebounceApp =  () => {
  const debounce = (cb, delay) => {
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const handleChange = debounce((e) => {
    alert("Making API Call as User stop typing")
  }, 1000);
  return (
    <div className="App">
      <label>Input: </label><input onChange={handleChange} />
    </div>
  );
}

export default DebounceApp;