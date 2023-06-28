import React from "react";
import { useState, useEffect } from "react";
import { optionType, forecastType } from "@/types";

const useForeccast = () => {
  const [term, setTerm] = React.useState<string>("");
  const [options, setOptions] = React.useState<string[]>([]);
  const [city, setCity] = React.useState<optionType | null>(null);
  const [forecast, setForecast] = React.useState<null>(null);

  const getSearchOptions = async (value: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}
        `
    )
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setTerm(value);
    if (value === "") return setOptions([]);
    getSearchOptions(value);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };
  const getForecast = async (city: optionType) => {
    fetch(`
      https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 5),
        };
        setForecast(forecastData);
      });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!city) return;
    getForecast(city);
    setOptions([]);
    setTerm("");
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);
  return {
    term,
    options,
    onInputChange,
    onSubmit,
    onOptionSelect,
    forecast,
  };
};

export default useForeccast;
