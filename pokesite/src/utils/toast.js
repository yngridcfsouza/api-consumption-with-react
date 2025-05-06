export default function toast({ type, text }) {
  const event = new CustomEvent('addtoast', {
    detail: {
      type,
      text,
    },
  });
  /* habilita o evento para ser disparado */
  document.dispatchEvent(event);
}

/* criando um evento customizado com a API CustomEvent,
  o detail é opcional e o nome do evento é case sensitive,
  desta forma estamos criando dentro do addtoast a propriedade 'detail' que acessa
  o type e text */
