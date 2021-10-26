import { containerLoading } from "./app.js";

export class IpApi {
    constructor() {
        this.apiKey = 'https://geo.ipify.org/api/v1?apiKey=at_h8aBtr1eiDy7rGu0HMo7yzB0GMhZy&ipAddress=';
    }

    async getApi(ip) {
        containerLoading.style.display = 'grid';
        const json = await fetch(`${this.apiKey}${ip}`);

        const jsonResposta = json.json()

        return jsonResposta
    }

    async getIPusario() {
        containerLoading.style.display = 'grid';
        const jsonIP = await fetch("https://api.ipify.org?format=json");

        const jsonIPResposta = jsonIP.json();

        return jsonIPResposta
    }
}