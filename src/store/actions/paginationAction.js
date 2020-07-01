export const getPager = (totalItems, currentPage, pageSize) => (dispatch) => {
    const totalPages = Math.ceil(totalItems / pageSize)
    const startIndex = (currentPage - 1) * pageSize
    const startPage = totalPages <=3 || currentPage <= 2 ? 1 : currentPage + 1 >= totalPages ? totalPages - 2 : currentPage - 1
    const endPage = totalPages <=3 ? totalPages : currentPage <= 2 ? 3 : currentPage + 1 >= totalPages ? totalPages : currentPage + 1
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)
    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)
    dispatch({
      type: 'CREATE_PAGER',
      payload: {
        totalItems: totalItems,
        currentPage: currentPage || 1,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
      },
    });
  };