import React from "react";
import { Language } from '../../enums/Language';
 
const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);
 
    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;
 
        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }
 
    return (
        <div>
            <div>
                <select value={lang} name="language" onChange={changeLanguage}>
                    <option value={Language.FR}>FR</option>
                    <option value={Language.EN}>EN</option>
                </select>
            </div>
        </div>
    )
}
 
export default Lang;