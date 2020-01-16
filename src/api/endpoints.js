import axios from 'axios';

// const applicationUrl = process.env.APPLICATION_API;

export const getAllApplication = () => {
    // console.log(process.env)
    return axios.get('https://portalfast.ite.mypepsico.com/rest/notificationadmin/api/v1/getAllApplication');
}