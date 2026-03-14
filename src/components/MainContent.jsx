import React from 'react';
import { useState } from "react";
import { tickets } from "../../public/data";
import Banner from './Banner';
import TicketCard from './TicketCard';
import TaskStatus from './TaskStatus';
import { toast } from "react-toastify";

const MainContent = () => {
    const [tasks, setTasks] = useState([]);
    const [resolved, setResolved] = useState([]);

    const handleAddTask = (ticket) => {

        const exist = tasks.find(t => t.id === ticket.id);
        if (exist) {
            toast.error("Task already exists!");
            return;
        }
        if (ticket.status === "Resolved") {
            toast.warning("This task is already resolved!")
            return;
        } else {
            ticket.status = "In-Progress";
            setTasks([...tasks, ticket]);
            toast.success("Task added successfully!");
            toast.info("Task in progress");
        }

    };

    const handleComplete = (task) => {

        setTasks(tasks.filter(t => t.id !== task.id));
        task.status = "Resolved"
        setResolved([...resolved, task]);
        console.log(resolved);

        toast.success("Task Completed");
    };

    return (
        <div>

            {/* Banner */}
            <div>

                <Banner
                    inProgress={tasks.length}
                    resolved={resolved.length}
                />

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-5 lg:px-20 mt-10">
                {/* Ticket Grid */}
                <div className="lg:col-span-3">
                    <h2 className="text-xl font-semibold mb-4">
                        Customer Tickets
                    </h2>
                    <div className='lg:grid-cols-2 grid grid-cols-1 gap-4'>
                        {tickets.map(ticket => (
                            <TicketCard
                                key={ticket.id}
                                ticket={ticket}
                                onAdd={handleAddTask}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Task Status
                    </h2>
                    {/* Task Status */}
                    <TaskStatus
                        tasks={tasks}
                        resolved={resolved}
                        onComplete={handleComplete}
                    />
                </div>

            </div>
        </div>
    );
};

export default MainContent;