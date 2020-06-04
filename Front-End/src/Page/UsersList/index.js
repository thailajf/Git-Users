import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserList from '../../Components/UserList';
import api from '../../Services/api';
import { UserRequest } from '../../Store/Modules/User/action';
import { Title, Container } from './styles';

export default function UsersList() {
  const [Users, setUsers] = useState();
  const [Page, setPage] = useState('0');
  const [Loading, setLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUsers = async () => {
    try {
      let response = await api.get(`api/users?since=${Page}`);
      response = response.data;
      const UsersResponse = response[1].data;

      const page = response[0].Page;
      const user = [];

      if (Users) {
        await Users.map((u) => {
          return user.push(u);
        });
        user.push(...UsersResponse);
        await setUsers(user);
      } else {
        setUsers(UsersResponse);
      }

      setPage(page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleLoadList = () => {
      if (Loading) {
        handleUsers();
      }
    };
    handleLoadList();
    // eslint-disable-next-line
  }, [Loading]);

  const handleUserPage = (user) => {
    dispatch(UserRequest(user));
    history.push('/user');
  };

  return (
    <Container>
      <Title>Users</Title>
      {Loading ? (
        ''
      ) : (
        <UserList
          users={Users}
          handleUserPage={handleUserPage.bind(this)}
          handleLoadMore={handleUsers.bind(this)}
        />
      )}
    </Container>
  );
}
