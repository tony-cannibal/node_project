const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

/* npm run dev : to run with nodemon */
/* npm run start : to run normal */
