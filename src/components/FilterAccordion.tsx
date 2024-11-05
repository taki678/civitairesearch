import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FilterOption } from '../types';

interface FilterAccordionProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  singleSelect?: boolean;
}

export const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  options,
  selected,
  onChange,
  singleSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (value: string) => {
    if (singleSelect) {
      onChange(selected.includes(value) ? [] : [value]);
    } else {
      const newSelected = selected.includes(value)
        ? selected.filter(v => v !== value)
        : [...selected, value];
      onChange(newSelected);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        type="button"
        className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="p-4 space-y-2 border-t border-gray-200">
          {options.map(option => (
            <label key={option.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => handleOptionChange(option.value)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm">
                {option.labelJa ? `${option.labelJa} / ${option.label}` : option.label}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};