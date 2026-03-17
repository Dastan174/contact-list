import { useEffect, useState } from "react";
import ContactCard from "../../ui/contactCard/ContactCard";
import axios from "axios";

interface GetResponse {
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: IData[];
}
interface IData {
  _id: number;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

const List = () => {
  const [contacts, setContacts] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getContacts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<GetResponse>(
        "https://api-crud.elcho.dev/api/v1/f6eae-ddbe7-dfc09/contact-todo",
      );
      setContacts(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      await axios.delete(
        `https://api-crud.elcho.dev/api/v1/f6eae-ddbe7-dfc09/contact-todo/${id}`,
      );
      getContacts();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  if (isLoading) {
    return (
      <center style={{ marginTop: "40px" }}>
        <h1>Loading...</h1>
      </center>
    );
  }
  return (
    <section id="list">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
          className="list"
        >
          {contacts.map((item) => (
            <ContactCard
              key={item._id}
              avatar={item.avatar}
              email={item.email}
              deleteContact={deleteContact}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
