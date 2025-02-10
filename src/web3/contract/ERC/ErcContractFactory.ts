// import Web3 from "web3";
import { Contract } from 'ethers';
import erc20ABI from '../../abi/ERC/ERC20.json';
// import { ERC20Contract } from "../../types/ERC/ERC20";
import { getContract } from "../contractFactory";

export const getERC20ContractByAddress = (provider: any, contractAddress: string): Contract | undefined => {
    if (!contractAddress || !provider) {
        return undefined;
    }

    return getContract<Contract>(erc20ABI, contractAddress, provider);
};
