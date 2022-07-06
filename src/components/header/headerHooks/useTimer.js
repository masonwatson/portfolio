import React, { useState, useEffect } from "react";

export default function useTimer() {
  const [timerYears, setTimerYears] = useState();
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    let isMounted = true;
    const startDate = new Date("January 7, 2016 11:00:00").getTime();

    const updateTime = () => {
      setInterval(() => {
        const currentDate = new Date().getTime();

        const totalSeconds = (currentDate - startDate) / 1000;

        const years = Math.floor(totalSeconds / 3600 / 24 / 365);
        const days = Math.floor(totalSeconds / 3600 / 24) % 365;
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        setTimerYears(years);
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      });
    };

    if (isMounted) updateTime();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <span>
      {timerYears} years, {timerDays} days, {timerHours} hours, {timerMinutes}{" "}
      minutes, and {timerSeconds} seconds
    </span>
  );
}
