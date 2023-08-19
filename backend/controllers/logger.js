const {createLogger, transports, format} = require('winston')

// -------logging function -------

const bookingLogger = createLogger({
    transports:[
        new transports.File({
            filename:'booking.log',
            level:'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'booking-error.log',
            level:'error',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
})



module.exports = {bookingLogger}