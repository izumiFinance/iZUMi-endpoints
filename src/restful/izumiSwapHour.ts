import axios from 'axios';
import mem from 'mem/dist';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormalGeneric } from './apiUtils';
import { ResponseBasicIziSwapPoolRecord } from './izumiSwapBase';

export enum IzumiSwapHourRecordTypeEnum {
    IZI_SWAP_POOL_HOUR_ARCHIVE = 0,
    IZI_SWAP_TOKEN_HOUR_ARCHIVE = 1,
}

export enum iZiSwapHourRecordMajorEnum {
    IZI_SWAP_POOL_HOUR_DAY_START = 1,
}

export type RequestIziSwapHourRecord = {
    chain_id?: number;
    type?: IzumiSwapHourRecordTypeEnum;
    contract_addr?: string;
    major?: number; // 0 for normal hour 1 for day start hour

    addr_list?: string; // join with comma
    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;

    order_by?: string; // time or -time
    page?: number; // start from 1
    page_size?: number;
};

export type ResponseIziSwapPoolHourRecord = ResponseBasicIziSwapPoolRecord & {
    amountX: number;
    amountY: number;

    open: number;
    high: number;
    low: number;
    close: number;

    timestamp: number;
};

export type ResponseIziSwapTokenHourRecord = {
    chainId: number;
    address: string;
    symbol: string;

    amount: number;

    open: number;
    high: number;
    low: number;
    close: number;

    timestamp: number;
};

export type ResponseGenericIziSwapHourRecord = ResponseIziSwapPoolHourRecord | ResponseIziSwapTokenHourRecord;

export const getIziSwapHourRecord: RequestNormalGeneric<RequestIziSwapHourRecord, ResponseGenericIziSwapHourRecord[]> = async (params) => {
    if (params.chain_id && params.chain_id <= 0) {
        params.chain_id = undefined;
    }
    return axios.get(ENDPOINTS.izumiSwap.hour_record, { params });
};
