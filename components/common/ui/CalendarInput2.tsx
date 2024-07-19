import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format, isValid, parse } from 'date-fns';
import { cn } from '@/src/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface CalendarInput2Props {
  value: Date | null;
  onChange: (date: Date | null) => void;
  onBlur: () => void;
  name: string;
}

const CalendarInput2: React.FC<CalendarInput2Props> = ({
  value,
  onChange,
  onBlur,
  name,
}) => {
  const [inputValue, setInputValue] = React.useState(() =>
    value && isValid(value) ? format(value, 'dd/MM/yyyy') : ''
  );

  React.useEffect(() => {
    if (value && isValid(value)) {
      const formattedDate = format(value, 'dd/MM/yyyy');
      setInputValue(formattedDate);
    } else {
      setInputValue('');
    }
  }, [value]);

  const handleDateChange = (date: Date | null) => {
    if (date && isValid(date)) {
      const formattedDate = format(date, 'dd/MM/yyyy');
      setInputValue(formattedDate);
      onChange(date);
    } else {
      setInputValue('');
      onChange(null);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !inputValue && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {inputValue || <span>Choisir une date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          className="w-full"
          selected={value}
          onSelect={(date) => {
            handleDateChange(date ?? null);
            onBlur(); // appeler onBlur après la sélection de la date
          }}
          initialFocus
        />
      </PopoverContent>
      <input
        name={name}
        type="hidden"
        value={inputValue}
        onChange={(e) => {
          const newValue = e.target.value;
          setInputValue(newValue);
          const parsedDate = newValue
            ? parse(newValue, 'dd/MM/yyyy', new Date())
            : null;
          if (parsedDate && isValid(parsedDate)) {
            onChange(parsedDate);
          }
        }}
        onBlur={onBlur}
        className="w-full mt-2 p-2 border rounded"
        onFocus={(e) => e.target.blur()} // Empêche l'utilisateur de modifier directement le champ
      />
    </Popover>
  );
};

export default CalendarInput2;
