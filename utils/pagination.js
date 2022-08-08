exports.getPagination = (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;

  return {
    offset,
    itemPerPage: limit,
  };
};

exports.getPagingData = (totalItems = 0, page = 1, limit = 10) => {
  const totalPages = totalItems ? Math.ceil(totalItems / limit) : 1;

  return {
    totalItems,
    currentPage: +page,
    previousPage: page > 1 ? page - 1 : page,
    nextPage: +page !== totalPages ? +page + 1 : page,
    totalPages,
  };
};
