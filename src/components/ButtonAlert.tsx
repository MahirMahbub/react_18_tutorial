import {ReactNode} from "react";

interface ButtonAlertProps {
    // message?: string; // custom property
    children: ReactNode; // build in property
    onClose?: () => void;

}
const ButtonAlert = ({children, onClose}: ButtonAlertProps) => {

    return <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert"></button>
    </div>;

}
export default ButtonAlert;