import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res, next) => {
    try{
        const appointment= await Appointment.create ({
            customer: req.user._id,
            barber: req.body.barber,
            service: req.body.service,
            shop: req.body.shop,
            date: req.body.date
        });
        res.status(201).json(appointment);
    }
    catch(error) {
       next(error);
    }
};

export const getAppointments = async(req, res, next) => {
    try {
        const appointments = await Appointment.find()
                            .populate("customer", "name email")
                            .populate("barber", "name specialization")
                            .populate("service", "name price duration")
                            .populate("shop", "name address city");

                        res.json(appointments);
    }
    catch(error) {
        next(error);
    }
};

export const getAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
                            .populate("customer", "name email")
                            .populate("barber", "name specialization")
                            .populate("service", "name price duration")
                            .populate("shop", "name address city");

                        if (!appointment) {
                            return res.status(404).json({
                                message: "Appointment not found"
                            });
                        }
                        res.json(appointment);
    }
    catch(error) {
        next(error);
    }
};

export const updateAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        res.json(appointment);
    } catch (error) {
        next(error);
    }
};

export const cancelAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { status: "cancelled" },
            {
                new: true,
                runValidators: true
            }
        );

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        res.json(appointment);
    } catch (error) {
        next(error);
    }
};