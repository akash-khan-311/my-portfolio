/* eslint-disable react/prop-types */
import "./ServiceCard.css";
const ServiceCard = ({ service }) => {
  const { title, image, description } = service;
  console.log(title, image, description);
  return (
    <div>
      <div className="card">
        <div className="flex justify-start my-3">
          <img src={image} alt="" />
        </div>
        <p className="card-title">{title}</p>
        <p className="small-desc">{description}</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </div>
  );
};
//

export default ServiceCard;
