import axios from 'axios';
import { useState } from 'react';


function GetButton() {

  const [token, setToken] = useState('');


  const fetchData = () => {
    axios.post('/api/tokens', { access_token: token })
      .then(response => {
        console.log(response.data); // 응답 데이터 콘솔에 출력
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };


  return (
    <div>
      <input
        type='text'
        onChange={(e) => {
          setToken(e.target.value)
        }} />
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default GetButton;
