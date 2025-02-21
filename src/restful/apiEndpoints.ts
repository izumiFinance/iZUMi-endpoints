interface APIConfig {
    protocol: string;
    root: string;
    game_root: string;
    subapi: string;
    screener: string;
    prefix: string;
    version: string;
}

const api_host_config: Record<string, string> = {
    development: 'alpha-api.izumi.finance',
    production: 'api.izumi.finance',
    local: 'localhost:8000',
};

const game_api_host_config: Record<string, string> = {
    development: 'alpha-api.izumi.finance',
    production: 'data.izumi.finance',
    local: 'localhost:8000',
};

const sub_api_host_config: Record<string, string> = {
    development: 'alpha-subapi.izumi.finance',
    production: 'subapi.izumi.finance',
    local: 'localhost:8000',
};

const screener_api_host_config: Record<string, string> = {
    development: 'screener-api.izumi.finance',
    production: 'screener-api.izumi.finance',
    local: 'localhost:8000',
};

const env = import.meta.env?.VITE_ENDPOINT ?? import.meta.env.VITE_ENV;

const config: APIConfig = {
    protocol: env === 'local' ? 'http://' : 'https://',
    root: api_host_config[env as string],
    game_root: game_api_host_config[env as string],
    subapi: sub_api_host_config[env as string],
    screener: screener_api_host_config[env as string],
    prefix: 'api',
    version: 'v1',
};

const productionEndpoint = `https://${api_host_config['production']}/${config.prefix}/${config.version}`;
export const parentEndpoint = `${config.protocol}${config.root}/${config.prefix}/${config.version}`;
export const gameParentEndpoint = `${config.protocol}${config.game_root}/${config.prefix}/${config.version}`;
export const subParentEndpoint = `${config.protocol}${config.subapi}/${config.prefix}/${config.version}`;
export const screenerParentEndpoint = `${config.protocol}${config.screener}/${config.prefix}/${config.version}`;

export const ENDPOINTS = {
    farm: {
        stat: `${parentEndpoint}/farm/dashboard/`,
        tvl: `${parentEndpoint}/farm/tvl/`,
        apr: `${parentEndpoint}/farm/stat/apr/`,
        tool: `${parentEndpoint}/farm/tool/`,
        history: `${parentEndpoint}/farm/farm_history/`,
    },
    izumiSwap: {
        trans_record: `${parentEndpoint}/izi_swap/trans_record/`,
        trans_record_aggregate: `${parentEndpoint}/izi_swap/trans_record_aggregate/`,
        meta_record: `${parentEndpoint}/izi_swap/meta_record/`,
        summary_record: `${parentEndpoint}/izi_swap/summary_record/`,
        hour_record: `${parentEndpoint}/izi_swap/hour_record/`,
        liquidity_record: `${parentEndpoint}/izi_swap/liquidity_record/`,
        klines: `${parentEndpoint}/izi_swap/klines/`,
        meta_record_for_kline: `${parentEndpoint}/izi_swap/meta_record_for_kline/`,
        order_record: `${parentEndpoint}/izi_swap/order_record/`,
    },
    priceInfo: {
        price_info: `${productionEndpoint}/token_info/price_info/`,
        price: `${parentEndpoint}/token_info/price/`,
    },
    game: {
        events: `${gameParentEndpoint}/game/events/`,
        user: `${gameParentEndpoint}/game/user/`,
        winner: `${gameParentEndpoint}/game/winner/`,
        rules: `${gameParentEndpoint}/game/rules/`,
        join: `${gameParentEndpoint}/game/participate/`,
        history: `${gameParentEndpoint}/game/history/`,
        skale: `${gameParentEndpoint}/skale/claim/`,
    },
    external: {
        cmc_amm_dex: `${parentEndpoint}/izi_swap/cmc_amm_dex/`,
    },
    tokenInfo: {
        details: `${parentEndpoint}/token_info/details/`,
    },
    liquidity: {
        apr: `${gameParentEndpoint}/monitor/apr/`,
    },
    iPoints: {
        points: `${gameParentEndpoint}/ipoints/info/`,
        lp_points: `${gameParentEndpoint}/ipoints/lp_ipoints/`,
        bob_points: `${subParentEndpoint}/bob_distribution/spice/`,
        swap_points: `${subParentEndpoint}/aggregate/trade_to_earn/`,
    },
    cross: {
        order_record: `${subParentEndpoint}/cross_chain/cross_chain_record/`,
    },
    airdrop: {
        merkle: `${subParentEndpoint}/sub_task/merkle/`,
    },
    dataStatus: {
        status: `${parentEndpoint}/metrics/swap/`,
    },
    pump: {
        create: `${subParentEndpoint}/extra/upload_pump_token/`,
        get: `${subParentEndpoint}/extra/get_pump_token_list/`,
        check: `${subParentEndpoint}/extra/check_pump_token_api_status/`,
    },
    pool: {
        poolInfo: `${screenerParentEndpoint}/izumi_swap/meta_record/`,
        klines: `${screenerParentEndpoint}/izumi_swap/klines/`,
        trans_record: `${screenerParentEndpoint}/izumi_swap/trans_record/`,
    },
};
