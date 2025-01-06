import React, { useEffect, useState } from "react";

export default function Users() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchUsersData() {
    try {
      setPending(true);
      const responseData = await fetch("https://dummyjson.com/users");
      const resultantData = await responseData.json();
      //   console.log(resultantData);

      if (resultantData?.users) {
        setListOfUsers(resultantData.users);
        setPending(false);
      } else {
        setListOfUsers([]);
        setPending(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  function fetchUserOnClick() {
    fetchUsersData();
    // setPending(true);
  }

  // useEffect(() => {
  //   fetchUsersData();
  // }, []);
  console.log(listOfUsers);
  if (pending) return <p>fetching users wait please</p>;
  return (
    <div>
      <h2> All Users List</h2>
      <button onClick={fetchUsersData}>Click to fetch</button>
      <ul>
        {listOfUsers && listOfUsers.length > 0 ? (
          listOfUsers.map((items) => (
            <li key={items.id}>
              <p>
                {items.firstName} {items.lastName}
              </p>
            </li>
          ))
        ) : (
          <p>no users found </p>
        )}
      </ul>
    </div>
  );
}
