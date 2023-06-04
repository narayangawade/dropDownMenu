import React from 'react'
import { useState } from 'react';

const Dropdown = () => {
  
    const [active, setActive] = useState(false);
    const [list] = useState(['Yes', 'Probably not']);
    const [value, setValue] = useState('');

    const onClickHandeler = (e) => {
        setValue(e.target.textContent);
        setActive(false);
    }

    const onMouseHover = () => {
        setActive(true);
    }

    const results = list.map((result, index) => {
        return <a href="#" onClick={onClickHandeler} key={index}>{result}</a>;
    })

    return (
        <div className="dropdown">
          <form id="form">
          <h1>Should you use a dropdown?</h1>
            <h3>{value}</h3>
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
            <div className="dropdown-content" style={{ display: `${active ? 'block' : 'none'}` }}>
                {results}
            </div>
          </form>  
        </div>
    );
  
}

export default Dropdown


