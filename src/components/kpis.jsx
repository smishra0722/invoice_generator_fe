import React from 'react'

const KPIs = () => {
    return <div className={'home-kpis'}>
        {[{title: 'Net Transactions', value: '$30,000'},{title: 'Monthly', value: '$30,000'},{title: 'Weekly', value: '$30,000'}].map((value) => {
            return <div className={'kpi'}>
                <h1>{value.title}</h1>
                <div>{value.value}</div>
            </div>
        })}
    </div>
}

export default KPIs