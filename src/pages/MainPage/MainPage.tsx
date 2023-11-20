import {ChangeEvent, useState} from "react";
import cls from "./MainPage.module.scss";
import Hero from "@/assets/images/hero.svg";
import {HTag, Input, PTag, Radio, Select, Switch} from "@/components";
import cn from "classnames";
import Telegram from "@/assets/images/telegram.svg";
import Link from "@/assets/images/link.svg";
import {Link as RouterLink} from "react-router-dom"
import 'swiper/css';

export const MainPage = () => {
    const [firstForm, setFirstForm] = useState({
        settlementType: "1",
        settlementArea: "",
        territoryArea: "",
        ratio: "",
        period: "",
        mainFunction: "",
        secondaryFunction: "",
        tendention: "",
        budget: "",
        presence: ""
    })
    const [secondForm, setSecondForm] = useState({
        cultureCode: "",
        expressiveness: "",
        authenticity: "",
        integrity: "",
        solutions: "",
        characteristics: "",


        perspectiveView: ""
    })
    const [thirdForm, setThirdForm] = useState({
        permittedType: "",
        transportAccessibility: "",
        sportsProximity: "",
        storesProximity: "",
        improvement: "",
        landscaping: "",
        socialProximity: "",
        ecologicalState: "",
        transportsProximity: "",
        index: "209"
    })
    const [fivethForm, setFivethForm] = useState({
        businessDevelopment: "",
        territoryCapitalization: "",
        infrastructureCost: "",
        budgetRevenues: "",
        tourismIncome: "",
        functionCount: ""
    })
    const [fourthForm, setfourthForm] = useState({
        votes: "",
        rate: "",
        identity: "",
        associativity: "",
        creativity: ""
    })
    const [firstSwitch, setFirstSwitch] = useState(false)
    const [secondSwitch, setSecondSwitch] = useState(false)
    const settlementTypeItems = [
        {
            label: "город столичного статуса",
            value: "1",
        },
        {
            label: "центр макрорегиона",
            value: "2",
        },
        {
            label: "региональный центр",
            value: "3",
        },
        {
            label: "обособленный город",
            value: "4",
        },
        {
            label: "город-спутник",
            value: "5",
        },
        {
            label: "поселок/село/деревня",
            value: "6",
        },
    ]
    const periodItems = [
        {
            label: "до XVIII века",
            value: "1",
        },
        {
            label: "XVIII-XIX века",
            value: "2",
        },
        {
            label: "XX век",
            value: "3",
        },
        {
            label: "XXI век",
            value: "4",
        },
    ]
    const mainFunctionItems = [
        {
            label: "промышленный (обработка)",
            value: "1",
        },
        {
            label: "добыча ресурсов",
            value: "2",
        },
        {
            label: "торговый",
            value: "3",
        },
        {
            label: "туристско-рекреационный",
            value: "4",
        },
        {
            label: "наукоград",
            value: "5",
        },
        {
            label: "транспортный узел",
            value: "6",
        },
        {
            label: "смешанный тип",
            value: "7",
        },
    ]
    const [socialValues, setSocialValues] = useState({
        business: "",
        capital: "",
        amount: "",
        budgetRevenue: "",
        tourismBudget: "",
        cost: ""
    })
    const [selectedSelect, setSelectedSelect] = useState("1")

    const secondaryFunctionItems = [
        {
            label: "промышленный (обработка)",
            value: "1",
        },
        {
            label: "добыча ресурсов",
            value: "2",
        },
        {
            label: "торговый",
            value: "3",
        },
        {
            label: "туристско-рекреационный",
            value: "4",
        },
        {
            label: "наукоград",
            value: "5",
        },
        {
            label: "транспортный узел",
            value: "6",
        },
    ]
    const tendentionItems = [
        {
            label: "расширяющийся",
            value: "1",
        },
        {
            label: "сжимающийся",
            value: "2",
        },
        {
            label: "стабилизирующийся",
            value: "3",
        },
        {
            label: "новый населенный пункт",
            value: "4",
        },
        {
            label: "агломерационное поглощение соседних населенных пунктов",
            value: "5",
        },
    ]
    return (
        <main className={cls.wrapper}>
            <header className={cls.hero}>
                <Hero/>
                <HTag className={cls.title}>
                    Модель развития сложившихся <br/> городских территорий
                </HTag>
            </header>


            <section>
                <HTag className={cls.title}>
                    Общее
                </HTag>
                <span className={cls.line}></span>
                <div
                    className={cls.form}
                >
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Тип населенного пункта
                        </HTag>
                        <Select
                            items={settlementTypeItems}
                            placeholder={"выберите значение"}
                            onSelect={(value) => {
                                setFirstForm((prevState) => ({
                                    ...prevState,
                                    settlementType: value
                                }))
                            }}
                        />
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Площадь населенного пункта, кв.км
                        </HTag>
                        <Input onChange={(text) => {
                            setFirstForm((prevState) => ({
                                ...prevState,
                                settlementArea: text
                            }))
                        }} value={firstForm.settlementArea} label={"кв.км"}/>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Площадь рассматриваемой территории
                        </HTag>
                        <Input onChange={(text) => {
                            setFirstForm((prevState) => ({
                                ...prevState,
                                territoryArea: text
                            }))
                        }} value={firstForm.territoryArea} label={"кв.км"}/>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Отношение площади территории к площади населенного пункта
                        </HTag>
                        <Input
                            disabled={true}
                            onChange={(text) => {
                                setFirstForm((prevState) => ({
                                    ...prevState,
                                    ratio: text
                                }))
                            }} value={firstForm.ratio} label={"%"}/>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Период основания населенного пункта
                        </HTag>
                        <Select
                            items={periodItems}
                            placeholder={"выберите значение"}
                            onSelect={(value) => {
                                setFirstForm((prevState) => ({
                                    ...prevState,
                                    periodItems: value
                                }))
                            }}
                        />
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Основная функция населенного пункта
                        </HTag>
                        <Select
                            items={mainFunctionItems}
                            placeholder={"выберите значение"}
                            onSelect={(value) => {
                                setFirstForm((prevState) => ({
                                    ...prevState,
                                    mainFunction: value
                                }))
                            }}
                        />
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Дополнительно связываемая функция /-ии
                        </HTag>
                        <Select
                            items={secondaryFunctionItems}
                            placeholder={"выберите значение"}
                            onSelect={(value) => {
                                setFirstForm((prevState) => ({
                                    ...prevState,
                                    secondaryFunction: value
                                }))
                            }}
                        />
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Тенденция пространственного развития населенного пункта </HTag>
                        <Select
                            items={tendentionItems}
                            placeholder={"выберите значение"}
                            onSelect={(value) => {
                                setFirstForm((prevState) => ({
                                    ...prevState,
                                    tendention: value
                                }))
                            }}
                        />
                    </div>
                    <div className={cls.formLine}>
                        <div className={cn(cls.titleWrapper, cls.closeWrapper)}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Бюджет муниципального образования за прошлый период
                            </HTag>
                            <PTag>
                                общий
                            </PTag>
                        </div>
                        <Input style={{marginLeft: "-60px"}} onChange={(text) => {
                            setFirstForm((prevState) => ({
                                ...prevState,
                                budget: text
                            }))
                        }} value={firstForm.budget} label={"тыс. руб."}/>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Присутствие рассматриваемой территории в действующих программах
                            социально-экономического развития
                        </HTag>
                        <div style={{marginLeft: "-35px"}} className={cls.radioWrapper}>
                            <Radio
                                id="presence1"
                                name="presence"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setFirstForm(prevState => ({
                                        ...prevState,
                                        presence: event.target.value
                                    }))
                                }}
                                checked={firstForm.presence === '1'}
                                text="Да"
                            />
                            <Radio
                                id="presence2"
                                name="presence"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setFirstForm(prevState => ({
                                        ...prevState,
                                        presence: event.target.value
                                    }))
                                }}
                                checked={firstForm.presence === '2'}
                                text="Нет"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <HTag className={cn(cls.title, cls.lineTitle)}>
                    Историко-архитектурные ценности
                    <span className={cls.line}></span>
                </HTag>
                <div className={cn(cls.form, cls.formRadio)}>
                    <HTag className={cn(cls.formTitle, cls.titleTip)} maxWidth={true}>
                        ниже выберите один из наиболее подходящих вариантов для оценки территории
                    </HTag>
                    <div className={cls.withShadow}>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Вид на перспективы исторических улиц
                            </HTag>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="perspectiveView1"
                                    name="perspectiveView"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            perspectiveView: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.perspectiveView === '1'}
                                    text="Ценный материальный фонд памятники архитектуры, культуры, истории занимают не менее 50% территории квартала - 5 баллов"
                                />
                                <Radio
                                    id="perspectiveView2"
                                    name="perspectiveView"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            perspectiveView: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.perspectiveView === '2'}
                                    text="Соотношение исторической застройки и компенсационной больше 70/30% - 4 балла"
                                />
                                <Radio
                                    id="perspectiveView3"
                                    name="perspectiveView"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            perspectiveView: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.perspectiveView === '3'}
                                    text="Соотношение исторической застройки и компенсационной меньше 70/30% - 3 балла"
                                />
                                <Radio
                                    id="perspectiveView4"
                                    name="perspectiveView"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            perspectiveView: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.perspectiveView === '4'}
                                    text="Есть сформированный ландшафт/крыш - 2 балла"
                                />
                                <Radio
                                    id="perspectiveView5"
                                    name="perspectiveView"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            perspectiveView: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.perspectiveView === '5'}
                                    text="Положение территории в пределах композиционного влияния одного или нескольких памятников архитектуры- 1 балл"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cls.withShadow}>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cls.formTitle}
                            >
                                Пространственные характеристики исторических зданий
                            </HTag>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="characteristics1"
                                    name="characteristics"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            characteristics: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.characteristics === '1'}
                                    text="Процент застроенности линии фронта соответствует требованиям города к АГО (если установлен параметр) - 1 балл"
                                />
                                <Radio
                                    id="characteristics2"
                                    name="characteristics"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            characteristics: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.characteristics === '2'}
                                    text="Процент застроенности линии фронта не менее 50 (соответствие требованиям города к АГО) - 2 баллов"
                                />
                                <Radio
                                    id="characteristics3"
                                    name="characteristics"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            characteristics: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.characteristics === '3'}
                                    text="Существует единая линия застройки (сохранение единой линии) - 3 балла"
                                />
                                <Radio
                                    id="characteristics4"
                                    name="characteristics"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            characteristics: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.characteristics === '4'}
                                    text="Средняя этажность квартала отличается от средней высоты исторической застройки не более чем на 20% - 4 балла"
                                />
                                <Radio
                                    id="characteristics5"
                                    name="characteristics"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            characteristics: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.characteristics === '5'}
                                    text="Средняя этажность квартала соответствует средней высоте исторической застройки - 5 баллов"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cls.withShadow}>
                        <div className={cls.formLine}>
                            <div className={cls.titleWrapper}>
                                <HTag
                                    tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                    className={cls.formTitle}
                                >
                                    Целостность застройки
                                </HTag>
                                <PTag>
                                    мера единства и неповрежденности объекта и его
                                    окружения
                                </PTag>
                            </div>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="integrity1"
                                    name="integrity"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            integrity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.integrity === '1'}
                                    text="Сохранены объекты благоустройства исторической среды - 1 балл"
                                />
                                <Radio
                                    id="integrity2"
                                    name="integrity"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            integrity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.integrity === '2'}
                                    text="Наличие объектов не относящихся к ОКН, но имеющих историко-культурную ценность - 2 балла"
                                />
                                <Radio
                                    id="integrity3"
                                    name="integrity"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            integrity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.integrity === '3'}
                                    text="Отсутствие диссонирующих объектов - 3 балла"
                                />
                                <Radio
                                    id="integrity4"
                                    name="integrity"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            integrity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.integrity === '4'}
                                    text="Соответствие размера территории размеру территории исторической застройки - 4 балла"
                                />
                                <Radio
                                    id="integrity5"
                                    name="integrity"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            integrity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.integrity === '5'}
                                    text="Соответствие масштабу исторической застройки - 5 баллов"
                                />
                            </div>
                        </div>
                    </div>



                    <div className={cls.withShadow}>
                        <div className={cls.formLine}>
                            <div className={cls.titleWrapper}>
                                <HTag
                                    tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                    className={cn(cls.formTitle, cls.fixedWidth)}>
                                    Подлинность застройки
                                </HTag>
                                <PTag>
                                    способность отличительных характеристик адекватно и
                                    достоверно
                                    выражать его ценность, форма и замысел, материалы и вещества, местоположение и
                                    окружение
                                </PTag>
                            </div>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="authenticity1"
                                    name="authenticity"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            authenticity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.authenticity === '1'}
                                    text="Историческая ценность (идея места/легенда/автор) - 1 балл"
                                />
                                <Radio
                                    id="authenticity2"
                                    name="authenticity"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            authenticity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.authenticity === '2'}
                                    text="Отсутствие подхода/проектов типового проектирования на территории - 2 балла"
                                />
                                <Radio
                                    id="authenticity3"
                                    name="authenticity"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            authenticity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.authenticity === '3'}
                                    text="Наличие природного/искусственного ландшафта - 3 балла"
                                />
                                <Radio
                                    id="authenticity4"
                                    name="authenticity"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            authenticity: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.authenticity === '4'}
                                    text="Природные поверхности и материалы (или им соответствующие) составляют не менее чем на 50% застройки - 4 балла"
                                />
                                <Radio
                                    id="authenticity5"
                                    name="authenticity"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            perspectiveView: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.perspectiveView === '5'}
                                    text="Единство хронологии застройки (целостность характера той или иной видовой картины, обусловленная ее формированием в определенный исторический период) - 5 баллов"
                                />
                            </div>
                        </div>
                    </div>


                    <div className={cls.withShadow}>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cls.formTitle}
                            >
                                Архитектурно-планировочные решения
                            </HTag>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="solutions1"
                                    name="solutions"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            solutions: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.solutions === '1'}
                                    text="Колористические решения соответствуют исторической застройке - 1 балл"
                                />
                                <Radio
                                    id="solutions2"
                                    name="solutions"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            solutions: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.solutions === '2'}
                                    text="Размер пространственного конверта по улице отличается более чем на 30% от размера исторической застройки - 2 балла"
                                />
                                <Radio
                                    id="solutions3"
                                    name="solutions"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            solutions: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.solutions === '3'}
                                    text="Размер пространственного конверта по улице соответствует размеру исторической застройки - 3 балла"
                                />
                                <Radio
                                    id="solutions4"
                                    name="solutions"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            solutions: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.solutions === '4'}
                                    text="Размер пространственного конверта отличается не более чем на 20% - 4 балла"
                                />
                                <Radio
                                    id="solutions5"
                                    name="solutions"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondForm(prevState => ({
                                            ...prevState,
                                            solutions: event.target.value
                                        }))
                                    }}
                                    checked={secondForm.solutions === '5'}
                                    text="Размер пространственного конверта по улице и внутри квартала соответствует размеру исторической застройки - 5 баллов"
                                />
                            </div>
                        </div>
                    </div>






                    <div className={cls.formLine}>
                        <div className={cn(cls.titleWrapper, cls.closeWrapper)}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Архитектурно-художественная и эстетическая выразительность застройки и
                                окружающей среда
                            </HTag>
                            <PTag>
                                оцените экспертно от 1 до 5
                            </PTag>
                        </div>
                        <Input onChange={(text) => {
                            setSecondForm((prevState) => ({
                                ...prevState,
                                expressiveness: text
                            }))
                        }} value={secondForm.expressiveness} label={"балл"}/>
                    </div>
                    <div className={cls.formLine}>
                        <div className={cn(cls.titleWrapper, cls.closeWrapper)}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Культурные коды. Наследие. Истоки, слои непроявленные смыслы
                            </HTag>
                            <PTag>
                                оцените экспертно от 1 до 5
                            </PTag>
                        </div>
                        <Input onChange={(text) => {
                            setSecondForm((prevState) => ({
                                ...prevState,
                                cultureCode: text
                            }))
                        }} value={secondForm.cultureCode} label={"балл"}/>
                    </div>
                </div>
            </section>

            <section>
                <div className={cls.titleWithSwitch}>
                    <HTag className={cn(cls.title, cls.lineTitle)}>
                        Градостроительные ценности
                        <span className={cls.line}></span>
                    </HTag>
                    <div className={cls.titleSwitch}>
                        <Switch value={firstSwitch} onChange={(value) => {
                            setFirstSwitch(value)
                        }}/>
                        <PTag>
                            экспертная оценка и ручные корректировки
                        </PTag>
                    </div>
                </div>
                <div className={cn(cls.form, cls.formRadio)}>
                    <HTag className={cn(cls.formTitle, cls.titleTip)} maxWidth={true}>
                        ниже выберите один из наиболее подходящих вариантов для оценки территории
                    </HTag>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Вид разрешенного использования
                        </HTag>
                        <div className={cls.radioWrapper}>
                            <Radio
                                id="permittedType1"
                                name="permittedType"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        permittedType: event.target.value
                                    }))
                                }}
                                checked={thirdForm.permittedType === '1'}
                                text="ВРИ территории (зоны) включает менее 2 разных по функции - 1 балл "
                            />
                            <Radio
                                id="permittedType2"
                                name="permittedType"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        permittedType: event.target.value
                                    }))
                                }}
                                checked={thirdForm.permittedType === '2'}
                                text="ВРИ территории (зоны) включает 2-3 разных по функции - 2 балла "
                            />
                            <Radio
                                id="permittedType3"
                                name="permittedType"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        permittedType: event.target.value
                                    }))
                                }}
                                checked={thirdForm.permittedType === '3'}
                                text="ВРИ территории (зоны) включает 4-5 разных по функции - 3 балла"
                            />
                            <Radio
                                id="permittedType4"
                                name="permittedType"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        permittedType: event.target.value
                                    }))
                                }}
                                checked={thirdForm.permittedType === '4'}
                                text="ВРИ территории (зоны) включает 6-7 разных по функции - 4 балла "
                            />
                            <Radio
                                id="permittedType5"
                                name="permittedType"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        permittedType: event.target.value
                                    }))
                                }}
                                checked={thirdForm.permittedType === '5'}
                                text="ВРИ территории (зоны) включает более 7 разных по функции - 5 баллов"
                            />
                        </div>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cls.formTitle}
                        >
                            Транспортная доступность - общественный транспорт
                        </HTag>
                        <div className={cls.radioWrapper}>
                            <Radio
                                id="transportsProximity"
                                name="transportsProximity"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportsProximity === '1'}
                                text="Наличие остановки общественного транспорта в радиусе 15 минут - 1 балл"
                            />
                            <Radio
                                id="transportsProximity2"
                                name="transportsProximity"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportsProximity === '2'}
                                text="Наличие остановки общественного транспорта в радиусе 5 минут - 2 балла "
                            />
                            <Radio
                                id="transportsProximity3"
                                name="transportsProximity"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportsProximity === '3'}
                                text="Наличие в радиусе 15 мин. доступности крупного транспортного узла - 3 балла  "
                            />
                            <Radio
                                id="transportsProximity4"
                                name="transportsProximity"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportsProximity === '4'}
                                text="Наличие в радиусе 5 мин. доступности остановок метро или трамвая - 4 балла "
                            />
                            <Radio
                                id="transportsProximity5"
                                name="transportsProximity"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportsProximity === '5'}
                                text="Не менее 10 маршрутов общественного транспорта (разного вида) в радиусе 5 минут - 5 баллов"
                            />
                        </div>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cls.formTitle}
                        >
                            Транспортная доступность - оснащенность парковками
                        </HTag>
                        <div className={cls.radioWrapper}>
                            <Radio
                                id="transportAccessibility1"
                                name="transportAccessibility"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportAccessibility: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportAccessibility === '1'}
                                text="Размеры территории проекта позволяют обеспечить места для хранения автомобилей в соответствии с нормативами - 1 балл "
                            />
                            <Radio
                                id="transportAccessibility2"
                                name="ransportAccessibility"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportAccessibility: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportAccessibility === '2'}
                                text="Есть возможность устройства подземного паркинга - 2 балла "
                            />
                            <Radio
                                id="transportAccessibility3"
                                name="transportAccessibility"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportAccessibility: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportAccessibility === '3'}
                                text="Возможность парковки в пределах УДС - 3 балла "
                            />
                            <Radio
                                id="transportAccessibility4"
                                name="transportAccessibility"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportAccessibility: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportAccessibility === '4'}
                                text="Наличие в радиусе 15 ми. пешеходной доступности открытых многупровневых парковок, подземных паркингов, гаражных кооперативов - 4 балла "
                            />
                            <Radio
                                id="transportAccessibility5"
                                name="transportAccessibility"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        transportAccessibility: event.target.value
                                    }))
                                }}
                                checked={thirdForm.transportAccessibility === '5'}
                                text="Обеспеченность достаточным количеством парковочных мест в непосредственной близости от объекта (на территории)  - 5 баллов"
                            />
                        </div>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cls.formTitle}
                        >
                            Близость к социальным объектам
                        </HTag>
                        <div className={cls.radioWrapper}>
                            <Radio
                                id="socialProximity1"
                                name="socialProximity"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        socialProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.socialProximity === '1'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности есть коммерческие медиинские объекты - 1 балл"
                            />
                            <Radio
                                id="socialProximity2"
                                name="socialProximity"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        socialProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.socialProximity === '2'}
                                text="Есть потребность в поликлинике - 2 балла"
                            />
                            <Radio
                                id="socialProximity3"
                                name="socialProximity"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        socialProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.socialProximity === '3'}
                                text="Есть потребность в школе - 3 балла "
                            />
                            <Radio
                                id="socialProximity4"
                                name="socialProximity"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        socialProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.socialProximity === '4'}
                                text="Есть потребность в детском саде - 4 балла "
                            />
                            <Radio
                                id="socialProximity5"
                                name="socialProximity"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        socialProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.socialProximity === '5'}
                                text="Территория обеспечена социальными обьектами согласно нормативу - 5 баллов "
                            />
                        </div>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cls.formTitle}
                        >
                            Близость к магазинам, торговым центрам
                        </HTag>
                        <div className={cls.radioWrapper}>
                            <Radio
                                id="storesProximity1"
                                name="storesProximity"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        storesProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.storesProximity === '1'}
                                text="Наличие в радиусе 300м пешеходной доступности магазинов для МНГ - 1 балл "
                            />
                            <Radio
                                id="storesProximity2"
                                name="storesProximity"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        storesProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.storesProximity === '2'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности предприятий общественного питания - 2 балла"
                            />
                            <Radio
                                id="storesProximity3"
                                name="storesProximity"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        storesProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.storesProximity === '3'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности не менее 10 магазинов диффернцированных по назначению, в т.ч. аптек - 3 балла"
                            />
                            <Radio
                                id="storesProximity4"
                                name="storesProximity"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        storesProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.storesProximity === '4'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности не менее 20 магазинов диффернцированных по назначению - 4 балла"
                            />
                            <Radio
                                id="storesProximity5"
                                name="storesProximity"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        storesProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.storesProximity === '5'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности торговых центров, рынков общегородского значения - 5 баллов"
                            />
                        </div>
                    </div>
                    <div className={cls.formLine}>
                        <div className={cls.titleWrapper}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cls.formTitle}
                            >
                                Близость к спортивным объектам
                            </HTag>
                            <PTag>
                                фитнес-центры, бассейны, корты, ворк-ауты
                            </PTag>
                        </div>

                        <div className={cls.radioWrapper}>
                            <Radio
                                id="sportsProximity1"
                                name="sportsProximity"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        sportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.sportsProximity === '1'}
                                text="Отсутствие обеспеченности спортивными объектами в соответствии с РНГП/МНГП - 1 балл"
                            />
                            <Radio
                                id="sportsProximity2"
                                name="sportsProximity"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        sportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.sportsProximity === '2'}
                                text="Обеспеченность спортивными объектами в соответствии с РНГП/МНГП - 2 балла "
                            />
                            <Radio
                                id="sportsProximity3"
                                name="sportsProximity"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        sportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.sportsProximity === '3'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности спортивных обьектов местного/локального значения (спортзалы, спортплощадки) - 3 балла"
                            />
                            <Radio
                                id="sportsProximity4"
                                name="sportsProximity"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        sportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.sportsProximity === '4'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности спортивных обьектов районного значения (стадионы, воркауты, корты) 4 балла"
                            />
                            <Radio
                                id="sportsProximity5"
                                name="sportsProximity"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        sportsProximity: event.target.value
                                    }))
                                }}
                                checked={thirdForm.sportsProximity === '5'}
                                text="Наличие в радиусе 15 мин. пешеходной доступности спортивных обьектов общегородского значения МФСК, ДЮСШ, Универсальные спортивно-зрелищные залы, ледовые арены, бассейны, экстримпарки - 5 баллов"
                            />
                        </div>
                    </div>
                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cls.formTitle}
                        >
                            Озеленение/благоустройство
                        </HTag>
                        <div className={cls.radioWrapper}>
                            <Radio
                                id="landscaping1"
                                name="landscaping"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        landscaping: event.target.value
                                    }))
                                }}
                                checked={thirdForm.landscaping === '1'}
                                text="В радиусе 15 мин. доступности нет благоустренных открытых общественных пространств - 1 балл  "
                            />
                            <Radio
                                id="landscaping2"
                                name="landscaping"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        landscaping: event.target.value
                                    }))
                                }}
                                checked={thirdForm.landscaping === '2'}
                                text="В радиусе 15 мин. доступности есть бульвар/зеленая зона - 2 балла "
                            />
                            <Radio
                                id="landscaping3"
                                name="landscaping"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        landscaping: event.target.value
                                    }))
                                }}
                                checked={thirdForm.landscaping === '3'}
                                text="В радиусе 15 мин. доступности есть местный парк/бульвар - 3 балла"
                            />
                            <Radio
                                id="landscaping4"
                                name="landscaping"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        landscaping: event.target.value
                                    }))
                                }}
                                checked={thirdForm.landscaping === '4'}
                                text="В радиусе 15 мин. доступности есть парк/сквер/пешеходная улица - 4 балла"
                            />
                            <Radio
                                id="landscaping5"
                                name="landscaping"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        landscaping: event.target.value
                                    }))
                                }}
                                checked={thirdForm.landscaping === '5'}
                                text="В радиусе 15 мин. доступности есть благоустроенные парк/сквер/набережная/площадь - 5 баллов"
                            />
                        </div>
                    </div>

                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cls.formTitle}
                        >
                            Экологическое состояние территории
                        </HTag>
                        <div className={cls.radioWrapper}>
                            <Radio
                                id="ecologicalState1"
                                name="ecologicalState"
                                value="1"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        ecologicalState: event.target.value
                                    }))
                                }}
                                checked={thirdForm.ecologicalState === '1'}
                                text="Есть шумовое загрязнение - 1 балл"
                            />
                            <Radio
                                id="ecologicalState2"
                                name="ecologicalState"
                                value="2"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        ecologicalState: event.target.value
                                    }))
                                }}
                                checked={thirdForm.ecologicalState === '2'}
                                text="Есть световое загрязнение - 2 балла"
                            />
                            <Radio
                                id="ecologicalState3"
                                name="ecologicalState"
                                value="3"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        ecologicalState: event.target.value
                                    }))
                                }}
                                checked={thirdForm.ecologicalState === '3'}
                                text="Нет светового загрязнения - 3 балла"
                            />
                            <Radio
                                id="ecologicalState4"
                                name="ecologicalState"
                                value="4"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        ecologicalState: event.target.value
                                    }))
                                }}
                                checked={thirdForm.ecologicalState === '4'}
                                text="Нет шумового загрязнения - 4 балла"
                            />
                            <Radio
                                id="ecologicalState5"
                                name="ecologicalState"
                                value="5"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setThirdForm(prevState => ({
                                        ...prevState,
                                        ecologicalState: event.target.value
                                    }))
                                }}
                                checked={thirdForm.ecologicalState === '5'}
                                text="Нет экологического загрязнения - 5 баллов"
                            />
                        </div>
                    </div>

                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Индекс качества городской среды
                        </HTag>
                        <Input
                            half={true}
                            disabled={true}
                            onChange={(text) => {
                                setThirdForm((prevState) => ({
                                    ...prevState,
                                    index: text
                                }))
                            }} value={thirdForm.index} label={"баллов"}/>
                    </div>
                </div>
            </section>

            <section>
                <div className={cls.titleWithSwitch}>
                    <HTag className={cn(cls.title, cls.lineTitle)}>
                        Социально-экономические ценности
                        <span className={cls.line}></span>
                    </HTag>
                    <div className={cls.titleSwitch}>
                        <Switch value={secondSwitch} onChange={(value) => {
                            setSecondSwitch(value)
                        }}/>
                        <PTag>
                            экспертная оценка и ручные корректировки
                        </PTag>
                    </div>
                </div>
                {secondSwitch ?
                    <div className={cls.form}>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Развитие локального бизнеса
                            </HTag>
                            <Input
                                half={true}
                                disabled
                                onChange={(text) => {
                                    setSocialValues((prevState) => ({
                                        ...prevState,
                                        business: text
                                    }))
                                }} value={
                                // socialValues.business
                                "1"
                            } label={"балл"}/>
                        </div>

                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Капитализация территории
                            </HTag>
                            <Input
                                half={true}
                                disabled
                                onChange={(text) => {
                                    setSocialValues((prevState) => ({
                                        ...prevState,
                                        capital: text
                                    }))
                                }} value={
                                // socialValues.capital
                                "4"
                            } label={"балл"}/>
                        </div>

                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Количество функций на территории
                            </HTag>
                            <Input
                                half={true}
                                disabled
                                onChange={(text) => {
                                    setSocialValues((prevState) => ({
                                        ...prevState,
                                        amount: text
                                    }))
                                }} value={
                                // socialValues.amount
                                "5"
                            } label={"балл"}/>
                        </div>


                        <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
                            <div className={cls.formLine}>
                                <HTag
                                    tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                    className={cn(cls.formTitle, cls.fixedWidth)}>
                                    Доходы бюджета
                                </HTag>
                                <Input
                                    style={{marginLeft: "40px", opacity: "50%"}}
                                    half={true}
                                    disabled
                                    onChange={(text) => {
                                        setSocialValues((prevState) => ({
                                            ...prevState,
                                            budgetRevenue: text
                                        }))
                                    }} value={
                                    // socialValues.budgetRevenue
                                    "2"
                                } label={"балл"}/>
                            </div>

                            <div className={cls.formLine}>
                                <HTag
                                    tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                    className={cn(cls.formTitle, cls.fixedWidth)}>
                                    Доходы от туризма </HTag>
                                <Input
                                    style={{marginLeft: "15px", opacity: "50%"}}
                                    half={true}
                                    onChange={(text) => {
                                        setSocialValues((prevState) => ({
                                            ...prevState,
                                            tourismBudget: text
                                        }))
                                    }} value={
                                    // socialValues.tourismBudget
                                    "0"
                                } label={"балл"}/>
                            </div>

                            <div className={cls.formLine}>
                                <div className={cls.titleWrapper}>
                                    <HTag
                                        tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                        className={cn(cls.formTitle, cls.fixedWidth)}>
                                        Стоимость инфраструктуры для города
                                    </HTag>
                                    <PTag>
                                        социальной, транспортной, благоустройство
                                    </PTag>
                                </div>
                                <Input
                                    style={{marginLeft: "-65px", opacity: "50%"}}
                                    half={true}
                                    onChange={(text) => {
                                        setSocialValues((prevState) => ({
                                            ...prevState,
                                            cost: text
                                        }))
                                    }} value={
                                    // socialValues.cost
                                    "2"
                                } label={"балл"}/>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={cn(cls.form, cls.formRadio)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)} maxWidth={true}>
                            ниже выберите один из наиболее подходящих вариантов для оценки территории
                        </HTag>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Развитие локального бизнеса
                            </HTag>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="businessDevelopment1"
                                    name="businessDevelopment"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            businessDevelopment: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.businessDevelopment === '1'}
                                    text="В 15 мин. доступности находится менее 13 продуктовых и менее 16 непродуктовых торговых точек - 0 баллов"
                                />
                                <Radio
                                    id="businessDevelopment2"
                                    name="businessDevelopment"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            businessDevelopment: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.businessDevelopment === '2'}
                                    text="В 15 мин. доступности находится менее 13 продуктовых или менее 16 непродуктовых торговых точек - 1 балл"
                                />
                                <Radio
                                    id="businessDevelopment3"
                                    name="businessDevelopment"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            businessDevelopment: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.businessDevelopment === '3'}
                                    text="В 15 мин. доступности находится 13 продуктовых и 16 непродуктовых торговых точек - 2 балла"
                                />
                                <Radio
                                    id="businessDevelopment4"
                                    name="businessDevelopment"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            businessDevelopment: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.businessDevelopment === '4'}
                                    text="В 15 мин. доступности находится более 13 продуктовых или 16 непродуктовых торговых точек - 3 балла"
                                />
                                <Radio
                                    id="businessDevelopment5"
                                    name="businessDevelopment"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            businessDevelopment: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.businessDevelopment === '5'}
                                    text="В 15 мин. доступности находится более 13 продуктовых и более 16 непродуктовых торговых точек - 4 балла"
                                />
                                <Radio
                                    id="businessDevelopment6"
                                    name="businessDevelopment"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            businessDevelopment: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.businessDevelopment === '6'}
                                    text="В 5 мин. доступности находится более 13 продуктовых и более 16 непродуктовых торговых точек - 5 баллов "
                                />
                            </div>
                        </div>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Капитализация территории
                            </HTag>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="territoryCapitalization1"
                                    name="territoryCapitalization"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            territoryCapitalization: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.territoryCapitalization === '1'}
                                    text="Кадастровая стоимость земли ниже средней по городу - 0 баллов "
                                />
                                <Radio
                                    id="territoryCapitalization2"
                                    name="territoryCapitalization"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            territoryCapitalization: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.territoryCapitalization === '2'}
                                    text="Кадастровая стоимость на 0-5% выше средней по городу - 1 балл "
                                />
                                <Radio
                                    id="territoryCapitalization3"
                                    name="territoryCapitalization"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            territoryCapitalization: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.territoryCapitalization === '3'}
                                    text="Кадастровая стоимость на 6-10% выше средней по городу - 2 балла "
                                />
                                <Radio
                                    id="territoryCapitalization4"
                                    name="territoryCapitalization"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            territoryCapitalization: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.territoryCapitalization === '4'}
                                    text="Кадастровая стоимость на 11-20% выше средней по городу - 3 балла"
                                />
                                <Radio
                                    id="territoryCapitalization5"
                                    name="territoryCapitalization"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            territoryCapitalization: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.territoryCapitalization === '5'}
                                    text="Кадастровая стоимость на 21-30% выше средней по городу - 4 балла"
                                />
                                <Radio
                                    id="territoryCapitalization6"
                                    name="territoryCapitalization"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            territoryCapitalization: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.territoryCapitalization === '6'}
                                    text="Кадастровая стоимость более чем на 31% выше средней по городу - 5 баллов"
                                />
                            </div>
                        </div>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Количество функций на территории
                            </HTag>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="functionCount1"
                                    name="functionCount"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            functionCount: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.functionCount === '1'}
                                    text="Монофункция территории - 0 баллов"
                                />
                                <Radio
                                    id="functionCount2"
                                    name="functionCount"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            functionCount: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.functionCount === '2'}
                                    text="2-3 функции - 1 балл"
                                />
                                <Radio
                                    id="functionCount3"
                                    name="functionCount"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            functionCount: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.functionCount === '3'}
                                    text="4-5 функций - 2 балла"
                                />
                                <Radio
                                    id="functionCount4"
                                    name="functionCount"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            functionCount: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.functionCount === '4'}
                                    text="6-7 функций - 3 балла"
                                />
                                <Radio
                                    id="functionCount5"
                                    name="functionCount"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            functionCount: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.functionCount === '5'}
                                    text="8-9 фукнции - 4 балла"
                                />
                                <Radio
                                    id="functionCount6"
                                    name="functionCount"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            functionCount: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.functionCount === '6'}
                                    text="Более 9 функций - 5 баллов"
                                />
                            </div>
                        </div>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Доходы бюджета
                            </HTag>
                            <div style={{marginLeft: "20px"}} className={cls.radioWrapper}>
                                <Radio
                                    id="budgetRevenues1"
                                    name="budgetRevenues"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            budgetRevenues: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.budgetRevenues === '1'}
                                    text="Территория генерирует на 1 га налогов меньше, чем в среднем по городу - 0 баллов"
                                />
                                <Radio
                                    id="budgetRevenues2"
                                    name="budgetRevenues"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            budgetRevenues: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.budgetRevenues === '2'}
                                    text="Объем генирируемых налогов на 1 га на 0-5% превышает средний показатель по городу - 1 балл"
                                />
                                <Radio
                                    id="budgetRevenues3"
                                    name="budgetRevenues"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            budgetRevenues: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.budgetRevenues === '3'}
                                    text="Объем генирируемых налогов на 1 га на 6-10% превышает средний показатель по городу - 2 балла"
                                />
                                <Radio
                                    id="budgetRevenues4"
                                    name="budgetRevenues"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            budgetRevenues: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.budgetRevenues === '4'}
                                    text="Объем генирируемых налогов на 1 га на 11-20% превышает средний показатель по городу - 3 балла "
                                />
                                <Radio
                                    id="budgetRevenues5"
                                    name="budgetRevenues"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            budgetRevenues: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.budgetRevenues === '5'}
                                    text="Объем генирируемых налогов на 1 га на 21-30% превышает средний показатель по городу - 4 балла "
                                />
                                <Radio
                                    id="budgetRevenues6"
                                    name="budgetRevenues"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            budgetRevenues: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.budgetRevenues === '6'}
                                    text="Объем генирируемых налогов на 1 га более чем на 31% превышает средний показатель по городу - 5 баллов "
                                />
                            </div>
                        </div>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                Доходы от туризма
                            </HTag>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="tourismIncome1"
                                    name="tourismIncome"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            tourismIncome: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.tourismIncome === '1'}
                                    text="Отсутствие прироста количества посетителей - 0 баллов "
                                />
                                <Radio
                                    id="tourismIncome2"
                                    name="tourismIncome"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            tourismIncome: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.tourismIncome === '2'}
                                    text="Прирост до 10% - 1 балл"
                                />
                                <Radio
                                    id="tourismIncome3"
                                    name="tourismIncome"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            tourismIncome: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.tourismIncome === '3'}
                                    text="Прирост от 11 до 30% - 2 балла"
                                />
                                <Radio
                                    id="tourismIncome4"
                                    name="tourismIncome"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            tourismIncome: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.tourismIncome === '4'}
                                    text="Прирост от 31 до 70% - 3 балла "
                                />
                                <Radio
                                    id="tourismIncome5"
                                    name="tourismIncome"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            tourismIncome: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.tourismIncome === '5'}
                                    text="Прирост от 71 до 100% - 4 балла "
                                />
                                <Radio
                                    id="tourismIncome6"
                                    name="tourismIncome"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            tourismIncome: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.tourismIncome === '6'}
                                    text="Прирост более 100% - 5 баллов"
                                />
                            </div>
                        </div>
                        <div className={cls.formLine}>
                            <div className={cls.titleWrapper}>
                                <HTag
                                    tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                    className={cn(cls.formTitle, cls.fixedWidth)}>
                                    Стоимость инфраструктуры для города
                                </HTag>
                                <PTag>
                                    социальной, транспортной, благоустройство
                                </PTag>
                            </div>
                            <div className={cls.radioWrapper}>
                                <Radio
                                    id="infrastructureCost1"
                                    name="infrastructureCost"
                                    value="1"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            infrastructureCost: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.infrastructureCost === '1'}
                                    text="Расходы на создание инфраструктуры не заложены в бюджет - 0 баллов"
                                />
                                <Radio
                                    id="infrastructureCost2"
                                    name="infrastructureCost"
                                    value="2"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            infrastructureCost: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.infrastructureCost === '2'}
                                    text="Для реализации проекта городскому бюджету необходимо будет брать кредит - 1 балл"
                                />
                                <Radio
                                    id="infrastructureCost3"
                                    name="infrastructureCost"
                                    value="3"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            infrastructureCost: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.infrastructureCost === '3'}
                                    text="Реализация проекта через ГЧП - 4 балла "
                                />
                                <Radio
                                    id="infrastructureCost4"
                                    name="infrastructureCost"
                                    value="4"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            infrastructureCost: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.infrastructureCost === '4'}
                                    text="Затраты на городскую инфраструктуру, необходимую для реализации проекта, заложены в бюджет - 4 балла"
                                />
                                <Radio
                                    id="infrastructureCost5"
                                    name="infrastructureCost"
                                    value="5"
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFivethForm(prevState => ({
                                            ...prevState,
                                            infrastructureCost: event.target.value
                                        }))
                                    }}
                                    checked={fivethForm.infrastructureCost === '5'}
                                    text="Реализация проекта не требует привлечения бюджетных средств - 5 баллов"
                                />
                            </div>
                        </div>
                    </div>
                }
            </section>

            <section>
                <div className={cls.mentalWrapper}>
                    <HTag className={cn(cls.title, cls.lineTitle)}>
                        Ментальные ценности
                        <span className={cls.line}></span>
                    </HTag>
                    <HTag maxWidth={true} className={cn(cls.formTitle, cls.titleTip)}>
                        ниже подгружены данные на основании Чат-бота «Анкета твоего города»
                    </HTag>
                </div>
                <div className={cn(cls.form, cls.thirdForm)}>
                    <div className={cn(cls.formLine, cls.withLinks)}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            всего в голосовании приняло участие
                        </HTag>
                        <Input
                            style={{opacity: "50%", marginLeft: "20px"}}
                            disabled={true}
                            onChange={(text) => {
                                setfourthForm((prevState) => ({
                                    ...prevState,
                                    votes: text
                                }))
                            }}
                            value={"1320"} label={"чел."}/>
                        <div className={cls.links}>
                            <a target={"_blank"} className={cls.link} href="https://t.me/city_mood_bot">
                                <Telegram/>
                                <PTag className={cls.withBorder}>
                                    Перейти в чат-бот
                                </PTag>
                            </a>
                            <a target={"_blank"} className={cls.link} href="https://t.me/city_mood_bot">
                                <Link/>
                                <PTag>
                                    Загрузить подробную статистику опросов
                                </PTag>
                            </a>

                        </div>
                    </div>

                    <div className={cls.moreHeight}>
                        <div className={cls.formLine}>
                            <HTag
                                tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                                className={cn(cls.formTitle, cls.fixedWidth)}>
                                оценка привлекательности города
                            </HTag>
                            <div className={cls.rates}>
                                <Input
                                    half={true}
                                    disabled={true}
                                    onChange={(text) => {
                                        setfourthForm((prevState) => ({
                                            ...prevState,
                                            rate: text
                                        }))
                                    }} value={"3"} label={"балл"}/>
                                <PTag className={cls.ratesText}>
                                    СРедневзвешенная оценка
                                </PTag>
                            </div>
                        </div>
                            <div className={cn(cls.formLine, cls.formColumn)}>
                                <HTag
                                    style={{marginBottom: "-20px"}}
                                    className={cn(cls.formTitle, cls.titleTip)}>Задаваемые Вопросы</HTag>
                                <div className={cls.lessHeight}>
                                    <PTag>
                                        Как вы оцениваете положение города среди других городов (соседних, близлежащих)?
                                    </PTag>
                                    <PTag>
                                        Считаете ли вы, что данный квартал может быть более важным, ценным для города?
                                    </PTag>
                                </div>
                            <div className={cn(cls.formLine, cls.formColumn)}>
                                <HTag className={cn(cls.formTitle, cls.titleTip)}>
                                    Интерпретация полученного результата
                                </HTag>
                                <PTag className={cls.clarified}>
                                    Самодостаточный город, комфортное проживание, транспортная доступность лёгкая. Люди
                                    переезжают сюда из соседних городов, либо хотят переехать
                                </PTag>
                            </div>
                        </div>
                    </div>

                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            перенос идентичности объекта к субъектности
                        </HTag>
                        <div className={cls.rates}>
                            <Input
                                half={true}
                                disabled={true}
                                onChange={(text) => {
                                    setfourthForm((prevState) => ({
                                        ...prevState,
                                        rate: text
                                    }))
                                }} value={"5"} label={"балл"}/>
                            <PTag className={cls.ratesText}>
                                СРедневзвешенная оценка
                            </PTag>
                        </div>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>Задаваемые Вопросы</HTag>
                        <PTag>
                            Есть ли у вас истории или воспоминания, связанные с данным конкретным кварталом?
                            (Ассоциируете ли вы себя с тем или иным объектом в городе? Возможно территорией или
                            событием?)
                        </PTag>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>
                            Интерпретация полученного результата
                        </HTag>
                        <PTag className={cls.clarified}>
                            Самодостаточный город, комфортное проживание, транспортная доступность лёгкая. Люди
                            переезжают сюда из соседних городов, либо хотят переехать </PTag>
                    </div>

                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Бренд-идентичность
                        </HTag>
                        <div className={cls.rates}>
                            <Input
                                half={true}
                                disabled={true}
                                onChange={(text) => {
                                    setfourthForm((prevState) => ({
                                        ...prevState,
                                        identity: text
                                    }))
                                }} value={"5"} label={"балл"}/>
                            <PTag className={cls.ratesText}>
                                СРедневзвешенная оценка
                            </PTag>
                        </div>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>Нарративы вопросов</HTag>
                        <PTag>
                            Цепочка да-нет вопросов, позволяющая отследить
                            коммуникационный след территории, его температурную составляющую и интенсивность в
                            глазах
                            опрашиваемого
                        </PTag>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>
                            Интерпретация полученного результата
                        </HTag>
                        <PTag className={cls.clarified}>
                            Более 80% опрошенных в боте четко формулируют локальные особенности места,
                            выраженные в
                            событиях, местных уникальных товарах, культурных или территориальных особенностях.
                            Конкретные ассоциации можно посмотреть в отчете-расшифровке опроса.
                        </PTag>
                    </div>

                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Ассоциативность и субъективная привязанность к территории
                        </HTag>
                        <div className={cls.rates}>
                            <Input
                                disabled={true}
                                half={true}
                                onChange={(text) => {
                                    setfourthForm((prevState) => ({
                                        ...prevState,
                                        identity: text
                                    }))
                                }} value={"5"} label={"балл"}/>
                            <PTag className={cls.ratesText}>
                                СРедневзвешенная оценка
                            </PTag>
                        </div>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>Нарративы вопросов</HTag>
                        <PTag>
                            Есть ли у вас истории или воспоминания, связанные с данным конкретным кварталом?
                        </PTag>
                        <PTag>
                            Ассоциируете ли вы себя с тем или иным объектом в городе? Возможно территорией или
                            событием?
                        </PTag>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>
                            Интерпретация полученного результата
                        </HTag>
                        <PTag className={cls.clarified}>
                            Более 80% опрошенных имеют стойкую привязанность к рассматриваемой территории,
                            поделились
                            историями и воспоминаниями. Конкретные ассоциации можно посмотреть в
                            отчете-расшифровке
                            опроса.
                        </PTag>
                    </div>

                    <div className={cls.formLine}>
                        <HTag
                            tip={"Экономическая обеспеченность территории считается по формуле: запросы - налоговые поступления х 1,7"}
                            className={cn(cls.formTitle, cls.fixedWidth)}>
                            Сфера Культуры и Творческий кластер
                        </HTag>
                        <div className={cls.rates}>
                            <Input
                                half={true}
                                disabled={true}
                                onChange={(text) => {
                                    setfourthForm((prevState) => ({
                                        ...prevState,
                                        creativity: text
                                    }))
                                }} value={"3"} label={"балл"}/>
                            <PTag className={cls.ratesText}>
                                СРедневзвешенная оценка
                            </PTag>
                        </div>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>Нарративы вопросов</HTag>
                        <PTag>
                            Считаете ли вы ваш город креативным?
                            Много ли музеев, картинных галерей или галерей современного искусства, культурных
                            пространств? Популярны ли они? Погружены ли вы в их жизнь?
                        </PTag>
                        <PTag>
                            Вносит ли обсуждаемая территория вклад в креативность города?
                        </PTag>
                    </div>
                    <div className={cn(cls.formLine, cls.formColumn)}>
                        <HTag className={cn(cls.formTitle, cls.titleTip)}>
                            Интерпретация полученного результата
                        </HTag>
                        <PTag className={cls.clarified}>
                            ОТ 40 до 60% опрошенных описывают город как креативный и они или их знакомые
                            вовлечены в
                            культурную жизнь. Обсуждаемая территория, скорее всего, вносит опосредованный вклад
                            в
                            развитие креативной составляющей города.
                        </PTag>
                    </div>
                </div>
            </section>
            <div className={cls.result}>
                <button className={cls.resultButton}>
                    <RouterLink to="/result">
                        получить сценарий
                    </RouterLink>
                </button>
            </div>
        </main>
    )
};

