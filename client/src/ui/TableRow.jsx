function TableRow({ values }) {
    return (
        <tr className="border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50">
            {values.map((value, index) => (
                <td key={index} className="px-4 py-4 wrap-break-word">
                    {value}
                </td>
            ))}
        </tr>
    )
}

export default TableRow
