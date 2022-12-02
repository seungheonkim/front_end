import {useState} from 'react';

function Light({name}) {
    const [light, setLight] = useState(false);

    return (
        <div>
            <h1>
                {name} {light ? 'ON' : 'OFF'}{' '}
            </h1>
            <button
                onClick={() => setLight(true)}
                disabled={light}
            >
                ON
            </button>
            <button
                onClick={() => setLight(false)}
                disabled={!light}
            >
                OFF
            </button>
        </div>
    );
}

export default Light;