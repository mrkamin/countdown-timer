import React, {useState, useEffect} from "react";

const Timer = ({duration}) => {
    const [time, setTime] = useState(duration);
    const [running, setRuning] = useState(true);

    useEffect(() => {
        let timerId;

        if (running && time > 0) {
            timerId = setTimeout(() => {
                setTime(time - 1000);
            }, 1000)
        }
        return () => {
            clearTimeout(timerId);
        }
        
    }, [time, running]);

    const gietFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds/1000));
        let total_minutes = parseInt(Math.floor(total_seconds/60));
        let total_hours = parseInt(Math.floor(total_minutes/60));
        let total_days = parseInt(Math.floor(total_hours/24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours%24);

        return `${total_days}: ${hours}: ${minutes}: ${seconds} `
    };

    const stopTimer = () => {
        setRuning(false)
    };

    const restartTimer = () => {
        setTime(duration);
        setRuning(true);
    };
    
    return (
   <div><div>{gietFormattedTime(time)}</div>
    <button onClick={stopTimer}>Stop Timer</button>
    <button onClick={restartTimer}>Restart Timer</button>
    </div>
    );
};

export default Timer