import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);  // state normally immutable, change korte hoy useState hook er function diye. normally change korle change hobena cuz REACT er virtual dom e giye change korte hobe, seta hook er function korte pare, tokhon er sathe related ui teo change ta apply hoye jabe.


    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        setTeam(team - 1);
    }




    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    // ekhon player add o hote pare, remove o hote pare, means player er number er 1ta state manage kora hobe, jeta change holeo hote pare= is called state.

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove} style={{ margin: '10px' }}>remove</button>
        </div>
    )
}