import cls from "./ResultPage.module.scss"
import Hero from "@/assets/images/hero.svg";
import {HTag, PTag} from "@/components";
import save from "@/assets/images/save.jpg"
import Download from "@/assets/images/download.svg"
import Arrow from "@/assets/images/arrow.svg"
import {Link} from "react-router-dom";
import Footer from "@/assets/images/footer.svg";
export const ResultPage = () => {
    return (
        <main>
            <header className={cls.hero}>
                <Hero/>
                <HTag className={cls.title}>
                    Модель развития сложившихся <br/> городских территорий
                </HTag>
            </header>
            <section className={cls.result}>
                <div className={cls.info}>
                    <HTag className={cls.title}>
                        Сохранение
                    </HTag>
                    <PTag>
                        Рекомендуемый сценарий — <span>сохранение</span>. Он включает бережное отношение к среде,
                        минимальная инвазию
                        в среду для восстановления ее целостности, повышение проницаемости и качества общественных
                        пространств.
                    </PTag>
                    <PTag>
                        Детальные составляющие сценария можно загрузить при клике на кнопку справа
                    </PTag>
                    <PTag className={cls.paragraphTitle}>
                        Основные составляющие сценария:
                    </PTag>
                    <ul>
                        <li>
                            <span>๏</span>
                            инвентаризация маршрутов и сценариев пользователей и их усиление
                        </li>
                        <li>
                            <span>๏</span>
                            увеличение общественных пространств и зон рекреации
                        </li>
                        <li>
                            <span>๏</span>
                             строительство Доминант не допускается
                        </li>
                        <li>
                            <span>๏</span>
                            высота нового строительства не превышает среднюю высоту квартала более, чем на 5 метров.
                        </li>
                        <li>
                            <span>๏</span>
                            заполнение пустот в соответствии с параметрами сложившейся среды (вдоль уличного фронта)
                        </li>
                        <li>
                            <span>๏</span>
                            увеличение пешеходной проницаемости территории при сохранении при сохранении цельности
                            баланса функций
                        </li>
                        <li>
                            <span>๏</span>
                            парковка вдоль УДС, платные парковки
                        </li>
                        <li>
                            <span>๏</span>
                            приведение текущих торговых объектов к соответствию регламентам благоустройства
                        </li>
                    </ul>
                </div>
                <div className={cls.download}>
                    <img src={save} alt=""/>
                    <div className={cls.links}>
                        <a
                            className={cls.downloadLink}
                            href="http://localhost:4000/download" download>
                            <Download/>
                            <PTag>
                                загрузить подробный сценарий
                            </PTag>
                        </a>
                        <div className={cls.pages}>
                            <div className={cls.link}>
                                <Arrow style={{fontSize: "20px"}} className={cls.first}/>
                                <PTag>
                                    <Link to="/">
                                        поменять данные
                                    </Link>
                                </PTag>
                            </div>
                            <div className={cls.link}>
                                <PTag>
                                    <Link to="/">
                                        новая оценка
                                    </Link>
                                </PTag>
                                <Arrow style={{fontSize: "20px"}} className={cls.second}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className={cls.footer}>
                <HTag>
                    <Footer/>
                </HTag>
                <PTag>
                    с любовью и счастьем
                </PTag>
            </footer>
        </main>
    );
};

