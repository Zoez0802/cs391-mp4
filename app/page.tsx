// app/page.tsx
import Rate from "../components/Rate";
import { getData } from "../getData";

export default async function Home() {
    const data = await getData();
    const base = data.base_code;
    const updated = data.time_last_update_utc;

    {/*take all key-value pairs from the conversion_rates object and turn them into an array*/}
    const rates = Object.entries(data.conversion_rates);

    return (
        <div className="max-w-6xl mx-auto p-8 flex flex-col items-center text-center bg-gradient-to-b from-green-50 to-green-100 rounded-2xl shadow-xl">

            {/* Header */}
            <div className="text-center mb-6">{/*margin-bottom*/}
                <h1 className="text-4xl font-bold text-green-800 tracking-wide"> {/*tracking-wide:“letter-spacing*/}
                     Currency Exchange Dashboard
                </h1>
                <p className="text-gray-700 mb-6">
                    Base: <span className="font-semibold text-green-700">{base}</span> ·{" "}
                    Updated: <span className="italic">{updated}</span>
                </p>
            </div>

            {/* Divider */}
            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mb-4" />


            <div className="max-w-6xl p-6 flex flex-col items-center">
                <div className="mt-6 flex flex-wrap justify-center gap-5 w-full"> {/*set width to 100%*/}
                    {rates.map(([code, rate]) => {
                            const r = Number(rate);
                            return <Rate key={code} code={code} rate={r} base={base} updated={updated} />;
                        })}
                </div>
            </div>

        </div>
    );
}
