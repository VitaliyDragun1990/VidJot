if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://vitaly1990:19900225@ds141028.mlab.com:41028/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}