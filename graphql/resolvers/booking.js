const Event = require('../../models/event');
const Booking = require('../../models/booking');
const { transformBooking, transformEvent } = require('./merge');

module.exports = {
    bookings: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unautheticated');
        }
        try{
            const bookings = await Booking.find();
            return bookings.map(booking => {
                return transformBooking(booking)
            })
        } catch (err) {
            throw err;
        };
    },
    bookEvent: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unautheticated');
        }
        const fetchedEvent = await Event.findOne({ _id: args.eventId });
        const booking = new Booking({
            user: '5c24df1111b7337c46a2b237',
            event: fetchedEvent
        })
        const result = await booking.save();
        return transformBooking(result)
    },
    cancelBooking: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unautheticated');
        }
        try{
            const booking = await Booking.findById(args.bookingId).populate('event');
            const event = transformEvent(booking.event);
            await Booking.deleteOne({_id: args.bookingId});
            return event
        }catch(err){
            throw err;
        }
    }
}