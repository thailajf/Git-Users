import { Router } from 'express';
import api from './services/api';

const routes = new Router();

routes.get('/api/users', async (req, res) => {
  const { since } = req.query;
  const response = await api.get(`/users?since=${since}`);
  if (!response) {
    return res.status(400).json("Users don't exist");
  }
  const page = response.headers.link.replace(/[^0-9]/g, '');
  return res.json([{ Page: page }, { data: response.data }]);
});

routes.get('/api/users/:username/details', async (req, res) => {
  const { username } = req.params;
  const response = await api.get(`/users/${username}`);
  if (!response) {
    return res.status(400).json("User don't exist");
  }
  return res.json({ data: response.data });
});

routes.get('/api/users/:username/repos', async (req, res) => {
  const { username } = req.params;
  const response = await api.get(`/users/${username}/repos`);
  if (!response) {
    return res.status(400).json("Repositories was not found or don't exist");
  }
  return res.json({ data: response.data });
});

export default routes;
