import { useState } from "react";
import { MetricContext } from "./metric-context";

function MetricProvider({children}){
    const [metric, setMetric] = useState('metric');

    return(
        <MetricContext.Provider value={[metric, setMetric]}>
            {children}
        </MetricContext.Provider>
    )
}

export default MetricProvider;
