const DOCTORS = [
  {
    "id": 0,
    "first_name": "Kristi",
    "last_name": " Hutchinson"
  },
  {
    "id": 1,
    "first_name": "Jeannie",
    "last_name": " Bird"
  },
  {
    "id": 2,
    "first_name": "Curry",
    "last_name": " Mitchell"
  },
  {
    "id": 3,
    "first_name": "Alma",
    "last_name": " Levine"
  },
  {
    "id": 4,
    "first_name": "Owen",
    "last_name": " Gould"
  },
  {
    "id": 5,
    "first_name": "Della",
    "last_name": " Burnett"
  },
  {
    "id": 6,
    "first_name": "Adriana",
    "last_name": " Robertson"
  },
  {
    "id": 7,
    "first_name": "Salinas",
    "last_name": " Townsend"
  },
  {
    "id": 8,
    "first_name": "Conrad",
    "last_name": " Chan"
  },
  {
    "id": 9,
    "first_name": "Kara",
    "last_name": " Rasmussen"
  },
  {
    "id": 10,
    "first_name": "Marquez",
    "last_name": " Mueller"
  },
  {
    "id": 11,
    "first_name": "English",
    "last_name": " Butler"
  },
  {
    "id": 12,
    "first_name": "Candice",
    "last_name": " Aguirre"
  },
  {
    "id": 13,
    "first_name": "Chasity",
    "last_name": " Shepard"
  },
  {
    "id": 14,
    "first_name": "Trudy",
    "last_name": " Berg"
  }
]

