import { FILTERS_BUTTONS } from "../constants/constants";
import type { FiltersValue } from "../types/types";

interface FiltersProps {
    filtersSelected: FiltersValue;
    onFilterChange: (filter: FiltersValue) => void;
}

function Filters({ filtersSelected, onFilterChange }: FiltersProps): JSX.Element {

    const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>, filter: FiltersValue) => {
        evt.preventDefault();
        onFilterChange(filter)
    }

    return (
        <ul className='filters'>
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { literal, href}]) => {
                    const isSelected = filtersSelected === key;
                    const classSelected = isSelected ? 'selected' : '';

                    return (
                        <li key={key}>
                            <a
                                className={classSelected}
                                href={href}
                                onClick={(evt) => handleClick(evt, key as FiltersValue)}
                            >
                                {literal}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Filters;