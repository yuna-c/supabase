import { useState } from 'react';
import supabase from '../../supabaseClient';

const AddData = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('SUPABASE_SAMPLE').insert({
      name: name,
      age,
      address
    });

    if (error) {
      console.log(`error=>`, error);
    } else {
      alert('데이터가 정상적으로 입력됐습니다.');
      console.log(`data=>`, data);
    }
  };

  return (
    <div className="AddData" style={{ border: '1px solid red' }}>
      <h3>데이터 추가 로직</h3>
      <div>
        이름 :{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        나이 :{' '}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        주소 :{' '}
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button onClick={handleAdd}>등록</button>
    </div>
  );
};
export default AddData;
