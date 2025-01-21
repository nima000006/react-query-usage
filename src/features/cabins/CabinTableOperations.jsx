import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filteredField={"discount"}
          options={[
            { value: "all", label: "all" },
            {
              value: "no-discount",
              label: "no-discount",
            },
            { value: "with-discount", label: "with-discount" },
          ]}
        />
        <SortBy
          options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            { value: "regularPrice-asc", label: "Sort by price (low first)" },
            { value: "regularPrice-desc", label: "Sort by price (high first)" },
            { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
            {
              value: "maxCapacity-desc",
              label: "Sort by capacity (high first)",
            },
          ]}
        />
      </TableOperations>
    </div>
  );
}

export default CabinTableOperations;
