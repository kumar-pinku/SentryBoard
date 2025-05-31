'use client';
import { useActionState, useEffect } from "react";
import { createTicket } from '@/actions/ticket.actions';
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const NewTicketForm = () => {
  const router = useRouter();

  const [state, formAction] = useActionState(createTicket, {
    success: false,
    message: ""
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Ticket submitted successfully!");
      router.push('/tickets');
    }
  }, [state.success, router]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl mx-auto mt-10 border border-teal-100">
      <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">
        Submit a Support Ticket
      </h1>

      {state.message && !state.success && (
        <p className="text-red-500 mb-4 text-center">{state.message}</p>
      )}

      <form action={formAction} className="space-y-6 text-gray-700">
        {/* Subject Input */}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        {/* Description Textarea */}
        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        {/* Priority Dropdown */}
        <select
          name="priority"
          defaultValue="low"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-semibold py-3 rounded-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300 cursor-pointer"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default NewTicketForm;
