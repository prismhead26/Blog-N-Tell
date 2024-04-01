const { Appointment } = require("../models");

const appointmentData = [
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 1,
    patient_id: 1,
    title: "Vicki Thoms 314-399-9583",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 2,
    patient_id: 3,
    title: "Joseph Branch 816-202-5702",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 3,
    patient_id: 5,
    title: "Willie Gabriel 314-456-5454",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 4,
    patient_id: 7,
    title: "Nathan Winnett 816-465-0766",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 5,
    patient_id: 9,
    title: "Marshall Cooper 314-276-5204",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 6,
    patient_id: 11,
    title: "Michael McGhee 8/29/1977",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 7,
    patient_id: 13,
    title: "Carol Kelly 816-757-9057",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 8,
    patient_id: 15,
    title: "Mark Stephens 314-368-4177",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 9,
    patient_id: 17,
    title: "Beverly Birdwell 573-742-3649",
  },
  {
    time: "2024-03-12T08:30:00",
    doctor_id: 10,
    patient_id: 19,
    title: "Vicky Wallace 816-803-6244",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 1,
    patient_id: 2,
    title: "Sidney Harbour 314-617-1550",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 2,
    patient_id: 4,
    title: "Tomeka Gonzalez 417-872-1903",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 3,
    patient_id: 6,
    title: "Teena Kelley 573-795-1725",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 4,
    patient_id: 8,
    title: "Connie Dirksen 314-202-8535",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 5,
    patient_id: 10,
    title: "Tyler Forbes 314-460-2287",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 6,
    patient_id: 12,
    title: "Evelyn Green 636-484-1843",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 7,
    patient_id: 14,
    title: "Linda Otto 573-944-0307",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 8,
    patient_id: 16,
    title: "Ashley Olsen 636-208-8740",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 9,
    patient_id: 18,
    title: "Rosalyn Luongo 660-788-1828",
  },
  {
    time: "2024-03-12T13:15:00",
    doctor_id: 10,
    patient_id: 20,
    title: "Vicky Wallace 816-803-6244",
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 1,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 2,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 3,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 4,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 5,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 6,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 7,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 8,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 9,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T12:00:00",
    doctor_id: 10,
    patient_id: null,
    title: 'Lunch',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 1,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 2,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 3,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 4,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 5,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 6,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 7,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 8,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 9,
    patient_id: null,
    title: 'Staff Meeting',
  },
  {
    time: "2024-03-12T10:30:00",
    doctor_id: 10,
    patient_id: null,
    title: 'Staff Meeting',
  },
];

const seedAppointment = () => Appointment.bulkCreate(appointmentData);
module.exports = seedAppointment;
