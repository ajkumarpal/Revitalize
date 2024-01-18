import React from "react";
import ContactCard from "./ContactCard";

const UserInformationList = () => {
    const contacts = [
        // { name: 'John Doe', portrait: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60', email: 'john@example.com', phone: '123-456-7890' },
        // Add more contacts
      ];
  return (
    <>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {contacts.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </div>
    </>
  );
};

export default UserInformationList;
