interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Cari event..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-xl px-4 py-2 mb-6 shadow-sm focus:outline-none"
    />
  );
};
