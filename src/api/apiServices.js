import axios from "axios";

export const getDates = () => {
    return axios.get("https://dpg.gg/test/calendar.json");
}