import axios from "axios";

export const blocks = axios.create({
    baseURL: 'https://api.notion.com/v1/blocks/'
})
