import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export type LiquidityApr = {
    leftRange: number;
    rightRange: number;
    apr: number;
    slideApr: number;
};
export type RequestLiquidityApr = {
    address: string;
    chainId: number;
};

export const getLiquidityApr: RequestNormal<RequestLiquidityApr, LiquidityApr[]> = async (params) => {
    return axios.get(ENDPOINTS.liquidity.apr, { params });
};
