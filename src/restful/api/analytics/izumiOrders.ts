import axios from 'axios';
import { ENDPOINTS } from '../../apiEndpoints';
import { RequestNormalGeneric } from '../../apiUtils';

export enum iZiSwapOrderTypeEnum {
    MARKET = 0,
    LIMIT_CANCEL = 1,
    LIMIT_FINISH = 2,
}

export type RequestIziSwapOrderRecord = {
    account_addr: string;   // account addr
    time_start?: string;    // 2022-02-01 00:00:00 like
    time_end?: string;

    // time or -time, choices: time
    order_by?: string;
    page?: number;      // start from 1
    page_size?: number; // default 10
};

export type ResponseIziSwapOrderRecord = {
    chain_id: number;
    contract_addr: string; // pool addr
    fee: number;
    account_addr: string;
    record_time: string;

    token_in: string;
    token_in_symbol: string;

    token_out: string;
    token_out_symbol: string;

    type: iZiSwapOrderTypeEnum;
    amount_in: string;          // initAmountIn for LIMIT_CANCEL or LIMIT_FINISH, inAmount for MARKET
    amount_in_remain: string;   // only for LIMIT_CANCEL
    amount_out: string;
    price: string;
};

export const getIziSwapOrderRecord: RequestNormalGeneric<RequestIziSwapOrderRecord, ResponseIziSwapOrderRecord[]> = async (params) => {
    return axios.get(ENDPOINTS.izumiSwap.order_record, { params });
};
