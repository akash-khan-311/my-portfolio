/* eslint-disable react/prop-types */
import "./MyBtn.css";

const MyBtn = ({ text, adress }) => {
  return (
    <div>
      <a
        href={adress ? adress : "#"}
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        <svg width={277} height={62}>
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stopColor="#FF8282" />
              <stop offset="100%" stopColor="#E178ED" />
            </linearGradient>
          </defs>
          <rect x={5} y={5} rx={25} fill="none" width={266} height={50} />
        </svg>
        {/*<span>Voir mes réalisations</span>*/}
        <span>{text}</span>
      </a>
    </div>
  );
};

export default MyBtn;
