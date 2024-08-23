import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('SUPABASE_SAMPLE').select('*');
      if (error) {
        console.log(`error=>`, error);
      }
      console.log(data);
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="FatchData">
      <h3>유저정보</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h5>이름 : {user.name}</h5>
            <h5>나이 : {user.age}</h5>
            <h5>주소 : {user.address}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
