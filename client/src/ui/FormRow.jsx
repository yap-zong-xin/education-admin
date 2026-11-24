function FormRow({ label, id, error, children }) {
    return (
        <div className="flex w-2/5 flex-col gap-2">
            <label htmlFor={id} className="text-sm font-semibold">
                {label}
            </label>

            {children}

            {error && (
                <p id={`${id}-error`} className="text-sm text-red-600">
                    {error.message}
                </p>
            )}
        </div>
    )
}

export default FormRow
