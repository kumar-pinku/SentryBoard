// import { getTicketById } from "@/actions/ticket.actions";
// import CloseTicketButton from "@/components/CloseTicketButton";
// import { logEvent } from "@/utils/sentry";
// import { getPriorityClass } from "@/utils/ui_utils";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// const TicketDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
//   const { id } = await props.params;
//   const ticket = await getTicketById(id);

//   if (!ticket) {
//     notFound();
//   }

//   logEvent("Viewing ticket details", "ticket", { ticketId: ticket.id }, "info");

//   return (
//     <div className="min-h-screen bg-teal-50 p-8">
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow border border-teal-100 p-8 space-y-6">
//         <h1 className="text-3xl font-bold text-teal-700">{ticket.subject}</h1>

//         <div className="text-gray-700">
//           <h2 className="text-lg font-semibold mb-2">Description</h2>
//           <p>{ticket.description}</p>
//         </div>

//         <div className="text-gray-700">
//           <h2 className="text-lg font-semibold mb-2">Priority</h2>
//           <p className={getPriorityClass(ticket.priority)}>{ticket.priority}</p>
//         </div>

//         <div className="text-gray-700">
//           <h2 className="text-lg font-semibold mb-2">Created At</h2>
//           <p>{new Date(ticket.createdAt).toLocaleString()}</p>
//         </div>

//         <Link
//           href="/tickets"
//           className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
//         >
//           ← Back to Tickets
//         </Link>

//         {ticket.status !== "Closed" && (
//           <CloseTicketButton
//             ticketId={ticket.id}
//             isClosed={ticket.status === "Closed"}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default TicketDetailsPage;

import { getTicketById } from "@/actions/ticket.actions";
import CloseTicketButton from "@/components/CloseTicketButton";
import { logEvent } from "@/utils/sentry";
import { getPriorityClass } from "@/utils/ui_utils";
import Link from "next/link";
import { notFound } from "next/navigation";

const TicketDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const ticket = await getTicketById(id);

  if (!ticket) {
    notFound();
  }

  logEvent("Viewing ticket details", "ticket", { ticketId: ticket.id }, "info");

  return (
    <div className="min-h-screen bg-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-teal-100 p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-teal-700">
            {ticket.subject}
          </h1>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              ticket.status === "Closed"
                ? "bg-gray-200 text-gray-600"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {ticket.status}
          </span>
        </div>

        <hr className="border-teal-100" />

        <div className="space-y-1 text-gray-700">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-base">{ticket.description}</p>
        </div>

        <div className="space-y-1 text-gray-700">
          <h2 className="text-lg font-semibold">Priority</h2>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getPriorityClass(
              ticket.priority
            )}`}
          >
            {ticket.priority}
          </span>
        </div>

        <div className="space-y-1 text-gray-700">
          <h2 className="text-lg font-semibold">Created At</h2>
          <p className="text-base">
            {new Date(ticket.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between items-center pt-6">
          <Link
            href="/tickets"
            className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
          >
            ← Back to Tickets
          </Link>

          {ticket.status !== "Closed" && (
            <CloseTicketButton
              ticketId={ticket.id}
              isClosed={ticket.status === "Closed"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsPage;

