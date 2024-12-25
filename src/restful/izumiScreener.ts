import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export enum PoolsInfoTypeEnum {
    IZI_SWAP_POOL = 10,
}
export type RequestCoinList = {
    chain_id?: number;
    type: PoolsInfoTypeEnum;
    contract_addr?: string;
    order_by?: string;
    page?: number; // start from 1
    page_size?: number;
};

export type ResponsePoolsInfo = {
    fee: number;
    tokenX: string;
    tokenY: string;
    txHash: string;
    txnNum: number;
    volume: number;
    address: string;
    chainId: number;
    liquidity: number;
    timestamp: number;
    latestPrice: number;
    latestDealTime: number;
    initialPrice: number;
    tokenX_address: string;
    tokenY_address: string;
    dealBlockNumber: number;
    tokenX_decimals: number;
    tokenY_decimals: number;
    tokenX_total_supply: number;
    tokenY_total_supply: number;
    mode: poolChartIntervalEnum;
    validRange: number;
    version: string;
    tokenX_price: number;
    tokenY_price: number;
    HOUR_8?: number;
    DAY?: number;
    MINUTE_5?: number;
    MINUTE_15?: number;
    HOUR_4?: number;
    HOUR_1?: number;
    volume_1H?: number;
    txnNum_24H?: number;
    volume_24H?: number;
    tokenX_price_change_rate?: {
        DAY?: number;
        HOUR_1?: number;
        HOUR_4?: number;
        HOUR_8?: number;
        MINUTE_1?: number;
        MINUTE_5?: number;
        MINUTE_15?: number;
        MONTH?: 0;
        WEEK?: number;
    };
    tokenY_price_change_rate?: {
        DAY?: number;
        HOUR_1?: number;
        HOUR_4?: number;
        HOUR_8?: number;
        MINUTE_1?: number;
        MINUTE_5?: number;
        MINUTE_15?: number;
        MONTH?: 0;
        WEEK?: number;
    };
};
export const getPoolsInfo: RequestNormal<RequestCoinList, ResponsePoolsInfo[]> = async (params) => {
    return axios.get(ENDPOINTS.pool.poolInfo, { params });
};

export enum poolChartDataEnum {
    BASE_USD = 0,
    QUOTE_USD = 1,
    BASE_QUOTE = 2,
}

export enum poolChartIntervalEnum {
    MINUTE_1 = 1,
    MINUTE_5 = 5,
    MINUTE_15 = 15,
    HOUR_1 = 60,
    HOUR_4 = 240,
    HOUR_8 = 480,
    DAY = 1440,
    WEEK = 10080,
    MONTH = 43200,
}
export type RequestPoolChartData = {
    chain_id?: number;
    identity: string;
    type: poolChartDataEnum;
    interval: poolChartIntervalEnum;
};

export type ResponsePoolChartData = {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    status: poolChartDataEnum;
};

export const getPoolChartData: RequestNormal<RequestPoolChartData, ResponsePoolChartData[]> = async (params) => {
    return axios.get(ENDPOINTS.pool.klines, { params });
};
