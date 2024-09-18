import { useEffect, useState } from "react";
import { getTime } from "../utils/utils";
import { motion } from "framer-motion";

export const DigitalClock = () => {
  const {hours, minutes, seconds, period} = getTime();

  const [date, setDate] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    period: period
  });

  useEffect(() => {
    const intervalID = setInterval(() => {
      const {hours, minutes, seconds, period} = getTime();
      setDate({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        period: period
      });
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const animationVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const renderAnimatedDigits = (digits: string, classes = '') => {
    return digits.split("").map((digit, index) => (
      <motion.span
        key={digit + index}
        variants={animationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className={`${classes} w-[1ch]`}
      >
        {digit}
      </motion.span>
    ));
  };

  return (
    <div className="flex justify-center items-center h-screen p-4 bg-slate-900">
      <div className="text-center text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white  flex gap-2">
        {renderAnimatedDigits(date.hours)}
        <span>:</span>
        {renderAnimatedDigits(date.minutes)}
        <span>:</span>
        {renderAnimatedDigits(date.seconds)}
        {renderAnimatedDigits(date.period, 'ml-3 font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow-400')}
      </div>
    </div>
  );
};
