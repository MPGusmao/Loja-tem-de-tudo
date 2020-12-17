import axios from 'axios'
import {requestInterceptor, responseSuccessInterceptor, responseErrorInterceptor} from '@shared/js/axios/interceptor.js';

const getData = (config) => {
    const result = axios(requestInterceptor(config)).then((response) => {
        return responseSuccessInterceptor(response);
    }).catch(function (error) {
        return responseErrorInterceptor(error);
    });
    return result    
};
const sendData = (config) => {
    const result = axios(requestInterceptor(config)).then((response) => {
        return responseSuccessInterceptor(response);
    }).catch(function (error) {
        return responseErrorInterceptor(error);
    });
    return result    
};
export {
    getData,
    sendData
}