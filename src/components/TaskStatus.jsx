const TaskStatus = ({ tasks, resolved, onComplete }) => {

    return (

        <div>

            {tasks.map(task => (

                <div key={task.id} className="bg-white p-3 rounded mb-3">

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
                    <p key={task.id} className="text-[#001931] text-base bg-[#E0E7FF] p-2 mt-1">
                        {task.title}
                    </p>
                ))
            )}

        </div>

    );
};

export default TaskStatus;
