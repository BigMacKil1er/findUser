import { useTranslation } from "react-i18next";
import style from "./SideBar.module.scss";
import { SearchInputWithDebounce } from "../search_input/SearchInputWithDebounce";
import { SearchItemSidebar } from "../search_item_sidebar/SearchItemSidebar";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
export const SideBar = () => {
    const { t } = useTranslation();
    const [users, setUsers] = useState([]);
    const onSearchUsers = (userQuery: string) => {
        if (isNaN(Number(userQuery))) {
            console.log("isNana");
        } else {
            console.log("Number");
        }
    };

    useEffect(() => {
        api.getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <div className={style.sidebar}>
            <div className={style.search_wrapper}>
                <h3>{t("find_employees")}</h3>
                <SearchInputWithDebounce onChange={onSearchUsers} />
            </div>
            <div className={style.search_result_wrapper}>
                <h3>{t("search_results")}</h3>
                <div className={style.search_result}>
                    {users.map((user) => (
                        <SearchItemSidebar user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
};
