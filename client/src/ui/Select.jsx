import FormRow from './FormRow'

function Select({ label, id, placeholder, options, error, registration }) {
    return (
        <FormRow label={label} id={id} error={error}>
            <select
                id={id}
                defaultValue=""
                className={`form-control cursor-pointer has-[option:disabled:checked]:text-gray-400 ${
                    error ? 'form-control-error' : 'form-control-default'
                }`}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                {...registration}
            >
                <option value="" disabled hidden>
                    {placeholder}
                </option>

                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="text-black"
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </FormRow>
    )
}

export default Select
