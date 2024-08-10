import { connect } from 'amqplib'

const connection = await connect("amqp://guest:guest@localhost:5672/")
const channel = await connection.createChannel()


// TODO consumer / producer
await channel.consume("sms", function (message) {
    console.info(message.fields.routingKey)
    console.info(message.content.toString())
}, {
    noAck: true // automatic acknowledge
})


//  tidak memerlukan close karena consumer berjalan
// await channel.close()
// await connection.close()
