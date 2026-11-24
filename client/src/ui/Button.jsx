function Button({ children, onClick, className = ' ' }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 rounded-lg px-4 py-3 font-semibold hover:cursor-pointer ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
