import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import "./TimerWidget.css";
import { useEffect, useState } from "react";

function TimerWidget() {
  const [hour, setHour] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")
  const [timer, setTimer] = useState({})
  const [totalSec, setTotalSec] = useState(0)
  const [startTimer, setStartTimer] = useState(false)

  useEffect(() => {
    if (!startTimer) return

    const interval = setInterval(() => {
      setTotalSec(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setStartTimer(false);
          setHour("00")
          setMinutes("00")
          setSeconds("00")

          setTimer({
            hr: "00",
            min: "00",
            sec: "00",
          });

          return 0;
        }

        const next = prev - 1;

        setTimer({
          hr: String(Math.floor(next / 3600)).padStart(2, "0"),
          min: String(Math.floor((next % 3600) / 60)).padStart(2, "0"),
          sec: String(next % 60).padStart(2, "0"),
        });

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);

  }, [startTimer, totalSec])
  
  const handleBtnClick = () => {
    const totalSeconds = Number(hour) * 3600 + Number(minutes) * 60 + Number(seconds)

    setTotalSec(totalSeconds)
    setStartTimer(!startTimer)
  }

  const increaseTime = (name) => {
    switch(name) {
      case "hour":
        setHour(prev => {
          const value = Number(prev);

          if (value >= 11) return "00"

          return String(value + 1).padStart(2, "0");
        });
        break

      case "minutes":
        setMinutes(prev => {
          const value = Number(prev)

          if (value > 58) return "00"

          return String(value + 1).padStart(2, "0")
        })
        break

      case "seconds":
        setSeconds(prev => {
          const value = Number(prev)

          if (value > 58) return "00"

          return String(value + 1).padStart(2, "0")
        })
        break

      default:
        break
    }
  }

  const decreaseTime = (name) => {
    switch(name) {
      case "hour":
        setHour(prev => {
          const value = Number(prev)

          if (value === 0) return "11"

          return String(value - 1).padStart(2, "0")
        })
        break

      case "minutes":
        setMinutes(prev => {
          const value = Number(prev)

          if (value <= 0) return "59"

          return String(value - 1).padStart(2, "0")
        })
        break

      case "seconds":
        setSeconds(prev => {
          const value = Number(prev)

          if (value <= 0) return "59"

          return String(value - 1).padStart(2, "0")
        })
        break

      default:
        break
    }
  }

  return (
    <div className="timer-widget">

      <div className="timer-progress">

        <svg viewBox="0 0 200 200" className="progress-ring">
          <circle
            className="ring-bg"
            cx="100"
            cy="100"
            r="78"
          />

          <circle
            className="ring-progress"
            cx="100"
            cy="100"
            r="78"
          />
        </svg>

        <div className="timer-time">
          {Object.keys(timer).length === 0 ? `${hour}:${minutes}:${seconds}` : `${timer.hr}:${timer.min}:${timer.sec}`}
        </div>

      </div>

      <div className="timer-controls">

        <div className="time-box">
          <h3>Hours</h3>

          <button type="button" onClick={() => increaseTime("hour")}>
            <FaCaretUp />
          </button>

          <h1>{hour}</h1>

          <button type="button" onClick={() => decreaseTime("hour")}>
            <FaCaretDown />
          </button>
        </div>

        <span>:</span>

        <div className="time-box">
          <h3>Minutes</h3>

          <button type="button" onClick={() => increaseTime("minutes")}>
            <FaCaretUp />
          </button>

          <h1>{minutes}</h1>

          <button type="button" onClick={() => decreaseTime("minutes")}>
            <FaCaretDown />
          </button>
        </div>

        <span>:</span>

        <div className="time-box">
          <h3>Seconds</h3>

          <button type="button" onClick={() => increaseTime("seconds")}>
            <FaCaretUp />
          </button>

          <h1>{seconds}</h1>

          <button type="button" onClick={() => decreaseTime("seconds")}>
            <FaCaretDown />
          </button>
        </div>

        <button type="button" onClick={() => handleBtnClick()} className="start-btn">
          {startTimer ? "Stop" : "Start"}
        </button>

      </div>

    </div>
  );
}

export default TimerWidget;