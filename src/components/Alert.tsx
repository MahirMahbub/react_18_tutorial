import {ReactNode} from "react";

interface AlertProps {
    // message?: string; // custom property
    children: ReactNode; // build in property
    type: 'success' | 'danger' | 'warning';

}

const Alert = ({children, type}: AlertProps) => {

    return <div className={`alert alert-${type}`} role={"alert"}>{children}</div>;
}


export default Alert;
