import Table from '../../ui/Table'
import TableRow from '../../ui/TableRow'

function ClassTable({ classes }) {
    return (
        <Table
            columns={[
                { label: '#', width: 'w-[10%]' },
                { label: 'Class Level', width: 'w-[20%]' },
                { label: 'Class Name', width: 'w-[20%]' },
                { label: 'Form Teacher', width: 'w-[50%]' },
            ]}
        >
            {classes.map((c, index) => (
                <TableRow
                    key={index}
                    values={[index + 1, c.level, c.name, c.formTeacher.name]}
                />
            ))}
        </Table>
    )
}

export default ClassTable
