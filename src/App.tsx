import {Route, Routes} from "react-router-dom";
import {MainPage, ResultPage} from "@/pages";
import {useEffect, useState} from "react";
import cls from "./App.module.scss"
import preloader from "@/assets/images/preload.gif"
function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 2000)
    }, []);
    if (isLoaded) {
        return (
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/result" element={<ResultPage/>}/>
            </Routes>
        )
    } else {
        return (
            <div className={cls.page}>
                <img src={preloader} alt="preload"/>
            </div>
        )
    }

}

export default App
