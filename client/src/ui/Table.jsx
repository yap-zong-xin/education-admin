import Card from './Card'

function Table({ columns, children }) {
    return (
        <Card className="p-8">
            <div className="overflow-x-auto">
                <table className="w-full min-w-200 table-fixed text-left text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.label}
                                    scope="col"
                                    className={`px-4 py-4 font-semibold ${column.width}`}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>{children}</tbody>
                </table>
            </div>
        </Card>
    )
}

export default Table
