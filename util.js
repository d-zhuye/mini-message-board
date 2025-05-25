export function formatMessages(messages) {
  const formattedMessages = messages.map((message) => {
    const hours = message.added.getHours().toString().padStart(2, "0");
    const minutes = message.added.getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;
    return {
      ...message,
      added: time,
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
