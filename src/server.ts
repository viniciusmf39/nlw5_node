import { http } from './http';
import './websocket/client';
import './websocket/admin';

http.listen(8080, () => console.log('Server started on 8080'));
