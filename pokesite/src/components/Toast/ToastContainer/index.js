import { useEffect, useState } from "react";

import { Container } from "./styles";

import ToastMessage from "../ToastMessage";

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { type, text } = event.detail;
      const id = Math.random();

      setMessages((prevState) => [
        ...prevState,
        { id, type, text }
      ]);

      setTimeout(() => {
        setMessages((prevState) =>
        prevState.filter((message) => message.id !== id)
        );
      }, 1500);
    }

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  });

  return(
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}
    </Container>
  );
}
