import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export const maxNameLength = 128;
export const maxSymbolLength = 11;
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

export type RequestCoinList = {
    chain_id?: number;
    sender?: string;
    page?: number; // start from 1
    page_size?: number;
    contract_address?: string;
    addr_list?: string;
};

export type ResponseCoinList = {
    chain_id: string;
    contract_address: string;
    description: string;
    image: string;
    name: string;
    sender: string;
    symbol: string;
    decimal: string;
};

export const getCoinList: RequestNormal<RequestCoinList, ResponseCoinList[]> = async (params) => {
    return axios.get(ENDPOINTS.pump.get, { params });
};

export const checkCoinStatus: RequestNormal<null, number> = async (params) => {
    //The return value indicates how many seconds it will take to send.
    return axios.get(ENDPOINTS.pump.check, { params });
};
