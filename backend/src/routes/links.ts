import {Router} from 'express';
import linksControler from '../controllers/links';

const router = Router();

router.post('/links', linksControler.postLink)

router.get('/links/:code', linksControler.hitLink)

router.get('/links/:code/stats', linksControler.getLink)

export default router;