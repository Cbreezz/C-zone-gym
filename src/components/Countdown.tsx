import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

// ✅ Moved outside for ESLint compliance
const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  return timeLeft;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // ✅ ESLint is happy now

  return (
    <div className="flex gap-4 text-white text-2xl md:text-4xl font-bold">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span>{value}</span>
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
