const connection = require("../model/sqlConnection");

const getQuote = async (req, res) => {
  try {
    const id = Math.floor(Math.random() * 236) + 1;
    const data = await connection
      .promise()
      .query(`select * from quotes where id=?`, [id]);

    res.status(202).json({
      message: data[0][0],
    });
  } catch (err) {
    res.status(500).json({
      message: "Quote not found!",
    });
  }
};

module.exports = { getQuote };
