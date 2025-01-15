import Web3 from 'web3';

export const getContract = <T>(abi: any, address: string, web3: Web3): T => {
    return new web3.eth.Contract(abi as any, address, {}) as unknown as T;
};

export const contractKey = (chainId?: number, contractAddr?: string) => `${chainId}-${contractAddr?.toLowerCase()}`;

const ContractContext: Record<string, any> = {};

export const getContractFromContext = (chainId: number, contractAddr: string): any | undefined => {
    const key = contractKey(chainId, contractAddr);
    if (key in ContractContext) {
        return ContractContext[key];
    }
    return undefined;
}
