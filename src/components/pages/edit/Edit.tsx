import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface GetResponse {
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: IData;
}
interface IData {
  _id: number;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

const Edit = () => {
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [contact, setContact] = useState<IData | null>(null);
  const { id } = useParams();

  const getOneContact = async () => {
    try {
      const response = await axios.get<GetResponse>(
        `https://api-crud.elcho.dev/api/v1/f6eae-ddbe7-dfc09/contact-todo/${id}`,
      );
      setContact(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const updateContact = async (
    id: string | undefined,
    newContact: Partial<IData>,
  ) => {
    try {
      await axios.patch(
        `https://api-crud.elcho.dev/api/v1/f6eae-ddbe7-dfc09/contact-todo/${id}`,
        newContact,
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const handleSave = () => {
    const obj = {
      email: !email ? contact?.email : email,
      avatar: !avatar ? contact?.avatar : avatar,
    };

    updateContact(id, obj);
  };
  useEffect(() => {
    getOneContact();
  }, []);

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="new email"
        defaultValue={contact?.email}
      />
      <input
        onChange={(e) => setAvatar(e.target.value)}
        type="text"
        placeholder="new avatar"
        defaultValue={contact?.avatar}
      />
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default Edit;
