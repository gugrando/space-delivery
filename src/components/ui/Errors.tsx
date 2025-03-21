const ErrorsField = ({errors, className} : {errors: any, className: string}) => {
    return (
        <div className={className}>
            {Object.keys(errors).length ? (
                <p className="text-red-600 text-center">Verify and try again</p>
            ): null}
        </div>
        
    );
}
 
export default ErrorsField;