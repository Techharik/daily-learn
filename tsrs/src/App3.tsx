import React from "react";
import RenderList from "./challange/React3/RenderList";
import { usersData } from './assets/data.ts'
import UserLists from "./challange/React3/UserLists.js";
import ContainerComponnet from "./challange/React3/ContainerComponnet.tsx";
import Dropdown from "./challange/React3/DropDownClone.tsx";
import withLoading from "./challange/React3/HOC/withLoading.tsx";
import TodoList from "./challange/React3/HOC/TodoList.tsx";
import withRoles from "./challange/React3/HOC/withRoles.tsx";
const HigerComponnet = withLoading(TodoList)

type DashboardProps = {
    security: string;
    user: string;
};

const Fallback = () => <div>Access Denied</div>;

const Dashboardss = ({ user, security, style }) => {
    return (
        <div style={style}>Welcome  Security level:{user} ---- {security}</div>
    )
}

const DashboardWithRoles = withRoles(Dashboardss);

const App = () => {
    return <>
        <RenderList
            data={usersData}
            renderName='users'
            RenderComponent={UserLists}
        />
        <ContainerComponnet>
            <ContainerComponnet.ToggleImg>
                Click Me
            </ContainerComponnet.ToggleImg>
        </ContainerComponnet>

        {/* <Dropdown>
            <Dropdown.Toggle>Main</Dropdown.Toggle>
            <Dropdown.Menu>
                <div>Profile</div>
                <div>Profile</div>
                <div>Profile</div>
            </Dropdown.Menu>
        </Dropdown> */}

        <Dropdown>
            <Dropdown.Toggle >Select an option</Dropdown.Toggle>
            <Dropdown.Menu>
                <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Profile</div>
                <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Settings</div>
                <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Logout</div>
            </Dropdown.Menu>
        </Dropdown>

        <HigerComponnet isLoading={false} style={{
            background: 'red',
            height: '2rem'
        }} />

        <DashboardWithRoles
            roles={["Admin"]}
            FallBackComponent={Fallback}
            injectedProps={{ security: "High" }}
            user='jane'
        />;

    </>;
};

export default App;
