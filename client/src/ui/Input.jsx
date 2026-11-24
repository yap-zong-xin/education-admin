import FormRow from './FormRow'

function Input({ label, id, type = 'text', placeholder, error, registration }) {
    return (
        <FormRow label={label} id={id} error={error}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`form-control placeholder:text-gray-400 ${
                    error ? 'form-control-error' : 'form-control-default'
                }`}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                {...registration}
            />
        </FormRow>
    )
}

export default Input
