import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({});
  const getProfile = async (id) => {
    const response = await fetch(`http://localhost:4000/api/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    try {
      const res = await response.json();
      setUser(res.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile("617c1cc18c5736987f11fc20'");
  }, []);

  // console.log(user);

  return (
    <div>
      <h2>hello {user.name}</h2>
      {/* {getProfile('617c1cc18c5736987f11fc20')} */}
    </div>
  );
};

export default Profile;
