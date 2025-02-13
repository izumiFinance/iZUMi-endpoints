import { Contract } from 'ethers';
import izumiPoolABI from '../../abi/iZiSwap/Pool.json';
import { getContract } from '../contractFactory';

export const getPoolContractByAddress = (provider: any, contractAddress: string): Contract | undefined => {
    if (!contractAddress || !provider) {
        return undefined;
    }

    return getContract<Contract>(izumiPoolABI, contractAddress, provider);
};
