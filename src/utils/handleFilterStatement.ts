import { Statement } from '../hooks/useStatement';

function handleFilter(
  filterTerm: string,
  item: {
    scheduled: boolean;
    entry: string;
    actor: string;
  },
) {
  if (filterTerm === 'scheduled') {
    return item.scheduled === true;
  }

  if (filterTerm === 'CREDIT' || filterTerm === 'DEBIT') {
    return item.entry === filterTerm;
  }

  return item.actor.toLowerCase().includes(filterTerm.toLowerCase());
}

export function handleStatementFilter(
  arrayToFilter: Statement[],
  newArray: Statement[],
  filterTerm: string,
) {
  arrayToFilter.forEach(({ amountTotal, date, items }) => {
    const filteredTransactions = items.filter(item =>
      handleFilter(filterTerm, item),
    );

    if (filteredTransactions.length > 0) {
      const filteredObject = {
        amountTotal,
        date,
        items: filteredTransactions,
      };

      newArray.push(filteredObject);
    }
  });
}
