import React, { useState } from 'react';

export const ForecastContext = React.createContext({
  forecast: [],
  setForecast: () => {},
});

const ForecastProvider = ({ children }) => {
  const [forecastState, setForecastState] = useState([]);

  const defaultState = {
    forecast: forecastState,
    setForecast: data => setForecastState(data),
  };

  return (
    <ForecastContext.Provider value={defaultState}>
      {children}
    </ForecastContext.Provider>
  );
};

export default ForecastProvider;
