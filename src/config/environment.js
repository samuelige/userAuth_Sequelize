export default {
    port: parseInt(process.env.PORT) || 8080,
    nodeEnv: process.env.nodeEnv || 'production',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || 
    'a157a3310367f6870b47952c4179d59e202b2b620470113f0e19276943b83c9d',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || 
    'ac03a776f8a80f2d1a2ce33c0c7bd15f72cdb85e54104dba5dd537b31f5ba995'
}