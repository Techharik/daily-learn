import React, { useEffect, useState } from "react";

type UserType = {
    name: string,
    email: string,
    image: string
}
const Fetching = () => {
    const [user, setUsers] = useState<UserType[]>([])

    const fetchData = async (): Promise<UserType[]> => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos');
            const result = await data.json()
            return result
        } catch (error) {
            console.error('This is a Error', error);
            return [];
        }
    }

    useEffect(() => {
        fetchData().then(data => setUsers(data)); // ✅ Update state with API response
    }, [])


    return <div>{user[0].name}</div>;
};

export default Fetching;
