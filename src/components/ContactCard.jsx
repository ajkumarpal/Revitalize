import React from 'react';
import MaleImg from '../assets/male.png'
import FemaleImg from '../assets/female.png'

const ContactCard = ({ firstName, lastName, email, age,phone,gender }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md hero container max-w-screen-lg mx-auto flex" style={{ backgroundColor: '#FFF' }}>
      <div style={{ borderRight: '1px solid #808080bf' }}>
      <img src={gender == 'Male' ? MaleImg : FemaleImg} alt={firstName} className="w-16 h-16 rounded-full mb-1 justify-centre mx-5" />
      </div>
      <div>
      <h2 className="text-md font-semibold mx-2">Name: &nbsp;&nbsp;<span style={{ color: '#000000ab', fontWeight: 'normal' }}>{firstName} {lastName}</span></h2>
      <h2 className="text-md font-semibold mx-2">Age: &nbsp;&nbsp;<span style={{ color: '#000000ab', fontWeight: 'normal' }}>{age}</span></h2>
      <h2 className="text-md font-semibold mx-2">Email: &nbsp;&nbsp;<span style={{ color: '#000000ab', fontWeight: 'normal' }}><a href={`mailto:${email}`}>{email}</a></span></h2>
      <h2 className="text-md font-semibold mx-2">Phone: &nbsp;&nbsp;<span style={{ color: '#000000ab', fontWeight: 'normal' }}><a href={`tel: +91${phone}`}>{phone}</a></span></h2>
      </div>

      {/* <p className="text-gray-600 mb-2">{email}</p> */}
      {/* <p className="text-gray-600">{phone}</p> */}
    </div>
  );
};

export default ContactCard;