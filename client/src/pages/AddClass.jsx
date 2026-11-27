import CreateClassForm from '../features/classes/CreateClassForm'

function AddClass() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-extrabold text-[#333333]">
                Add Class
            </h1>

            <CreateClassForm />
        </div>
    )
}

export default AddClass
