module.exports = (config) => {

    return {
        set: async (req, res, next) => {
            try {
                req.schemaNames = JSON.parse(config.schemaNames);
                next();
            } catch (error) {
                res.status(500).json({ error: 'Error when setting schema names', e: error });
            }
        },
 
    };
};