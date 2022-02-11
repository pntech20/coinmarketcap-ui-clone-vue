import axios from "../plugins/axios";

export default {
    signin(data) {
        return axios.post("/api/signin", data);
    },
    signup(data) {
        return axios.post("/api/signup", data);
    },
    signout() {
        return axios.post("/api/signout");
    },
    me() {
        return axios.get("/users");
    },
    getUsers(){
        return axios.get("/users");
    },


    //File upload
    upload_home_document(home_id, name, file) {
        let formdata = new FormData();
        formdata.append("file", file);
        formdata.append("data", JSON.stringify({ home_id: home_id, name: name }));
        return axios.post("/api/homes/upload-document", formdata, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    },
}