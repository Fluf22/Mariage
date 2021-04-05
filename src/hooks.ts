import { useState, useMemo, useEffect } from "react";

export const usePagination = (fullData: any[], pageSize: number = 10): { isPaginationReady: boolean, paginatedData: any[], pageCount: number, pageIndex: number, onPaginationChange: (page: number) => void } => {
	const [pageIndex, setPageIndex] = useState<number>(1);

	const paginatedData = useMemo(() => {
		const startIndex = pageIndex * pageSize - pageSize;
		return fullData.slice(startIndex, startIndex + pageSize);
	}, [fullData, pageIndex, pageSize]);

	const pageCount = useMemo(() => {
		if (pageSize > 0) {
			return Math.trunc(fullData.length / pageSize) + (fullData.length % pageSize > 0 ? 1 : 0);
		} else {
			return 1;
		}
	}, [fullData, pageSize]);

	if (paginatedData.length === 0) {
		return {
			isPaginationReady: false,
			paginatedData,
			pageCount: 0,
			pageIndex: 1,
			onPaginationChange: setPageIndex
		};
	} else {
		return {
			isPaginationReady: true,
			paginatedData,
			pageCount,
			pageIndex,
			onPaginationChange: setPageIndex
		};
	}
};

export const useEventListener = (eventName: string, handler: EventListenerOrEventListenerObject, passive = false) => {
	useEffect(() => {
		window.addEventListener(eventName, handler, passive);

		return () => {
			window.removeEventListener(eventName, handler);
		};
	});
};
