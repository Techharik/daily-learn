import React from "react";



const HigerOrderComponent = () => {
    return <div>
        obj
    </div>;
};

export default HigerOrderComponent;



//sample componnets:

const withProps = (Component: any) => {
    return (props: any) => {
        return <Component {...props} />
    }
}