export const paginateItems = (items, itemsPerPage = 10) => {
  let paginatedItems = []
  while (items.length > 0) {
    paginatedItems.push(items.splice(0, itemsPerPage))
  }
  return paginatedItems
}