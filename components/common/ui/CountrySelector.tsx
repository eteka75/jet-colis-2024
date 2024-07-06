'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Type pour les options de pays
interface CountryOption {
  label: string;
  value: string;
}

export function CountrySelector() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Charger les données des pays depuis le fichier JSON
  useEffect(() => {
    fetch('/data/countries.json')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <Select onValueChange={(value) => setSelectedCountry(value)}>
      <SelectTrigger className="w-auto min-w-40">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default CountrySelector;
