class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'Erro na requisição GET');
    }
    return data;
  }
}

export default HttpClient;
