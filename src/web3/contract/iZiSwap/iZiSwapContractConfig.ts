import { ChainId } from "../../web3Constant";

export const LIQUIDITY_MANAGER_ADDRESS: TokenId2ContractAddress = {
    [ChainId.BSCTestnet]: '0x6bEae78975e561fDF27AaC6f09F714E69191DcfD', // 2022.05.10
    [ChainId.BSC]: '0x93C22Fbeff4448F2fb6e432579b0638838Ff9581', // 2022.05.10
    [ChainId.AuroraTestnet]: '0xEa0f268a066dF3329283b0AF7560e19B89c35511',
    [ChainId.Aurora]: '0xd0aD5f8C156ac94cCde1aF223E8614BF9D4c284f',
    [ChainId.ETC]: '0x1D377311b342633A970e71a787C50F83858BFC1B', // 2022.08.11
};

export const LIMIT_ORDER_MANAGER_ADDRESSES: TokenId2ContractAddress = {
    [ChainId.BSCTestnet]: '0x310Cf0521f40e7e4C93DA9425D84f2238fE21386', // 2022.05.10
    [ChainId.BSC]: '0x9Bf8399c9f5b777cbA2052F83E213ff59e51612B', // 2022.05.10
    [ChainId.AuroraTestnet]: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6',
    [ChainId.Aurora]: '0x31321282F8eAAB94E9c1eb7450f2d20760afeA59',
    [ChainId.ETC]: '0x032b241De86a8660f1Ae0691a4760B426EA246d7', // 2022.08.11
};

export const SWAP_ADDRESS: TokenId2ContractAddress = {
    [ChainId.BSCTestnet]: '0xbf3c71a3ce55815138504727AD0f1F3B7101bd70', // 2022.05.10
    [ChainId.BSC]: '0xBd3bd95529e0784aD973FD14928eEDF3678cfad8', // 2022.05.10
    [ChainId.AuroraTestnet]: '0x77132b63429718Db2B6ad8D942eE13A198f6Ab49',
    [ChainId.Aurora]: '0xfd5CBd991740C407E68899A62813d0247B6feB7b',
    [ChainId.ETC]: '0xe6805638db944eA605e774e72c6F0D15Fb6a1347', // 2022.08.11
};

export const QUOTER_ADDRESS: TokenId2ContractAddress = {
    [ChainId.BSCTestnet]: '0xF5857d1A015f7dAFd8f59BD59Ff7bbc686b02ce9', // 2022.06.06
    [ChainId.BSC]: '0x64b005eD986ed5D6aeD7125F49e61083c46b8e02', // 2022.06.06
    [ChainId.AuroraTestnet]: '0xa9754f0D9055d14EB0D2d196E4C51d8B2Ee6f4d3',
    [ChainId.Aurora]: '0x302B89D662E56DA7f664505a2395c27B3AE007e2',
    [ChainId.ETC]: '0xe4A0b241D8345d86FB140D40c87C5fbDd685B9dd', // 2022.08.11
};

export const QUOTER_ADDRESS_LIMIT: TokenId2ContractAddress = {
    [ChainId.BSCTestnet]: null,
    [ChainId.BSC]: '0xF3409631f87B0bC9bD6e9D9FD26D31BaDAA21880', // 2022.08.11
    [ChainId.AuroraTestnet]: null,
    [ChainId.Aurora]: null,
    [ChainId.ETC]: null,
};

export const BOX_ADDRESS: TokenId2ContractAddress = {
    [ChainId.BSCTestnet]: '0x904C130a8bf933f5c11Ea58CAA306f2296db22af', // 2022.07.25
    [ChainId.BSC]: '0xA7B45d3546b736B04cf80aa5Dd10d46c38E83068',
    [ChainId.ETC]: '0x3a2932a74e511C9Dc4CaD60e06eE6D3690Ce2492', // 2022.08.11
};
