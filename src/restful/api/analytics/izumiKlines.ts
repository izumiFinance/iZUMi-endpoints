import axios from 'axios';
import { ENDPOINTS } from '../../apiEndpoints';
import { RequestNormalGeneric } from '../../apiUtils';

export enum  iZiSwapKLinesRecordEnum {
    MINUTE_1 = '1m',
    MINUTE_15 = '15m',
    HOUR_1 = '1h',
    HOUR_4 = '4h',
    DAY = 'D',
    WEEK = 'W',
    MONTH = 'M',
}

export type RequestIziSwapKLinesRecord = {
    identity: string; // pool addr
    interval: iZiSwapKLinesRecordEnum;
    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;
    time?: string; // time for certain value

    // time or -time, choices: time
    order_by?: string;
    page?: number; // start from 1
    page_size?: number; // default 10
};

export type ResponseIziSwapKLinesRecord = {
    timestamp: number; // begin time of period

    open: string;
    high: string;
    low: string;
    close: string;

    volume: string; // trade volume usd value of period
};

export const getIziSwapKLinesRecord: RequestNormalGeneric<RequestIziSwapKLinesRecord, ResponseIziSwapKLinesRecord[]> = async (params) => {
    return axios.get(ENDPOINTS.izumiSwap.klines, { params });
};
