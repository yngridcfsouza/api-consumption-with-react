class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(response);
  }
}

export default HttpClient;
