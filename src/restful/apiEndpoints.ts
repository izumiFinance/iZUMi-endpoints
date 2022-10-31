interface APIConfig {
    protocol: string;
    root: string;
    game_root: string;
    prefix: string;
    version: string;
}

const api_host_config: Record<string, string> = {
    development: 'alpha.izumi.finance',
    production: 'izumi.finance',
    local: 'localhost:8000',
};

const game_api_host_config: Record<string, string> = {
    development: 'alpha.izumi.finance',
    production: 'data.izumi.finance',
    local: 'localhost:8000',
};

const config: APIConfig = {
    protocol: process.env.REACT_APP_ENV === 'local' ? 'http://' : 'https://',
    root: api_host_config[process.env.REACT_APP_ENV as string],
    game_root: game_api_host_config[process.env.REACT_APP_ENV as string],
    prefix: 'api',
    version: 'v1',
};

const productionEndpoint = `https://${api_host_config['production']}/${config.prefix}/${config.version}`;
export const parentEndpoint = `${config.protocol}${config.root}/${config.prefix}/${config.version}`;
export const gameParentEndpoint = `${config.protocol}${config.game_root}/${config.prefix}/${config.version}`;

export const ENDPOINTS = {
    farm: {
        stat: `${parentEndpoint}/farm/dashboard/`,
        tvl: `${parentEndpoint}/farm/tvl/`,
        apr: `${parentEndpoint}/farm/stat/apr/`,
        tool: `${parentEndpoint}/farm/tool/`,
    },
    izumiSwap: {
        trans_record: `${parentEndpoint}/izi_swap/trans_record/`,
        trans_record_aggregate: `${parentEndpoint}/izi_swap/trans_record_aggregate/`,
        meta_record: `${parentEndpoint}/izi_swap/meta_record/`,
        summary_record: `${parentEndpoint}/izi_swap/summary_record/`,
        hour_record: `${parentEndpoint}/izi_swap/hour_record/`,
        liquidity_record: `${parentEndpoint}/izi_swap/liquidity_record/`,
        klines: `${parentEndpoint}/izi_swap/klines/`,
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
    },
    external: {
        cmc_amm_dex: `${parentEndpoint}/izi_swap/cmc_amm_dex/`,
    },
    tokenInfo: {
        details: `${parentEndpoint}/token_info/details/`,
    },
};
