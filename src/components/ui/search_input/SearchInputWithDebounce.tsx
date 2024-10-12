import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import style from './SearchInputWithDebounce.module.scss'
interface Props {
    onChange: (value: string) => void;
}
export const SearchInputWithDebounce: React.FC<Props> = ({ onChange }) => {
    const [value, setValue] = useState("");
    const debounced = useDebouncedCallback((value) => {
        onChange(value);
    }, 1000);
    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
        debounced(value);
    };
    return <input className={style.search_input} value={value} onChange={handleChangeSearch}/>;
};
