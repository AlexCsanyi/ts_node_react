import { useEffect, useState } from "react";
import "./App.css";
import Metrics from "./components/Metrics";
import { fetchMetrics, fetchServerTime } from "./utilities/fetchers.utility";

function App() {
    const [serverTime, setServerTime] = useState(0);
    const [metrics, setMetrics] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetchServerTime(setServerTime);
        fetchMetrics(setMetrics);
    }, []);

    useEffect(() => {
        const interval = setInterval(async () => {
            fetchServerTime(setServerTime);
            fetchMetrics(setMetrics);
            setCounter(() => 0);
        }, 30000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(
            () => setCounter((prevCount) => prevCount + 1),
            1000
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="hero">
            <div id="card-1" className="card">
                <p>Server time in epoch seconds: </p>
                <p>{serverTime}</p>
                <p>Time passed since last server time requested: </p>
                <p>00:00:{("00" + counter).slice(-"00".length)}</p>
            </div>
            <div id="card-2" className="card">
                <Metrics metrics={metrics} />
            </div>
        </div>
    );
}

export default App;
