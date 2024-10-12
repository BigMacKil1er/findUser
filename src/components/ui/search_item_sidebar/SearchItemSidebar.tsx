import style from './SearchItemSidebar.module.scss'
interface Props {
    user: any
}
export const SearchItemSidebar:React.FC<Props> = ({user}) => {
    return (
        <div className={style.item_sidebar_wrapper}>
            <div className={style.img_container}>
                
            </div>
            <div className={style.details_container}>
                <p>{user.username}</p>
                <span>{user.email}</span>
            </div>
        </div>
    );
};