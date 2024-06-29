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

export function TypesColisSelector() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Charger les données des pays depuis le fichier JSON
  useEffect(() => {
    fetch('/data/colis.json')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <Select onValueChange={(value) => setSelectedCountry(value)}>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Types" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type de colis</SelectLabel>
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

export default TypesColisSelector;
