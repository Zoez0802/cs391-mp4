export default function AboutPage() {
    return (
        // rounded-lg : rounded corners
        // shadow-lg: bigger drop shadow
        //gradient-to-b:Apply a background gradient that fades from the top to the bottom.
        // space-y-6 : Adds 24px vertical gap between children
        <section className="sansation max-w-3xl mx-auto mt-20 p-8 bg-gradient-to-b from-green-100 to-green-50 rounded-lg shadow-lg space-y-6 text-gray-800">
            <h1 className="text-3xl text-center text-green-800">About This Project</h1>

            <p className="text-lg">
                Welcome to <span className="font-semibold">Currency Rates</span> — a
                project built with <span className="font-semibold">Next.js</span> and{" "}
                <span className="font-semibold">Exchangerate-API</span> that helps you
                explore how one U.S. dollar compares to other currencies around the
                world.
            </p>

            <div className="border-l-4 border-green-500 pl-4 italic text-gray-700 bg-white/40 p-3 rounded-lg">
                “Exchange rates tell the story of global trade — how every country’s
                economy connects to every other one.”
            </div>

            <p className="text-lg">
                This project was <strong>Mini Project 4</strong> for the CS391 course. It
                fetches currency data securely on the server using API keys.
            </p>

            <div className="text-center">
                <a href="https://www.exchangerate-api.com/" target="_blank" className="inline-block px-5 py-2 mt-2 text-white bg-green-600 hover:bg-green-700 rounded-full shadow transition">
                    Learn More About Exchangerate-API
                </a>
            </div>
        </section>
    );
}

