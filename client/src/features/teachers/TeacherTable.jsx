import Table from '../../ui/Table'
import TableRow from '../../ui/TableRow'

function TeacherTable({ teachers }) {
    return (
        <Table columns={['#', 'Name', 'Subject', 'Email', 'Work Contact']}>
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
