import axios from "axios";
import { useState } from "react";

const Add = () => {
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const postContact = async () => {
    setIsPosting(true);
    try {
      await axios.post(
        "https://api-crud.elcho.dev/api/v1/f6eae-ddbe7-dfc09/contact-todo",
        {
          email,
          avatar,
        },
      );
      setIsPosting(false);
    } catch (error: any) {
      console.log(error.message);
      setIsPosting(false);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setAvatar(e.target.value)}
        type="text"
        placeholder="avatar"
      />
      <button onClick={postContact}>{isPosting ? "..." : "Add"}</button>
    </div>
  );
};

export default Add;
