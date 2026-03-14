const TaskStatus = ({ tasks, resolved, onComplete }) => {

    return (

        <div className="bg-white p-4 rounded-lg shadow">

            <h2 className="font-semibold mb-4">
                Task Status
            </h2>

            {tasks.map(task => (

                <div key={task.id} className="bg-gray-100 p-3 rounded mb-3">

                    <p className="text-sm mb-2">
                        {task.title}
                    </p>

                    <button
                        onClick={() => onComplete(task)}
                        className="bg-green-600 text-white w-full py-1 rounded"
                    >
                        Complete
                    </button>

                </div>

            ))}

            <h2 className="font-semibold mt-6">
                Resolved Task
            </h2>

            {resolved.length === 0 ? (
                <p className="text-gray-400 text-sm">
                    No resolved tasks yet.
                </p>
            ) : (
                resolved.map(task => (
                    <p key={task.id} className="text-sm text-gray-500">
                        {task.title}
                    </p>
                ))
            )}

        </div>

    );
};

export default TaskStatus;
