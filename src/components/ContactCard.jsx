import React from 'react';

const ContactCard = ({ name, portrait, email, phone }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md hero container max-w-screen-lg mx-auto flex" style={{ backgroundColor: '#FFF' }}>
      <div style={{ borderRight: '1px solid #808080bf' }}>
      <img src={portrait} alt={name} className="w-16 h-16 rounded-full mb-1 justify-centre mx-5" />
      </div>
      <div>
      <h2 className="text-md font-semibold mx-2">Name: &nbsp;&nbsp;<span style={{ color: '#808080bf', fontWeight: 'normal' }}>{name}</span></h2>
      <h2 className="text-md font-semibold mx-2">Age: &nbsp;&nbsp;<span style={{ color: '#808080bf', fontWeight: 'normal' }}>{42}</span></h2>
      <h2 className="text-md font-semibold mx-2">Email: &nbsp;&nbsp;<span style={{ color: '#808080bf', fontWeight: 'normal' }}>{'test@email.com'}</span></h2>
      <h2 className="text-md font-semibold mx-2">Phone: &nbsp;&nbsp;<span style={{ color: '#808080bf', fontWeight: 'normal' }}>{'+91 9876543212'}</span></h2>
      </div>

      {/* <p className="text-gray-600 mb-2">{email}</p> */}
      {/* <p className="text-gray-600">{phone}</p> */}
    </div>
  );
};

export default ContactCard;