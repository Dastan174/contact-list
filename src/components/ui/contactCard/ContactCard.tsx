import { useNavigate } from "react-router-dom";
import "./contactCard.css";

interface CardProps {
  email: string;
  avatar: string;
  id: number;
  deleteContact: (id: number) => void;
}

const ContactCard = ({ avatar, email, deleteContact, id }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={avatar} alt="" />
      <div className="title">
        <div className="info">
          <h2>{email}</h2>
        </div>
        <div className="btns">
          <button onClick={() => deleteContact(id)}>delete</button>
          <button onClick={() => navigate(`/edit/${id}`)}>edit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
