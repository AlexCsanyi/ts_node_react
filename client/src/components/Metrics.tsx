type TypeMetricsProps = {
    metrics: string;
};

function Metrics({ metrics }: TypeMetricsProps) {
    return (
        <pre>
            <code>{metrics}</code>
        </pre>
    );
}

export default Metrics;
