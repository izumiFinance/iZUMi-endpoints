import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

export const getContract = <T>(abi: any, address: string, web3: Web3): T => {
    return new web3.eth.Contract(abi as unknown as AbiItem, address, {}) as unknown as T;
};
