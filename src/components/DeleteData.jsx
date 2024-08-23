import { useState } from 'react';
import supabase from '../../supabaseClient';

const DeleteData = () => {
  const [targetId, setTargetId] = useState(0);

  const handleDelete = async () => {
    const { error } = await supabase
      .from('SUPABASE_SAMPLE')
      .delete()
      .eq('id', targetId);

    if (error) {
      console.log(`error=>`, error);
    } else {
      alert('데이터가 정상적으로 수정됐습니다.');
    }
  };
  return (
    <div className="DeleteData" style={{ border: '1px solid purple' }}>
      <h3>데이터 삭제 로직</h3>
      <div>
        아이디 :{' '}
        <input
          type="number"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
        />
      </div>

      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};
export default DeleteData;
