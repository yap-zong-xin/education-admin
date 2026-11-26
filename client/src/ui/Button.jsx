function Button({
    children,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
