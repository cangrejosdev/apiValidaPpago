//Controlador de RutaS

import { Router } from 'express'

import { getOperador, getPagos } from '../controllers/apiVip_controller';

const router = Router();


// Routes
/** 
 * @swagger
 * tags:
 *  name: DatosOper
 *  description: Datos del Operador del Operador
 *  /api/operadorppago/:cedulaOperador
 *  get: 
 *      tags: [DatosOper]
 */

//Ruta de Validacion de Operadores para 


router.get('/operadorppago/:cedulaOperador',getOperador)

//Ruta de Inserseciion de Pagos
router.get('/insertarppago/:id/:fecha/:operador/:monto/:cliente', getPagos)

export default  router;