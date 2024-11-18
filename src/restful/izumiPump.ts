import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export const maxNameLength = 128;
export const maxSymbolLength = 64;
export const maxDescriptionLength = 512;
export const maxImageSize = 10 * 1024 * 1024;

export type RequestCreateCoin = {
    name: string; //max 128
    chainId: number;
    sender: string;
    symbol: string; //max 64
    description: string; //max 512
    image: FormData; //max 10MB
};

export type ResponseCreateCoin = {
    image: string;
};

export const postCreateCoin: RequestNormal<FormData, ResponseCreateCoin> = async (formData) => {
    return axios.post(ENDPOINTS.pump.create, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
