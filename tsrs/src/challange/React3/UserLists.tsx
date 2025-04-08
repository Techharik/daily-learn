import React from "react";
import type { userTypes } from "../../assets/data";


const UserLists = ({ users }: { users: userTypes }) => {
    return <div>
        {users.name}
    </div>;
};

export default UserLists;
