const prodTokenListUrl = [
    'https://raw.githubusercontent.com/izumiFinance/izumi-tokenList/main/build/tokenList.json',
    'https://tokenlist.izumi.finance/tokenList.json',
];

const devTokenListUrl = [
    'https://raw.githubusercontent.com/izumiFinance/izumi-tokenList/main/build/tokenListDev.json',
    'https://tokenlist.izumi.finance/tokenListDev.json',
];

export const tokenListUrl = import.meta.env.VITE_ENV === 'production' ? prodTokenListUrl : devTokenListUrl;
