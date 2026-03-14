import { CalendarIcon } from "@heroicons/react/24/outline";; // optional if you use heroicons

const TicketCard = ({ ticket, onAdd }) => {
    const statusColor = {
        Open: "bg-green-100 text-green-600",
        "In-Progress": "bg-yellow-100 text-yellow-600",
        Resolved: "bg-gray-100 text-gray-600",
    };

    const priorityColor = {
        High: "text-red-500",
        Medium: "text-yellow-500",
        Low: "text-green-500",
    };

    const statusDotColor = {
        Open: "bg-green-500",
        "In-Progress": "bg-yellow-500",
        Resolved: "bg-gray-400",
    };

    return (
        <div
            onClick={() => onAdd(ticket)}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
        >
            {/* Top */}
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800 text-sm">{ticket.title}</h3>
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${statusColor[ticket.status]}`}>
                    {/* Status Dot */}
                    <span
                        className={`w-3 h-3 rounded-full ${statusDotColor[ticket.status]}`}
                    ></span>
                    {/* Status Badge */}
                    <span
                        className="text-xs"
                    >
                        {ticket.status}
                    </span>
                </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 mb-3">{ticket.description}</p>

            {/* Bottom */}
            <div className="flex justify-between gap-0.5 items-center text-xs text-gray-500">
                <span>{`#${1000 + ticket.id}`}</span>
                {/* Priority */}
                <span className={`${priorityColor[ticket.priority]} font-semibold uppercase`}>
                    {ticket.priority} PRIORITY
                </span>

                {/* Customer */}
                <span className="text-gray-500">{ticket.customer}</span>

                {/* Calendar */}
                <span className="flex items-center text-gray-400 space-x-1">
                    <CalendarIcon className="w-3 h-3" />
                    <span>{ticket.createdAt}</span>
                </span>
            </div>
        </div>

    );
};

export default TicketCard;
