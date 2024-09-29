const express = require('express');
const cors = require('cors');
const compileRouter = require('./routes/compile');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/compile', compileRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
