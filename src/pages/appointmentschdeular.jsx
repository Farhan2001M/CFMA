import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Separate components for each form
const BookForm = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newAppointment = {
      id: data.length + 1,
      name: name,
      date: date,
      time: time,
    };
    setData([...data, newAppointment]);
    setName("");
    setDate("");
    setTime("");
    console.log("i runnn");
    console.log(data);
    toast.success("Appointment added successfully!");
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="font-bold text-[18px]">Book Form</h2>
      <form
        className="flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className="px-2 py-3 border min-w-[500px] shadow-md"
        />
        <br />
        <input
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
          className="px-2 py-3 border min-w-[500px] shadow-md"
        />
        <br />
        <input
          type="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="px-2 py-3 border min-w-[500px] shadow-md"
        />
        <br />
        <button
          type="submit"
          className=" bg-black hover:bg-red-500 text-white px-8 py-2 rounded-sm font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// const RescheduleForm = () => {
//   return (
//     <div>
//       <h2>Reschedule Form</h2>
//       <form>
//         <label>
//           Appointment ID:
//           <input type="text" />
//         </label>
//         <br />
//         <label>
//           New Date:
//           <input type="date" />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

const DeleteForm = () => {
  return (
    <div>
      <h2>Delete Form</h2>
      <form>
        <label>
          Appointment ID:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Table = ({ data, setData }) => {
  const onDelete = (id) => {
    setData((prevData) =>
      prevData.filter((appointment) => appointment.id !== id + 1)
    );
    console.log("i rundfhgfd ");
    console.log("data", data);
    toast.error("Appointment deleted successfully!");
  };

  return (
    <div className="flex justify-center items-center ">
      <table className=" bg-white shadow-sm border w-full max-w-[600px]">
        <thead className="">
          <tr className="border-b font-normal text-[14px] ">
            {" "}
            <th className="py-2">Name</th>
            <th className="py-2">Date</th>
            <th className="py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <tr className=" font-normal text-[14px] text-center border-b ">
              {" "}
              <td className="py-2">{appointment.name}</td>
              <td className="py-2">{appointment.date}</td>
              <td className="py-2">{appointment.time}</td>
              <td className="py-2">
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const Appointmentschdeular = ({ data, setData }) => {
  const [activeItem, setActiveItem] = useState("Book");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  // Function to render the active form
  const renderActiveForm = () => {
    switch (activeItem) {
      case "Book":
        return <BookForm data={data} setData={setData} />;
      //   case "Reschedule":
      //     return <RescheduleForm data={data} setData={setData} />;
      case "Delete":
        return <DeleteForm data={data} setData={setData} />;
      case "allApointments":
        return <Table data={data} setData={setData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[80vh]">
      <div className="flex gap-12 justify-center items-center py-8">
        <p
          className={`text-2xl font-bold text-center p-4 rounded-md cursor-pointer ${
            activeItem === "Book"
              ? "bg-red-500 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => handleItemClick("Book")}
        >
          Book An Appointment
        </p>
        <p
          className={`text-2xl font-bold text-center p-4 rounded-md cursor-pointer ${
            activeItem === "allApointments"
              ? "bg-red-500 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => handleItemClick("allApointments")}
        >
          All Appointments
        </p>
        {/* <p
          className={`text-2xl font-bold text-center p-4 rounded-md cursor-pointer ${
            activeItem === "Reschedule"
              ? "bg-red-500 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => handleItemClick("Reschedule")}
        >
          Reschedule An Appointment
        </p> */}
        {/* <p
          className={`text-2xl font-bold text-center p-4 rounded-md cursor-pointer ${
            activeItem === "Delete"
              ? "bg-red-500 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => handleItemClick("Delete")}
        >
          delete
        </p> */}
      </div>

      {renderActiveForm()}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Appointmentschdeular;
