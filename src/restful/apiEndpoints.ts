interface APIConfig {
    protocol: string;
    root: string;
    prefix: string;
    version: string;
}

const api_host_config: Record<string, string> = {
    development: 'alpha.izumi.finance',
    production: 'izumi.finance',
    local: 'localhost:8000',
};

const config: APIConfig = {
    protocol: process.env.REACT_APP_ENV === 'local' ? 'http://' : 'https://',
    root: api_host_config[process.env.REACT_APP_ENV as string],
    prefix: 'api',
    version: 'v1',
};

const productionEndpoint = `https://${api_host_config['production']}/${config.prefix}/${config.version}`;
const parentEndpoint = `${config.protocol}/${config.root}/${config.prefix}/${config.version}`;

export const ENDPOINTS = {
    bridge: {
        _: `${parentEndpoint}/bridge/`,
        transaction_records: `${parentEndpoint}/bridge/transaction_records/`,
        assets_status: `${parentEndpoint}/bridge/assets_status/`,
    },
    interface: {
        liquidity: `${parentEndpoint}/interface/liquidity/`,
        dependency: `${parentEndpoint}/interface/dependency/`,
        position: `${parentEndpoint}/interface/position/`,
    },
    service: {
        price: `${parentEndpoint}/blockchain/token/`,
    },
    farm: {
        stat: `${parentEndpoint}/farm/dashboard/`,
        tvl: `${parentEndpoint}/farm/stat/tvl/`,
        apr: `${parentEndpoint}/farm/stat/apr/`,
    },
    analytics: {
        uniswap_pool_data: `${parentEndpoint}/analytics/uniswap-v3/pool/`,
    },
    izumiSwap: {
        trans_record: `${parentEndpoint}/izi_swap/trans_record/`,
        trans_record_aggregate: `${parentEndpoint}/izi_swap/trans_record_aggregate/`,
        meta_record: `${parentEndpoint}/izi_swap/meta_record/`,
        summary_record: `${parentEndpoint}/izi_swap/summary_record/`,
        hour_record: `${parentEndpoint}/izi_swap/hour_record/`,
        liquidity_record: `${parentEndpoint}/izi_swap/liquidity_record/`,
    },
    priceInfo: {
        price_info: `${productionEndpoint}/token_info/price_info/`,
        price: `${parentEndpoint}/token_info/price/`,
    },
    game: {
        events: `${parentEndpoint}/game/events/`,
        user: `${parentEndpoint}/game/user/`,
        winner: `${parentEndpoint}/game/winner/`,
        rules: `${parentEndpoint}/game/rules/`,
        join: `${parentEndpoint}/game/participate/`,
    },

};
