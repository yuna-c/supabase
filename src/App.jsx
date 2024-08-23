import './App.css';
import AddData from './components/AddData';
import FetchData from './components/FetchData';
import UpdateData from './components/UpdateData';
import DeleteData from './components/DeleteData';

// 🌞🌞🌞🌞🌞
// https://supabase.com/
// yarn add @supabase/supabase-js

// - BaaS : 클라우드 기반의 백엔드 서비스
// Firebase : Google이 운영하는 플랫폼으로, 실시간 데이터베이스, 사용자 인증, 애널리틱스

// - Supabase : PostgreSQL을 기반으로 하는  오픈 소스 BaaS 플랫폼
// 관계형 데이터베이스 지원 : 데이터 변화를 감지하고 반응
// 실시간 기능(real time)의 실무적 적용 : 실시간 데이터 처리가 중요한 어플리케이션 개발에 매우 유용

function App() {
  return (
    <>
      <h1>supabase</h1>
      <FetchData />
      <AddData />
      <UpdateData />
      <DeleteData />
    </>
  );
}

export default App;
