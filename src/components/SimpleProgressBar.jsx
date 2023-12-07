

function SimpleProgressBar({ completed, color }) {
    return (
        <div className="flex items-center w-full h-[5px] bg-gray-300 rounded-[20px]">
            <span className={`block bg-${color}-500 rounded-[20px] h-[5px] w-[${completed}%]`}></span>
        </div>
    );
}

export default SimpleProgressBar;