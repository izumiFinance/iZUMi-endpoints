import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export interface FarmStatInfo {
    tvl: number;
    apr: number;
}

export const getFarmTVL: RequestNormal<unknown, { tvl: number }> = async () => {
    return axios.get(ENDPOINTS.farm.tvl);
};

export const getFarmAPR: RequestNormal<unknown, { apr: number }> = async () => {
    return axios.get(ENDPOINTS.farm.apr);
};

export const getFarmStatInfo = (): Promise<FarmStatInfo> => {
    const farmStatInfo: FarmStatInfo = { tvl: 17000000, apr: 5 };

    const tvlPromise = getFarmTVL(null).then((r) => (farmStatInfo.tvl = r.data.data.tvl));
    const aprPromise = getFarmAPR(null).then((r) => (farmStatInfo.apr = r.data.data.apr));

    return Promise.all([tvlPromise, aprPromise]).then(() => farmStatInfo);
};

export interface RequestAllFarmStat {
    type?: number | string;
    status?: string;
    chainId?: number | string;
    protocol?: number | string;
}
export interface ResponseAllFarmData {
    data: ResponseAllFarmStat[];
}
export interface ResponseAllFarmStat {
    pool_address: string;
    chain_id: number;
    tokenX_symbol: string;
    tokenY_symbol: string;
    fee: number;
    status: string;
    type: number;
    protocol: number;
    priority: number;
    tags: [];
    apr: [];
}

export const getAllFarmStat: RequestNormal<RequestAllFarmStat, ResponseAllFarmData> = async (params: RequestAllFarmStat) => {
    return axios.get(ENDPOINTS.farm.stat, { params });
};
