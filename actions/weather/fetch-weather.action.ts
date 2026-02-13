// actions/weather/fetch-weather.action.ts

const GOOGLE_WEATHER_ENDPOINT =
  "https://weather.googleapis.com/v1/currentConditions:lookup";

export async function fetchWeather({ lat, lng, units, apiKey }: { lat: string; lng: string; units?: string; apiKey: string }) {
  if (!apiKey) {
    throw new Error("Missing GOOGLE_WEATHER_API_KEY");
  }

  const url = new URL(GOOGLE_WEATHER_ENDPOINT);
  url.searchParams.set("location.latitude", lat);
  url.searchParams.set("location.longitude", lng);
  url.searchParams.set("unitsSystem", units ?? "METRIC");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
}
