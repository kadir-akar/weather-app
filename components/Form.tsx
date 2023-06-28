"use client";
import Search from "./Search";
import Forecast from "./Forecast";
import { forecastType } from "../types";
import useForecast from "../hooks/useForecast";

const Form = (): JSX.Element => {
  const { term, options, onInputChange, onSubmit, onOptionSelect, forecast } =
    useForecast();
  return (
    <div>
      {forecast ? (
        <Forecast data={forecast as forecastType} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onOptionSelect={onOptionSelect}
        />
      )}
    </div>
  );
};

export default Form;
