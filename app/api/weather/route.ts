
import { NextResponse } from "next/server";
import { fetchWeather } from "@/actions/weather/fetch-weather.action";

export async function GET(request: Request) {
  const apiKey = process.env.GOOGLE_WEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GOOGLE_WEATHER_API_KEY env variable" },
      { status: 500 }
    );
  }
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const units = searchParams.get("unitsSystem") ?? "METRIC";

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "Provide lat and lng query params" },
      { status: 400 }
    );
  }

  try {
    const data = await fetchWeather({ lat, lng, units, apiKey });
    return NextResponse.json({ ok: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Weather fetch failed" },
      { status: 500 }
    );
  }
}
