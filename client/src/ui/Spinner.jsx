function Spinner({ size = 'md', className = 'text-primary' }) {
    const sizes = {
        sm: 'size-5 border-2',
        md: 'size-10 border-4',
    }

    return (
        <div role="status" className="flex items-center justify-center">
            <div
                className={`animate-spin rounded-full border-current border-t-transparent ${sizes[size]} ${className}`}
            />
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner
