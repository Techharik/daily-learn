import React from "react";

interface withRolesTypes {
    roles: string[],
    FallBackComponent: React.ComponentType
    injectedProps?: { [key: string]: any };
}


const withRoles = <P extends object>(
    WrappedComponent
        : React.ComponentType<P>
) => {
    return ({ roles, FallBackComponent, injectedProps, ...props }: withRolesTypes & P) => {
        const style = { padding: '10.2rem', margin: '1rem', }

        if (!roles.includes('Admin')) {
            return <FallBackComponent {...props} />
        }

        return <WrappedComponent style={style} {...props as P} {...injectedProps || {}} />
    }
};

export default withRoles;
