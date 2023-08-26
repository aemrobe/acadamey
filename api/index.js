const express = require('express')
const cors = require('cors')

const appConfig = require('./src/config/app.config');
const { ok } = require('./src/helper/response.helper')
const { logging } = require('./src/middlewares/logging.middleware')
// routes
const newsRoute = require('./src/routes/news.routes');
const eventRoute = require('./src/routes/event.routes');
const userRoute = require('./src/routes/user.routes');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/public',express.static('assets'))

app.use(logging)

// Register routes
app.use('/api/news', newsRoute);
app.use('/api/event', eventRoute);
app.use('/api/user', userRoute);

app.get("/", (req, res) => {
    return ok(res, {message: "It's working."});
})

app.listen(appConfig.PORT, (error) => {
    if(error) {
        console.log(`Something went wrong.`, error)
    } else {
        console.log(`Server running on port : ${appConfig.PORT}`);
    }
})



