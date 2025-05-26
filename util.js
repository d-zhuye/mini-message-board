import { format } from "date-fns";

export function formatMessages(messages) {
  const formattedMessages = messages.map((message) => {
    // format to May 25, 2025 pattern for readability
    const date = format(new Date(message.created_at), "PPP");
    return {
      ...message,
      created_at: date,
    };
  });

  return formattedMessages;
}

export async function getAllCountries() {
  const allCountries = await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) =>
      data
        .map((country) => {
          return country.name.common;
        })
        .sort()
    );

  return allCountries;
}
