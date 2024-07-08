import React, {useEffect, useState} from 'react';

function NumberSumUp(props) {
    const [startNum, setStartNum] = useState(0)
    const [endNum, setEndNum] = useState(0)

    function start_num_handler(e) {
        setStartNum(e.target.value)
    }

    function end_num_handler(e) {
        setEndNum()
        Num(e.target.value)
    }

}

return (
    <div>
        <p> Start Number: <input type={"number"} id={"startnum"} onChange={start_num_handler}/></p>
        <p> End Number: <input type={"number"} id={"endnum"} onChange={end_num_handler}/></p>
        <p>
            <button id={"calbtn"}>Calculate</button>
        </p>
        <p>Result: {result}</p>
    </div>
);
}

export default NumberSumUp;