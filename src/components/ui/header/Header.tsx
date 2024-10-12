import style from './Header.module.scss'
import { useTranslation } from 'react-i18next';
export const Header = () => {
    const {t} = useTranslation()
    return (
        <div className={style.header}>
            <h1>Жилфонд</h1>
            <p>{t('user')}</p>
        </div>
    );
};