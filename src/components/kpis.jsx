import React from "react";
import { FormattedNumber } from "react-intl";

const KPIs = () => {
  return (
    <div className={"home-kpis"}>
      {[
        { title: "Net Transactions", value: 30000 },
        { title: "Monthly", value: 2400 },
        { title: "Weekly", value: 1500 },
      ].map((value) => {
        return (
          <div className={"kpi"}>
            <h1>{value.title}</h1>
            <div>
              <FormattedNumber
                style={"currency"}
                currency={"INR"}
                value={value.value}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPIs;
