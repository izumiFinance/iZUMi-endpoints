import { useSetState } from 'ahooks';
import { MultiPageData, MultiPageSetting } from '../types/multiPage';

export interface useMultiPageReturn<T> {
    pageSetting: MultiPageSetting;
    pageData: MultiPageData<T>;

    setCurrentPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    setPageData: (patch: Partial<MultiPageData<T>> | ((prevState: MultiPageData<T>) => Partial<MultiPageData<T>>)) => void;
}

export const useMultiPage = <T>(initPageSize: number = 10) : useMultiPageReturn<T> => {
    // split control and data
    const [pageSetting, setPageSetting] = useSetState<MultiPageSetting>({
        page: 1,
        pageSize: initPageSize,
    });
    const [pageData, setPageData] = useSetState<MultiPageData<T>>({
        data: [],
        totalPage: 1,
        loading: false,
    });

    return {
        pageSetting,
        pageData,
        setCurrentPage: (page: number) => setPageSetting({ page }),
        setPageSize: (pageSize: number) => setPageSetting({ pageSize }),
        setPageData
    }
}
