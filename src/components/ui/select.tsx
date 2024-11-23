"use client";

import React, { useState } from "react";

export interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export function Select({ value, onValueChange, children }: SelectProps) {
  return <div className="relative w-full">{children}</div>;
}

export interface SelectTriggerProps {
  id?: string;
  children: React.ReactNode;
}

export function SelectTrigger({ id, children }: SelectTriggerProps) {
  return (
    <button
      id={id}
      className="w-full px-4 py-2 border rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export interface SelectContentProps {
  children: React.ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
  return (
    <ul className="absolute mt-1 w-full border rounded-md bg-white shadow-lg z-10">
      {children}
    </ul>
  );
}

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  return (
    <li
      onClick={() => console.log(`Selected: ${value}`)}
      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    >
      {children}
    </li>
  );
}
