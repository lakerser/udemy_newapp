import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight = '0%';
    props.maxValue > 0 &&
        (barFillHeight =
            Math.round((props.maxValue / props.maxValue) * 100) + '%');
    return (
        <div className="chart-bar">
            <div className="chart-bar-inner">
                <div
                    style={{ height: barFillHeight }}
                    className="chart-bar__fill"
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};
