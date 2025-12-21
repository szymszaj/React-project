import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

function useUser(id: number) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then(setUser);
  }, [id]);

  return user;
}

export default useUser;
