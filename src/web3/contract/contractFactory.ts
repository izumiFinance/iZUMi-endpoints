// import Web3 from 'web3';
import { Contract } from 'ethers';

export const getContract = <T>(abi: any, address: string, provider: any): T => {
    return new Contract(address, abi as any, provider) as unknown as T;
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
