import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, UserContainer, RepoContainer } from './styles';
import UserComponent from '../../Components/User';
import Repositories from '../../Components/Repositories';

export default function User() {
  const [Loading, setLoading] = useState(true);

  const { user, loading, repositories } = useSelector((state) => state.User);

  const handleClick = (url) => {
    window.location.assign(url);
  };

  useEffect(() => {
    const initial = async () => {
      if (loading) {
        await setLoading(false);
      }
    };
    initial();
  }, [loading]);

  return (
    <Container>
      <h1>Profile</h1>
      {Loading || loading ? (
        ''
      ) : (
        <>
          <UserContainer>
            <UserComponent
              login={user.login}
              createdat={user.created_at}
              id={user.id}
              htmlurl={user.html_url}
              avatarurl={user.avatar_url}
              handleClick={handleClick.bind(this)}
            />
          </UserContainer>
          <RepoContainer>
            <Repositories
              repositories={repositories}
              handleClick={handleClick.bind(this)}
            />
          </RepoContainer>
        </>
      )}
    </Container>
  );
}
