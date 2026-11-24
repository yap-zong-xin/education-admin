import CreateTeacherForm from '../features/teachers/CreateTeacherForm'

function AddTeacher() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-extrabold text-[#333333]">
                Add Teacher
            </h1>

            <CreateTeacherForm />
        </div>
    )
}

export default AddTeacher
