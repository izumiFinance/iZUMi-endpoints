import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';
import mem from 'mem/dist';

export type ResponseTokenListPrice = Record<string, number>;

export type RequestTokenPrice = {
    chain_id: number;

    // choose one
    token_addr?: string;
    symbol?: string;
};

export const getTokenPriceBySymbol: RequestNormal<string | undefined, number> = async (symbol) => {
    return axios.get(`${ENDPOINTS.priceInfo.price_info}${symbol}/`);
};

export const getTokenPriceBySymbolList: RequestNormal<string[], ResponseTokenListPrice> = (symbolList) => {
    const listParams = new URLSearchParams();
    symbolList.forEach((s) => listParams.append('t', s));
    return axios.get(ENDPOINTS.priceInfo.price_info, { params: listParams });
};

export const getTokenPrice: RequestNormal<RequestTokenPrice, ResponseTokenListPrice> = async (params) => {
    return axios.get(ENDPOINTS.priceInfo.price, { params });
};

export const memGetTokenPrice = mem(getTokenPrice, {
    maxAge: 5 * 60 * 1000,
    cacheKey: (arguments_) => `tokenPrice-${JSON.stringify(arguments_)}`,
});

export const memGetTokenPriceBySymbol = mem(getTokenPriceBySymbol, {
    maxAge: 5 * 60 * 1000,
    cacheKey: (arguments_) => `tokenPriceS-${arguments_}`,
});
