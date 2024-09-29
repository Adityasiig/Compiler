const { exec } = require('child_process');

exports.compileCode = (req, res) => {
    const { code } = req.body;

    exec(`echo "${code}" | node`, (error, stdout, stderr) => {
        if (error) {
            res.json({ output: stderr });
            return;
        }
        res.json({ output: stdout });
    });
};
