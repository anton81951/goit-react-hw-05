import { useEffect } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ErrorMessage = ({ message }) => {
    useEffect(() => {
        if (message) {
            iziToast.error({
                title: 'Error',
                message: message,
                position: 'topRight'
            });
        }
    }, [message]);

    return null;
};

export default ErrorMessage;