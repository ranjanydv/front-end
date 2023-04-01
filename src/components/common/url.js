export default {
    base_api:
        window.location.hostname === 'localhost'
            ? 'http://localhost:5000/api/v1/'
            : '/api/v1/',

};