import {Route, Routes} from "react-router-dom";
import {MainPage, ResultPage} from "@/pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
        </Routes>
    )
}

export default App
