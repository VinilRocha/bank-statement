import ReceivedIcon from '../assets/received-icon.svg';
import ReversedIcon from '../assets/reversed-icon.svg';
import ScheduledIcon from '../assets/scheduled-icon.svg';

interface Transaction {
  status: 'COMPLETED' | 'REFUNDED' | 'PENDING';
  source: 'PAYMENT' | 'TRANSFER';
  entry: 'DEBIT' | 'CREDIT';
}

const sourceTypes = {
  PAYMENT: 'Pagamento',
  TRANSFER: 'Transferência',
};

export function handleTransaction({ status, source, entry }: Transaction) {
  switch (status) {
    case 'COMPLETED':
      if (source === 'PAYMENT') {
        if (entry === 'DEBIT') {
          return `${sourceTypes[source]} Realizado`;
        }
        return `${sourceTypes[source]} Recebido`;
      }

      if (entry === 'DEBIT') {
        return `${sourceTypes[source]} Realizada`;
      }
      return `${sourceTypes[source]} Recebida`;

    case 'REFUNDED':
      if (source === 'PAYMENT') {
        return `${sourceTypes[source]} Estornado`;
      }
      return `${sourceTypes[source]} Estornada`;

    case 'PENDING':
      if (source === 'PAYMENT') {
        return `${sourceTypes[source]} Agendado`;
      }
      return `${sourceTypes[source]} Agendada`;

    default:
      return '';
  }
}

export function handleTransactionIcon(status: string) {
  switch (status) {
    case 'COMPLETED':
      return ReceivedIcon;
    case 'REFUNDED':
      return ReversedIcon;
    case 'PENDING':
      return ScheduledIcon;
    default:
      return '';
  }
}

export function handleTransactionValueType(status: string, entry: string) {
  if (status === 'REFUNDED') {
    return 'refunded';
  }
  if (entry === 'DEBIT') {
    return 'debit';
  }
  return 'credit';
}
