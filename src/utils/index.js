export const paginateItems = (items, itemsPerPage = 12) => {
  let paginatedItems = []
  while (items.length > 0) {
    paginatedItems.push(items.splice(0, itemsPerPage))
  }
  return paginatedItems
}