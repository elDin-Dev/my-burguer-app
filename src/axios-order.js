import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-e3d1d.firebaseio.com/',
});

export default instance;