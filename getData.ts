"use server";

const API_KEY = process.env.EXCHANGE_API_KEY;

export async function getData(base: string = "USD") {
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
        throw new Error(`API call failed :${res.status} ${res.statusText}`);
    }

    return res.json();
}