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
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  onBlur?: () => void;
  name?: string;
  dateFormat?: string; // Ajout du prop dateFormat
}

const CalendarInput2: React.FC<CalendarInput2Props> = ({
  value,
  onChange = () => {},
  onBlur = () => {},
  name,
  dateFormat = 'dd/MM/yyyy', // Ajout du prop dateFormat
}) => {
  const [inputValue, setInputValue] = React.useState(() =>
    value ? format(value, dateFormat) : ''
  );

  React.useEffect(() => {
    if (value) {
      const formattedDate = format(value, dateFormat);
      setInputValue(formattedDate);
    } else {
      setInputValue('');
    }
  }, [value, dateFormat]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = format(date, dateFormat);
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
            'w-full justify-start input text-left font-normal',
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
          selected={value ?? undefined}
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
            ? parse(newValue, dateFormat, new Date())
            : null;
          if (parsedDate && isValid(parsedDate)) {
            onChange(parsedDate);
          } else {
            onChange(null);
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
