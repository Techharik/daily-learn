import React from "react";

const withLoading = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    return ({ isLoading, ...props }: { isLoading: boolean, [key: string]: any }) => {
        return <>
            {isLoading ? <p>Loading...</p> : <WrappedComponent {...props as P} />}
        </>

    }
};

export default withLoading;
