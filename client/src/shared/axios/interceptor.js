import Vue from 'vue';
//import VueProgressBar from 'vue-progressbar'; //code from Bruxões, maybe some day we could use
/*
Vue.use(VueProgressBar, {
    color: '#69C5FF',
    failedColor: '#E71D32',
    thickness: '2px',
    transition: { speed: '0.2s', opacity: '0.6s', termination: 300 },
    autoRevert: true,
    location: 'top',
});
*/
const vue = new Vue();

const tokenIssues = ['TokenExpiredError', 'TokenInexistentError'];
const disclaimerIssues = ['DisclaimerNotFound'];
const accessIssues = ['NotAuthorized'];
const flagIssues = ['LoadingData'];
const authAPI = '/api/login';
const discRoute = '/#/userdisclaimer';
const accessRoute = '/';
const dataLoadRouter = '/#/dataload?uciName='

/*
const updateProgressBar = (status) => {
    vue.$Progress[status]();
};
*/
const requestInterceptor = (config) => {
    //updateProgressBar('start');
    return config;
};

const responseSuccessInterceptor = (response) => {
    //updateProgressBar('finish');
    return response.data;
};

const responseErrorInterceptor = (error) => {
    const response = error.response || error;
    if (response.data) {
        const { data } = response;

        // is it an authentication 'error'?
        if (data.error && tokenIssues.indexOf(data.error.name) > -1) {
            window.location = authAPI;
        }
        // is it an disclaimer 'error'?
        if (disclaimerIssues.indexOf(data.error.name) > -1) {
            window.location = discRoute;
        }
        // is it an access 'error'?
        if (accessIssues.indexOf(data.error.name) > -1) {
            window.location = accessRoute;
        }
        // is it an flag 'true' ?
        if (flagIssues.indexOf(data.error.name) > -1) {
            window.location = dataLoadRouter + data.error.uciName;
        }
    }

    //updateProgressBar('fail');
    return Promise.reject(response.data || response);
};

export {
    requestInterceptor,
    responseSuccessInterceptor,
    responseErrorInterceptor
};