import { getConnection } from "../database/conection";

//  End point de Validacion de operadores
//  Parametros de entrada : cedulaOperador
//  Salida:
//
//  {
//    "Unidad": "V254",
//    "Operador#": 234,
//    "Cedula": "8-708-2127",
//    "cedulaNspace": "87082127",
//    "Nombres": "FIELDS NUÑEZ ARIEL ALEXANDER",
//    "ung": "VCOMP",
//    "pago_minimo": 5
//  }
//
//  Pablo Luces

export const getOperador = async (req, res) => {
  try {
    let cedulaop = req.params.cedulaOperador;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(`valida_op_api_ppago ${cedulaop}`);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};


// Enpoint de Insercion de Pagos en la tabla Pagos 

//  Parametros de entrada : Id,fecha,operador,monto,cliente 

//  Salida:
//
//{"mensaje":"Pago Insertdado Fecha Hora: Oct 9 2022 12:47PM"}
//
//  Pablo Luces

export const getPagos = async( req, res ) => {

  //Consulta a la base de datos que inserta cada pago

    let id = req.params.id;
    let fecha = req.params.fecha;
    let operador = req.params.operador;
    let monto = req.params.monto;
    let cliente =  req.params.cliente;
   
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `inserta_ppagos_api '${id}', '${fecha}','${operador}','${monto}','${cliente}'`
      );
      res.send(JSON.stringify(result.recordset));
      console.log  (result.recordset)
  } 
