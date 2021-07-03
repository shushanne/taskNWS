import axios from "axios";

let url = "https://api.thecatapi.com/v1"

let Api = axios.create({
    baseURL: url,
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export default Api;