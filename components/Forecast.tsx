import React from "react";
import { forecastType, optionType } from "@/types";

type Props = {
  data: forecastType;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
);

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];

  return (
    <div
      className="
        flex flex-col items-center justify-center
        p-2
        m-2
        bg-opacity-80
        bg-blue-100
        rounded-lg
        shadow-lg
        w-auto
        h-auto
        mt-10

    "
    >
      <div
        className="
        flex flex-col items-center justify-center
        relative
       "
      >
        <button
          onClick={() => window.location.reload()}
          className="
          flex items-center justify-center
          p-2
          m-2
          bg-opacity-80
          bg-blue-100
          rounded-lg
          shadow-lg
          w-auto
          h-auto
          absolute
          top-0
          right-0
          mt-2
          mr-2
          hover:bg-blue-100
      "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          className="
        flex flex-col items-center  justify-center
        p-2
        m-2
      "
        >
          <h2 className="font-bold text-x text-blue-800">
            {data.name}
            <span className="ml-2">{data.country}</span>
          </h2>
          <h2
            className="
        flex items-center justify-center
        text-xl

      "
          >
            <Degree temp={Math.round(today.main.temp)} />
          </h2>
          <div
            className="
          flex flex-col items-center justify-center
          p-2
          m-2
          bg-opacity-80
          bg-blue-100
          rounded-lg
          shadow-lg
          w-auto
          h-auto
          m-5
          text-center
          p-5
        "
          >
            <h2 className="text-sm">Humidity</h2>
            <h2 className="text-xl">{today.main.humidity}%</h2>
            <h2 className="text-sm">Wind</h2>
            <h2 className="text-xl">{today.wind.speed} km/h</h2>
          </div>
          <p className="text-sm">
            {today.weather[0].main} - {today.weather[0].description}
          </p>
          <p className="text-sm">
            H:
            <Degree temp={Math.round(today.main.temp_max)} /> L:
            <Degree temp={Math.round(today.main.temp_min)} />
          </p>
          <div className="flex items-center">
            {data.list.map((item, index) => {
              if (index === 0) return null;
              return (
                <div
                  key={item.dt}
                  className="
              flex flex-col items-center justify-center
              p-2
              m-2
              bg-opacity-80
              bg-blue-100
              rounded-lg
              shadow-lg
              w-auto
              h-auto

            "
                >
                  <h2 className="text-sm">
                    {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </h2>
                  <h2 className="text-xl">
                    <Degree temp={Math.round(item.main.temp)} />
                  </h2>
                  <p className="text-sm">
                    {item.weather[0].main} - {item.weather[0].description}
                  </p>
                  <p className="text-sm">
                    H:
                    <Degree temp={Math.round(item.main.temp_max)} /> L:
                    <Degree temp={Math.round(item.main.temp_min)} />
                  </p>
                  <img
                    className="w-10 h-10 bg-blue-300 rounded-xl mt-3 "
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
