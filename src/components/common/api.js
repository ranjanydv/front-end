import axios from "axios";

import url from "./url.js";


export default {
    auth: {
        login: (data) => {
            return axios({
                method: 'POST',
                url: url.base_api + 'auth/login',
                data: data,
            })
                .then((res) => res.data)
                .catch((err) => err.response.data)
        },
        register: (data) => {
            return axios({
                method: 'POST',
                url: url.base_api + 'auth/register',
                data: data,
            })
                .then((res) => res.data)
                .catch((err) => err.response.data)
        },
    },
    users: {
        getAllUsers: async () => {
            return axios({
                method: 'GET',
                url: url.base_api + 'users',
            }).then((res) => {
                res.data
                // console.log(res.data.products)
            }).catch((err) => {
                console.log(err.response.data)
            })
        },
        getSingleUser: async (userId) => {
            return axios({
                method: 'GET',
                url: url.base_api + 'users/' + userId,
            }).then((res) => {
                res.data
            }).catch((err) => {
                console.error(err)
            })
        }
    },
    products: {
        getAllProducts: async () => {
            return axios({
                method: 'GET',
                url: url.base_api + 'products',
            }).then((res) => {
                res.data
                // console.log(res.data.products)
            }).catch((err) => {
                console.log(err.response.data)
            })
        },
        getAllProduct: async () => {
            return axios({
                method: 'GET',
                url: url.base_api + 'products',
            })
        },
        getSingleProduct: async (productId) => {
            console.log(productId)
            return axios({
                method: 'GET',
                url: url.base_api + 'products/' + productId,
                // url: `${url.base_api}products/${productId}`,
            })
        },
    },
    bid: {
        createBid: async () => {

        },
        addNew: async (data, type) => {
            return axios({
                method: 'POST',
                url: url.base_api + 'listing/create/' + type,
                data: data,
                headers: {
                    'x-auth-token': localStorage.getItem('apiToken'),
                },
            })
                .then((res) => res.data)
                .catch((err) => err.response.data)
        },
    }

}