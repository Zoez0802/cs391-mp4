import type { RateTypes } from "../types";

export default function Rate({ code, rate, base, updated }: RateTypes) {
    return (
        <div className="bg-green-200 rounded-xl p-4 m-2 w-96 text-center">
            <h4 className="font-bold text-3xl">{code}</h4>

            <p className="text-2xl mt-1">
                1 {base} = {rate} {code}
            </p>


            <p className="text-xs text-gray-600 mt-2">Updated: {updated}</p>
        </div>
    );
}