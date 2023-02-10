import { useState } from "react";
import { User } from "../interfaces/example-ts";

function ExampleTS() {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = () => {
        setUser({
            name: "John Doe",
            age: 30,
            email: "upchh@example.com",
            address: {
                city: "New York",
                state: "NY",
                country: "USA"
            },
            admin: false
        })
    }
    return <div>
        <button onClick={fetchUser}>Fetch user</button>
        <br />
        {user && user.email}
    </div>
}

export default ExampleTS;