import MessagingResponse from "twilio/lib/twiml/MessagingResponse";

export default (whatsappResponse: MessagingResponse) => (messages: string[], media?: string) => {
  messages.forEach((message) => {
    if (!media) {
      whatsappResponse.message(message);
    } else {
      const msg = whatsappResponse.message(message);
      msg.media(media);
      // msg.body(message);
    }
  });
};