// appointments -------------
const APPOINTMENTS = [
  {
    "id": 100,
    "first_name": "Aileen",
    "last_name": " Mendoza",
    "date": "2022-05-14",
    "time": "15:30",
    "type": "New Patient"
  },
  {
    "id": 101,
    "first_name": "Woods",
    "last_name": " Gilbert",
    "date": "2022-05-28",
    "time": "05:30",
    "type": "New Patient"
  },
  {
    "id": 102,
    "first_name": "Marylou",
    "last_name": " Callahan",
    "date": "2022-04-23",
    "time": "03:15",
    "type": "New Patient"
  },
  {
    "id": 103,
    "first_name": "Greer",
    "last_name": " Schneider",
    "date": "2022-05-27",
    "time": "06:45",
    "type": "New Patient"
  },
  {
    "id": 104,
    "first_name": "Landry",
    "last_name": " Mccray",
    "date": "2022-04-15",
    "time": "04:15",
    "type": "New Patient"
  },
  {
    "id": 105,
    "first_name": "Pena",
    "last_name": " Villarreal",
    "date": "2022-04-16",
    "time": "17:00",
    "type": "New Patient"
  },
  {
    "id": 106,
    "first_name": "Lakisha",
    "last_name": " Whitley",
    "date": "2022-04-04",
    "time": "14:00",
    "type": "New Patient"
  },
  {
    "id": 107,
    "first_name": "Rosalie",
    "last_name": " Conrad",
    "date": "2022-04-20",
    "time": "03:30",
    "type": "New Patient"
  },
  {
    "id": 108,
    "first_name": "Alexis",
    "last_name": " Holden",
    "date": "2022-06-22",
    "time": "23:15",
    "type": "New Patient"
  },
  {
    "id": 109,
    "first_name": "Jerry",
    "last_name": " Rosario",
    "date": "2022-05-18",
    "time": "00:30",
    "type": "New Patient"
  },
  {
    "id": 110,
    "first_name": "Marla",
    "last_name": " Harmon",
    "date": "2022-06-01",
    "time": "13:00",
    "type": "New Patient"
  },
  {
    "id": 111,
    "first_name": "Jillian",
    "last_name": " Coffey",
    "date": "2022-04-19",
    "time": "03:45",
    "type": "New Patient"
  },
  {
    "id": 112,
    "first_name": "Rivas",
    "last_name": " Finch",
    "date": "2022-04-15",
    "time": "16:15",
    "type": "New Patient"
  },
  {
    "id": 113,
    "first_name": "Kennedy",
    "last_name": " Steele",
    "date": "2022-04-07",
    "time": "04:30",
    "type": "New Patient"
  },
  {
    "id": 114,
    "first_name": "Lopez",
    "last_name": " Fleming",
    "date": "2022-04-30",
    "time": "07:00",
    "type": "New Patient"
  },
  {
    "id": 115,
    "first_name": "Black",
    "last_name": " Roman",
    "date": "2022-05-26",
    "time": "01:30",
    "type": "New Patient"
  },
  {
    "id": 116,
    "first_name": "Larson",
    "last_name": " Benson",
    "date": "2022-05-04",
    "time": "09:45",
    "type": "New Patient"
  },
  {
    "id": 117,
    "first_name": "Noel",
    "last_name": " Oneal",
    "date": "2022-05-19",
    "time": "12:15",
    "type": "New Patient"
  },
  {
    "id": 118,
    "first_name": "Laura",
    "last_name": " Deleon",
    "date": "2022-06-01",
    "time": "10:45",
    "type": "New Patient"
  },
  {
    "id": 119,
    "first_name": "Jana",
    "last_name": " Klein",
    "date": "2022-04-06",
    "time": "02:45",
    "type": "New Patient"
  },
  {
    "id": 120,
    "first_name": "Doreen",
    "last_name": " Cardenas",
    "date": "2022-06-24",
    "time": "02:15",
    "type": "New Patient"
  },
  {
    "id": 121,
    "first_name": "Peterson",
    "last_name": " Diaz",
    "date": "2022-04-22",
    "time": "02:15",
    "type": "New Patient"
  },
  {
    "id": 122,
    "first_name": "Perry",
    "last_name": " Daugherty",
    "date": "2022-04-17",
    "time": "14:15",
    "type": "New Patient"
  },
  {
    "id": 123,
    "first_name": "Hughes",
    "last_name": " Bruce",
    "date": "2022-07-01",
    "time": "16:15",
    "type": "New Patient"
  },
  {
    "id": 124,
    "first_name": "Bryan",
    "last_name": " Browning",
    "date": "2022-04-26",
    "time": "12:15",
    "type": "Follow-up"
  },
  {
    "id": 125,
    "first_name": "Emily",
    "last_name": " Murray",
    "date": "2022-06-24",
    "time": "10:15",
    "type": "Follow-up"
  },
  {
    "id": 126,
    "first_name": "Herminia",
    "last_name": " Dennis",
    "date": "2022-06-28",
    "time": "14:15",
    "type": "Follow-up"
  },
  {
    "id": 127,
    "first_name": "Lori",
    "last_name": " Sexton",
    "date": "2022-04-03",
    "time": "11:15",
    "type": "Follow-up"
  },
  {
    "id": 128,
    "first_name": "Diann",
    "last_name": " Rutledge",
    "date": "2022-04-05",
    "time": "12:15",
    "type": "Follow-up"
  },
  {
    "id": 129,
    "first_name": "Jackie",
    "last_name": " Wagner",
    "date": "2022-06-02",
    "time": "13:15",
    "type": "Follow-up"
  },
  {
    "id": 130,
    "first_name": "Gutierrez",
    "last_name": " Mccormick",
    "date": "2022-05-01",
    "time": "11:15",
    "type": "Follow-up"
  },
  {
    "id": 131,
    "first_name": "Deanne",
    "last_name": " Santos",
    "date": "2022-06-22",
    "time": "23:15",
    "type": "Follow-up"
  },
  {
    "id": 132,
    "first_name": "Irma",
    "last_name": " Conley",
    "date": "2022-05-14",
    "time": "14:15",
    "type": "Follow-up"
  },
  {
    "id": 133,
    "first_name": "Ingrid",
    "last_name": " Nolan",
    "date": "2022-05-08",
    "time": "06:30",
    "type": "Follow-up"
  },
  {
    "id": 134,
    "first_name": "Ruiz",
    "last_name": " Workman",
    "date": "2022-06-11",
    "time": "14:30",
    "type": "Follow-up"
  },
  {
    "id": 135,
    "first_name": "Booth",
    "last_name": " Haney",
    "date": "2022-04-19",
    "time": "09:45",
    "type": "Follow-up"
  },
  {
    "id": 136,
    "first_name": "Cornelia",
    "last_name": " Gates",
    "date": "2022-06-12",
    "time": "18:45",
    "type": "Follow-up"
  },
  {
    "id": 137,
    "first_name": "Strong",
    "last_name": " Pugh",
    "date": "2022-05-04",
    "time": "16:15",
    "type": "Follow-up"
  },
  {
    "id": 138,
    "first_name": "Calhoun",
    "last_name": " Crawford",
    "date": "2022-05-22",
    "time": "11:00",
    "type": "Follow-up"
  },
  {
    "id": 139,
    "first_name": "Waters",
    "last_name": " Tran",
    "date": "2022-07-04",
    "time": "02:30",
    "type": "Follow-up"
  },
  {
    "id": 140,
    "first_name": "Ilene",
    "last_name": " England",
    "date": "2022-06-07",
    "time": "10:30",
    "type": "Follow-up"
  },
  {
    "id": 141,
    "first_name": "Mann",
    "last_name": " Reeves",
    "date": "2022-05-21",
    "time": "07:30",
    "type": "Follow-up"
  },
  {
    "id": 142,
    "first_name": "Merrill",
    "last_name": " Durham",
    "date": "2022-05-22",
    "time": "19:30",
    "type": "New Patient"
  },
  {
    "id": 143,
    "first_name": "Lesa",
    "last_name": " Gutierrez",
    "date": "2022-04-18",
    "time": "05:30",
    "type": "New Patient"
  },
  {
    "id": 144,
    "first_name": "Coleman",
    "last_name": " Hardy",
    "date": "2022-04-30",
    "time": "22:00",
    "type": "New Patient"
  }
]

module.exports = { APPOINTMENTS, DOCTORS }
