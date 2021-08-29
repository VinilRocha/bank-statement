import { useState } from 'react';
import { useStatement } from '../../hooks/useStatement';
import { Button } from './styles';

export function Tabs() {
  const buttons = [
    {
      value: 'all',
      label: 'Tudo',
      active: true,
    },
    {
      value: 'CREDIT',
      label: 'Entrada',
      active: false,
    },
    {
      value: 'DEBIT',
      label: 'Saída',
      active: false,
    },
    {
      value: 'scheduled',
      label: 'Futuro',
      active: false,
    },
  ];

  const [filterButtons, setFilterButtons] = useState(buttons);
  const { getFilteredStatements } = useStatement();

  function handleButtonClick(value: string) {
    const currentButton = value;

    const newButtons = filterButtons.map(button =>
      button.value === currentButton
        ? {
            ...button,
            active: true,
          }
        : {
            ...button,
            active: false,
          },
    );

    setFilterButtons(newButtons);
    getFilteredStatements(currentButton);
  }

  return (
    <div>
      {filterButtons.map(filter => (
        <Button
          type="button"
          key={filter.value}
          value={filter.value}
          onClick={e =>
            handleButtonClick((e.target as HTMLButtonElement).value)
          }
          className={`${filter.active && 'active'}`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
