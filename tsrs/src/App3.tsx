import React from "react";
import RenderList from "./challange/React3/RenderList";
import { usersData } from './assets/data.ts'
import UserLists from "./challange/React3/UserLists.js";
const App = () => {
    return <>
        <RenderList
            data={usersData}
            renderName='users'
            RenderComponent={UserLists}
        />

    </>;
};

export default App;
