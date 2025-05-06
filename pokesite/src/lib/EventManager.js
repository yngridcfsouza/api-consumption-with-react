export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    /* caso o array esteja vazio a aplicação quebra por tentar acessar o .push */
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }
}

const toastEventManager = new EventManager();

toastEventManager.on('addtoast', () => {});
