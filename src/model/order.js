const pool = require('./../config/db');
const Pool = require('./../config/db')

const selectData = () => {
    return Pool.query(`SELECT * FROM order_item ORDER BY id`);
}

const insertData = (data) => {
    const {id_item,amount,price} = data;
    return Pool.query(`INSERT INTO order_item(id_item,amount,price) VALUES(${id_item},${amount},${price})`);
}

const updateData = (id,data) => {
    const {id_item,amount,price} = data;
    return Pool.query(`UPDATE order_item SET id_item='${id_item}',amount='${amount}',price='${price}' WHERE id='${id}'`);
}

const deleteData = id => {
    return Pool.query(`DELETE FROM order_item where id='${id}'`);
}

const searchData = id =>{
        return pool.query(`select * from order_item WHERE id='${id}'`)
      }

const searchName = name =>{
        return pool.query(`select * from order_item WHERE name ='${name}'`)
      }
module.exports = {selectData, insertData,deleteData,updateData, searchData, searchName}