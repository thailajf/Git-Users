import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import {
  Container,
  UserContainer,
  RepoContainer,
  Title,
  HeaderContainer,
} from './styles';
import UserComponent from '../../Components/User';
import Repositories from '../../Components/Repositories';
import Icon from '../../Components/Loading';

export default function User() {
  const { user, repositories } = useSelector((state) => state.User);

  const history = useHistory();

  const handleClick = (url) => {
    window.location.assign(url);
  };

  useEffect(() => {
    const initial = () => {
      if (user === null) {
        history.push('/');
      }
    };
    initial();
  }, [user, history]);

  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <BsArrowLeft size={20} color="gray" />
        </Link>
        <Title>Profile</Title>
      </HeaderContainer>
      {!user ? (
        <Icon />
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
          <Title>Repositories</Title>

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
