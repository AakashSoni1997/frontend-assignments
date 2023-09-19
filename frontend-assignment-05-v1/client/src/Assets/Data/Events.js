var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

export const eventsArray = [
  {
    title: "Test",
    start: "2021-05-02",
    end: "2021-05-04",
    className: "bg-default",
    id: 15
  },
  {
    id: 1,
    title: "Call with Dave",
    start: new Date(y, m, 1),
    allDay: true,
    className: "bg-red",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 2,
    title: "Lunch meeting",
    start: new Date(y, m, d - 1, 10, 30),
    allDay: true,
    className: "bg-orange",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 3,
    title: "All day conference",
    start: new Date(y, m, d + 7, 12, 0),
    allDay: true,
    className: "bg-green",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 4,
    title: "Meeting with Mary",
    start: new Date(y, m, d - 2),
    allDay: true,
    className: "bg-blue",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 5,
    title: "Winter Hackaton",
    start: new Date(y, m, d + 1, 19, 0),
    allDay: true,
    className: "bg-red",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 6,
    title: "Digital event",
    start: new Date(y, m, 11),
    allDay: true,
    className: "bg-warning",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 7,
    title: "Marketing event",
    start: new Date(y, m, 21),
    allDay: true,
    className: "bg-purple",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 8,
    title: "Dinner with Family",
    start: new Date(y, m, 19),
    allDay: true,
    className: "bg-red",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 9,
    title: "Black Friday",
    start: new Date(y, m, 23),
    allDay: true,
    className: "bg-blue",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 10,
    title: "Cyber Week",
    start: new Date(y, m, 2),
    allDay: true,
    className: "bg-yellow",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  }
];
