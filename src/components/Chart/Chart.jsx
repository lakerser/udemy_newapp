const Chart = props => {
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoints => (
                <ChartBar
                    key={dataPoints.lable}
                    value={dataPoints.value}
                    maxValue={null}
                    lable={dataPoints.lable}
                />
            ))}
        </div>
    );
};

export default Chart;
