import { useEffect, useState } from "react"

export default function Users() {

    const [users, setUsers] = useState([]);       // ekhane default value / initial state = number/string/boolean/array/object jkonotai hote pare.
    // ekhane default value hobe= kono user ke pawa jay nai, ar jehetu eta 1ta array of objects, means 1ta array tai ekhane initial state hobe [] empty array

    // ebar useEffect call kora hobe
    useEffect(() => {   // so, ekhane eta holo useEffect with dependency
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    // eta 2ta param ney, 1st callback function(generally anonymous), 2nd dependency  // prothombar sudhumatro data load korte caile dependency dte hobe [] empty array

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

/**
 * 1. declare a state to hold the data
 * 2. useEffect with callback function & dependency array
 * 3. use fetch to load data
 * 4. set data as useState's returned function's param // setUsers(data)
 * 
*/