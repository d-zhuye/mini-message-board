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
