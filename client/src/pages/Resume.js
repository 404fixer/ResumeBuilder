import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Resume() {
  const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if(!user) return navigate('/login');
  }, [user, navigate]);

  return (
    <div>
      <h1>Resume Page</h1>
    </div>
  )
}
