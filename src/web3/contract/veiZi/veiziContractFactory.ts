import { Contract } from 'ethers';
import veiziABI from '../../abi/veiZi/VeiZi.json';
import { getContract, getContractFromContext } from '../contractFactory';
import { VEIZI_ADDRESS } from "./veiziContractConfig";

export const getVeiZiContract = (chainId: number, provider: any): Contract | undefined => {
    const contractAddress = VEIZI_ADDRESS[chainId];
    if (!contractAddress || !provider) {
        return undefined;
    }
    // const contract = getContractFromContext(chainId, contractAddress);
    // if (contract) {
    //     return contract as VeiZiContract;
    // }
    return getContract<Contract>(veiziABI, contractAddress, provider);
};
