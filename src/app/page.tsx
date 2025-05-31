import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-amber-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-extrabold text-teal-800 mb-2">
        Welcome to Sentry Board
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
      Streamline support with a modern ticketing system featuring real-time error monitoring. Built on Next.js and PostgreSQL for speed, reliability, and scalability.
      </p>

      <div className="flex space-x-4">
        <Link
          href="/tickets/new"
          className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-teal-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          Submit Ticket
        </Link>

        <button className="bg-white border border-teal-600 text-teal-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-200 cursor-pointer">
          View Tickets
        </button>
      </div>
    </div>
  );
};

export default Home;
