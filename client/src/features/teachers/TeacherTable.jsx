import Table from '../../ui/Table'
import TableRow from '../../ui/TableRow'

function TeacherTable({ teachers }) {
    return (
        <Table
            columns={[
                { label: '#', width: 'w-[10%]' },
                { label: 'Name', width: 'w-[20%]' },
                { label: 'Subject', width: 'w-[30%]' },
                { label: 'Email', width: 'w-[25%]' },
                { label: 'Work Contact', width: 'w-[15%]' },
            ]}
        >
            {teachers.map((teacher, index) => (
                <TableRow
                    key={teacher.email}
                    values={[
                        index + 1,
                        teacher.name,
                        teacher.subject,
                        teacher.email,
                        teacher.contactNumber,
                    ]}
                />
            ))}
        </Table>
    )
}

export default TeacherTable
