

const fakedata = [
  {
    id: "af199bdf-7002-41d6-a083-b6190aedf6f8",
    specialite: "pneumologue",
    nom:"sami feki" ,
    date: "01/02/2021",

    endereco: [
      {
        id: "32013c47-28ac-4d8c-850a-19e54360cc34",
        diagnostic: "Un cardiologue pourra par exemple vous faire une échographie du cœur au cabinet ou bien vous demander de vous rendre dans un centre d’imagerie. Il peut aussi s’agir d’un scanner, une radio, un IRM, une biopsie, un bilan sanguin",
        cidade: "nodata",
        clientId: "af199bdf-7002-41d6-a083-b6190aedf6f8",
        principal: true,
        estado: "São Paulo"
      },

    ],
    medicament: [
      {
        id: "181e8f73-688d-45ea-8e0f-a073ae29dac7",
        medicament: "panadol , doliprane ",
                clientId: "af199bdf-7002-41d6-a083-b6190aedf6f8"
      },
     
    ]
  },
  {
    id: "47b904c3-efd1-4ee0-a124-2c9029f6320e",
    specialite: "cardiologue",
    nom:"anouar arouch " ,
    date: "25/04/2021",
    endereco: [
      {
        id: "7b899532-c682-40d7-9f7c-0fcc65d8c677",
        diagnostic: "La couleur de la peau est examinée car une pâleur ou un teint bleuâtre ou violacé (cyanose) peut indiquer un faible taux de globules rouges (anémie) ou un apport de sang insuffisant",
        cidade: "Testelândia",
        clientId: "47b904c3-efd1-4ee0-a124-2c9029f6320e",
        principal: false,
        estado: "São Paulo"
      }
    ],
    medicament: [
      {
        id: "1a6c4a92-0581-4451-8b90-0f220a34d6fc",
        medicament: "DOLIPRANE ,EFFERALGAN,KARDEGIC",
                clientId: "47b904c3-efd1-4ee0-a124-2c9029f6320e"
      }
    ]
  },
  {
    id: "c5151e92-e15b-485a-99ca-7fbeda78abe5",
    specialite: "gérnéraliste ",
    nom:"mohamed cherni" ,
    date: "19/01/2022",
    endereco: [
      {
        id: "c44a9516-f5cc-442f-8058-b6f5dab89623",
        diagnostic : "Les veines du cou sont inspectées quand la personne est couchée et que la partie supérieure de son corps est surélevée pour former un angle de 45 °. Ces veines sont examinées car elles sont directement reliées à l’oreillette droite (la cavité cardiaque supérieure qui reçoit le sang pauvre en oxygène provenant du corps) et indiquent donc le volume et la pression du sang qui pénètre dans la partie droite du cœur",
        cidade: "Cidade Ram",
        clientId: "c5151e92-e15b-485a-99ca-7fbeda78abe5",
        principal: true,
        estado: "São Paulo"
      }
    ],
    medicament: [ {
      id: "1a6c4a92-0581-4451-8b90-0f220a34d6fc",
      medicament: "ISIMIG , Clamoxyl",
            clientId: "47b904c3-efd1-4ee0-a124-2c9029f6320e"
    }]
  },

  {
    id: "c5151e92-e15b-485a-99ca-7fbeda78abe5",
    specialite: "Cardiologue ",
    nom:"ahmed ben mahmoud" ,
    date: "08/03/2022",
    endereco: [  {
      id: "c44a9516-f5cc-442f-8058-b6f5dab89623",
      diagnostic : " A la fin de cet examen clinique, différentes hypothèses diagnostiques vont être soulevées, dont l’appendicite aiguë. Des examens paracliniques vont être réalisés : bilan sanguin et échographie. Si ces examens étayent l’hypothèse d’une appendicite, une intervention va être proposée par le chirurgien. On est toujours dans le diagnostic de probabilité. ",
      medicament: "Cidade Ram",
      clientId: "c5151e92-e15b-485a-99ca-7fbeda78abe5",
      principal: true,
      estado: "São Paulo"
    }],
      
    medicament: [ {
      id: "1a6c4a92-0581-4451-8b90-0f220a34d6fc",
      medicament: "maxilase",
      clientId: "47b904c3-efd1-4ee0-a124-2c9029f6320e"
    }]
  }
]
 export default fakedata;