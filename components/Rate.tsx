import type { RateTypes } from "../types";

export default function Rate({ code, rate }: RateTypes) {
    return (
        <div className="bg-green-200 rounded-xl p-4 m-2 w-96 text-center">
            <h4 className="font-bold text-3xl">{code}</h4>
            <p className="text-2xl">{rate}</p>
        </div>
    );
}
