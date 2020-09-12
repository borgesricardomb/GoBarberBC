import { Router } from 'express';
import appointmentsRouter from './appointmentsRoutes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
//  Aqui, o use é porque podemos usar TODAS as rotas que forem inseridas no interior do ./appointments.routes
//  e ele passa o '/appointments' para o Router

export default routes;
