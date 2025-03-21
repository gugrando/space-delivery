const Button = ({type, className, onClick, children} : {type: "button" | "submit" | "reset", className: string, onClick?: () => void, children: React.ReactNode}) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>

    );
}
 
export default Button;