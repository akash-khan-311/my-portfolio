/* eslint-disable react/prop-types */
import "./MyBtn.css";

const MyBtn = ({ text,  url }) => {
  return (
    <div>
      <a href={url ? url : '#'} className="btn">
        <svg width={277} height={62}>
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stopColor="#FF8282" />
              <stop offset="100%" stopColor="#E178ED" />
            </linearGradient>
          </defs>
          <rect x={5} y={5} rx={25} fill="none" width={266} height={50} />
        </svg>
        
        <span>{text}</span>
      </a>
    </div>
  );
};

export default MyBtn;
