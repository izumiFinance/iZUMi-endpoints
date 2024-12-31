import axios from 'axios';

export type BtcFunInfo = {
    id: string;
    token: string;
    pool: string;
    name: string;
    symbol: string;
    decimals: number;
    image: string;
};

export type ResponseBtcFunInfo = {
    data: {
        data: BtcFunInfo;
    };
};

export const getBtcFunInfo = async (symbol: string): Promise<ResponseBtcFunInfo> => {
    return axios.get('https://api.btc.fun/api/v1/token/info?symbol=' + symbol);
};
