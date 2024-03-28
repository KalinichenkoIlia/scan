import React from "react";
import styles from "../../styles/Checkbox.modules.css"

function Checkbox() {
    return(
        <section className={styles.section_checkbox}>
            <label>
                <input type="checkbox"/>
                <span>Признак максимальной полноты</span>

            </label>
            <label>
                <input type="checkbox"/>

                <span>Упоминания в бизнес-контексте</span>
            </label>
            <label>
                <input type="checkbox"/>

                <span>Главная роль в публикации</span>
            </label>
            <label>
                <input type="checkbox"/>

                <span>Публикации только с риск-факторами</span>
            </label>
            <label>
                <input type="checkbox"/>

                <span>Включать технические новости рынков</span>
            </label>
            <label>
                <input type="checkbox"/>

                <span>Включать анонсы и календари</span>
            </label>
            <label>
                <input type="checkbox"/>

                <span>Включать сводки новостей</span>
            </label>

       </section>
    )
}
export default Checkbox;
