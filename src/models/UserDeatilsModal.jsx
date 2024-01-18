import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "../components/ContactCard";

const UserDeatilsModal = ({ closeForm }) => {
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[age, setAge] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[gender, setGender] = useState("")
    const [Data, setData] = useState(null);
    const [Password, setPassword] = useState(null);
    const [IsPassword, setIsPassword] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://revitalize-contact-form-default-rtdb.firebaseio.com/revitalize-contact-form.json');
            // setData(response.data);
            console.log("response.dataresponse.data",response.data);
            const users = response.data;
            let arr = [];
            for (const key in users) {
                let user = users[key];
                arr.push(user);
                setData(arr)
            }
          } catch (error) {
          } 
        };
    
        fetchData();
      }, []);

      console.log("fsgdfsgahdhasd", Data);

      const handleVerify = () =>{
        if(Password == 2000){
          setIsPassword(true)
        }
        else{
          setIsPassword(false)
        }
      }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="popup-form absolute mt-12 text-black w-full md:w-100">
    <div className="w-full space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Appointments
          </h1>

         {IsPassword == true ? '' :  <div className="flex items-center justify-center">
          <div class="form">
  {/* <span class="close">X</span> */}

  <div class="info">
  <span class="title">Passcode</span>
<p class="description">Please enter your code. </p>
   </div>
    <div class="inputs">
    <input placeholder="" type="password" maxlength="4" onChange={(e)=> setPassword(e.target.value)} />
    {/* <input placeholder="" type="tel" maxlength="1" />
    <input placeholder="" type="tel" maxlength="1" />
    <input placeholder="" type="tel" maxlength="1" /> */}
  </div>
  <button style={{ marginTop: '10px' }} className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={(e)=> handleVerify()}
            >
              Show
            </button>
</div>
          </div>}
          
         {IsPassword &&  <div className="flex flex-wrap">
  {Data?.length>0 ?  Data?.map((val, index) => (
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
      <ContactCard
        firstName={val?.firstName}
        lastName={val?.lastName}
        age={val?.age}
        email={val?.email}
        phone={val?.phoneNumber}
        gender={val?.gender}
      />
    </div>
  )) : <h1>No Data Available</h1>}
</div>
}
          
          <div className="flex gap-5">
           
            <button
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={(e)=> closeForm()} style={{ float: 'right', paddingTop: '10px' }}
            >
              Close
            </button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default UserDeatilsModal;
