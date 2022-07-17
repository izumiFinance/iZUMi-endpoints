import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormalGeneric } from './apiUtils';
import { ResponseBasicIziSwapPoolRecord } from './izumiSwapBase';

export enum SummaryRecordTypeEnum {
    // ResponseIziSwapSummaryRecord
    IZI_POOL_LATEST = 0,
    IZI_POOL_DAY_ARCHIVE = 1,

    // ResponseIziSwapPoolLiquiditySnapshotRecord
    IZI_POOL_LIQ_SNAPSHOT = 2,

    // ResponseIziSwapSummaryNormalRecord
    IZI_POOL_OF_CHAIN_LATEST = 3,
    IZI_POOL_OF_CHAIN_DAY_ARCHIVE = 4,

    // ResponseIziSwapTokenSummaryRecord
    IZI_POOL_TOKEN_LATEST = 7,
    IZI_POOL_TOKEN_DAY_ARCHIVE = 8,
}

export type RequestIziSwapSummaryRecord = {
    chain_id?: number;
    type?: SummaryRecordTypeEnum;
    contract_addr?: string;
    addr_list?: string; // join with comma
    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;

    order_by?: string; // time or -time
    page?: number; // start from 1
    page_size?: number;
};

export type ResponseIziSwapPoolSummaryRecord = {
    chainId: number;
    fee: number;
    address: string;
    tokenX: string;
    tokenY: string;
    tokenX_address: string;
    tokenY_address: string;
    timestamp: number;

    tvl: number;
    tvlX: number;
    tvlY: number;
    amountX: number;
    amountY: number;

    volDay: number;
    volWeek: number;
    feesDay: number;
    feesWeek: number;

    volX_day: number;
    volY_day: number;
    volX_week: number;
    volY_week: number;

    feesX_day: number;
    feesY_day: number;
    feesX_week: number;
    feesY_week: number;
};

export type ResponseIziSwapTokenSummaryRecord = {
    address: string;
    symbol: string;
    chainId: number;

    tvl: number;
    tvlSelf: number;
    tvlRivals: number;
    amountSelf: number;

    price: number;
    priceDay: number;
    priceWeek: number;

    volDay: number;
    volWeek: number;
    feesDay: number;
    feesWeek: number;

    timestamp: number;
};

export type ResponseIziSwapPoolLiquiditySnapshotRecord = ResponseBasicIziSwapPoolRecord & {
    tickspace: number;
    tickL: number;
    tickR: number;
    currentTick: number;
    liquidity: number;
    snapshot: number[];
    liquidityDist: number[];

    tokenX_decimals: number;
    tokenY_decimals: number;
};

export type ResponseIziSwapSummaryNormalRecord = {
    chainId: number;

    tvl: number;

    volDay: number;
    volWeek: number;
    feesDay: number;
    feesWeek: number;

    timestamp: number;
};

export type ResponseGenericIziSwapPoolSummary =
    | ResponseIziSwapPoolSummaryRecord
    | ResponseIziSwapTokenSummaryRecord
    | ResponseIziSwapSummaryNormalRecord
    | ResponseIziSwapPoolLiquiditySnapshotRecord;

const LATEST_TYPE = new Set<SummaryRecordTypeEnum>([
    SummaryRecordTypeEnum.IZI_POOL_LATEST,
    SummaryRecordTypeEnum.IZI_POOL_LIQ_SNAPSHOT,
    SummaryRecordTypeEnum.IZI_POOL_OF_CHAIN_LATEST,
    SummaryRecordTypeEnum.IZI_POOL_TOKEN_LATEST,
]);

export const getIziSwapGenericSummaryRecord: RequestNormalGeneric<
    RequestIziSwapSummaryRecord,
    ResponseGenericIziSwapPoolSummary[]
> = async (params) => {
    if (params.type !== undefined && LATEST_TYPE.has(params.type) && (params.chain_id ?? 0) <= 0) {
        params.chain_id = undefined;
    }
    return axios.get(ENDPOINTS.izumiSwap.summary_record, { params });
};
