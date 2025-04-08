import React, { ReactElement, ReactNode } from "react";

interface ListProps {
    data: any[];
    renderName: string,
    RenderComponent: any
}

const RenderList = ({ data, renderName, RenderComponent }: ListProps) => {
    return <div>
        {data.map((item, i) => {
            return <RenderComponent key={i} {...{ [renderName]: item }} />
        })}
    </div>;
};

export default RenderList;
