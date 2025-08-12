interface FilterProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  categories: string[];
  locations: string[];
}

export const Filter = ({
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  categories,
  locations,
}: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border px-4 py-2 rounded-xl"
      >
        <option value="">Semua Kategori</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="border px-4 py-2 rounded-xl"
      >
        <option value="">Semua Lokasi</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};
