const dotenv = require('dotenv');
dotenv.config()

const {app} = require('./src/app');
const port =app.get('port');
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}
);

require('./src/db');
const datos = require("./src/model/datos");
const user = require("./src/model/Users");