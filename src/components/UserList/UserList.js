import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=12");
      setUsers((prev) => [...prev, ...res.data.results]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h2>InstaBoard Users</h2>
      <div className="user-list">
        {users.map((user, index) => (
          <UserCard
            key={index}
            picture={user.picture.large}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
          />
        ))}
      </div>
      <button className="load-btn" onClick={fetchUsers}>Load More</button>
    </div>
  );
}

export default UserList;
const [search, setSearch] = useState("");

const filteredUsers = users.filter(user =>
  `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase())
);

return (
  <>
    <input
      type="text"
      placeholder="Search by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
    <div className="user-list">
      {filteredUsers.map(...)}
    </div>
  </>
);
