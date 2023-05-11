export const fetchServerTime = async (callBack: (time: number) => void) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/time`, {
            headers: {
                Authorization: import.meta.env.VITE_SECRET_API_KEY,
            },
        });
        const json = await response.json();
        callBack(json.epoch);
    } catch (error) {
        console.log("error", error);
    }
};

export const fetchMetrics = async (callBack: (metrics: string) => void) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/metrics`,
            {
                headers: {
                    Authorization: import.meta.env.VITE_SECRET_API_KEY,
                },
            }
        );
        const text = await response.text();
        callBack(text);
    } catch (error) {
        console.log("error", error);
    }
};
