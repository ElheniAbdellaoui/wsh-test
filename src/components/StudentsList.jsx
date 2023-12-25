import React from "react";

const StudentsList = () => {
  let students = [
    {
      id: Math.random(),
      name: "heni",
      att: "is présent",
      url: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740",
    },
    {
      id: Math.random(),
      name: "davy",
      att: "is présent",
      url: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740",
    },
    {
      id: Math.random(),
      name: "mohamed",
      att: "is présent",
      url: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740",
    },
    {
      id: Math.random(),
      name: "ala",
      att: "is présent",
      url: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740",
    },
    {
      id: Math.random(),
      name: "ahmed",
      att: "is présent",
      url: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740",
    },
  ];
  return (
    <div>
      {students.map((el) => (
        <div
          style={{
            backgroundColor: "blue",
            border: "2px solid black ",
            borderRadius: "10px",
            margin: "25px",
          }}
        >
          <img src={el.url} width={"150px"} alt="" />
          <h1>{el.name}</h1>
          <p>{el.att}</p>
          <p>{el.id}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentsList;
