const sections = document.querySelectorAll('main > section');
let hot;

const countdownEndDate = getSavedCountdownEndDate();

function getSavedCountdownEndDate() {
    const savedCountdownEndDate = localStorage.getItem('countdownEndDate');
    if (savedCountdownEndDate) {
        return parseInt(savedCountdownEndDate, 10);
    } else {
        const now = new Date();
        const newCountdownEndDate = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000 + 50 * 60 *1000);
        localStorage.setItem('countdownEndDate', newCountdownEndDate.getTime());
        return newCountdownEndDate.getTime();
    }
}



function updateTimer() {
  const timerElement = document.getElementById('timer');
  const endTime = new Date(timerElement.getAttribute('data-end-time'));
  const now = new Date();
  const timeRemaining = endTime - now;

  if (timeRemaining > 0) {
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    timerElement.textContent = `${days} giorni, ${hours} ore, ${minutes} minuti, ${seconds} secondi`;
  } else {
    timerElement.textContent = 'Tempo esaurito';
  }
}

updateTimer(); // Aggiorna il timer immediatamente
setInterval(updateTimer, 1000); // Aggiorna il timer ogni secondo


// Inserisci qui la lista dei partecipanti, rose e giocatori

const calendario = [
    {
        giornata: 1,
        partite: [
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "AS TROMBA", risultato1: 2 , risultato2: 1 },
            { squadra1: "BENEVENGO", squadra2: "DRINK TEAM", risultato1: 1, risultato2: 4 },
            { squadra1: "ASTON BIRRA", squadra2: "TEAMCHIAPPETTO", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 2,
        partite: [
            { squadra1: "AS TROMBA", squadra2: "TEAM CHIAPPETTO", risultato1: 2 , risultato2: 1 },
            { squadra1: "DRINK TEAM", squadra2: "ASTON BIRRA", risultato1: 3, risultato2: 2 },
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "BENEVENGO", risultato1: 2, risultato2: 2 },
            
        ],
    },
    {
        giornata: 3,
        partite: [
            { squadra1: "BENEVENGO", squadra2: "AS TROMBA", risultato1: 2 , risultato2: 2 },
            { squadra1: "ASTON BIRRA", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 0, risultato2: 3 },
            { squadra1: "TEAMCHIAPPETTO", squadra2: "DRINK TEAM", risultato1: 3, risultato2: 3 },
            
        ],
    },
    {
        giornata: 4,
        partite: [
            { squadra1: "AS TROMBA", squadra2: "DRINK TEAM", risultato1: 3 , risultato2: 1 },
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "TEAM CHIAPPETTO", risultato1: 3, risultato2: 1 },
            { squadra1: "BENEVENGO", squadra2: "ASTON BIRRA", risultato1: 2, risultato2: 1 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 6,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 7,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 8,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 9,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 10,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 11,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    {
        giornata: 5,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "AS TROMBA", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 5, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 1, risultato2: 2 },
            
        ],
    },
    
    {
        giornata: 32,
        partite: [
            { squadra1: "DRINK TEAM", squadra2: "AS TROMBA", risultato1: 2 , risultato2: 2 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 1, risultato2: 5 },
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "ASTON BIRRA", risultato1: 0, risultato2: 3 },
        
        ],
    },
    {
        giornata: 33,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "DRINK TEAM", risultato1: 3 , risultato2: 2 },
            { squadra1: "BENEVENGO", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 3, risultato2: 0 },
            { squadra1: "AS TROMBA", squadra2: "TEAMCHIAPPETTO", risultato1: 4, risultato2: 0 },
            
        ],
    },
    {
        giornata: 34,
        partite: [
            { squadra1: "DRINK TEAM", squadra2: "TEAMCHIAPPETTO", risultato1: 1 , risultato2: 3 },
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "AS TROMBA", risultato1: 1, risultato2: 1 },
            { squadra1: "ASTON BIRRA", squadra2: "BENEVENGO", risultato1: 1, risultato2: 3 },
            
        ],
    },
    {
        giornata: 35,
        partite: [
            { squadra1: "BENEVENGO", squadra2: "DRINK TEAM", risultato1: 2 , risultato2: 1 },
            { squadra1: "AS TROMBA", squadra2: "ASTON BIRRA", risultato1: 2, risultato2: 0 },
            { squadra1: "TEAMCHIAPPETTO", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 2, risultato2: 2 },
            
        ],
    },
    {
        giornata: 36,
        partite: [
            { squadra1: "AS TROMBA", squadra2: "BENEVENGO", risultato1: 0 , risultato2: 0 },
            { squadra1: "TEAMCHIAPPETTO", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 0, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "ASTON BIRRA", risultato1: 0, risultato2: 0 },
            
        ],
    },
    {
        giornata: 37,
        partite: [
            { squadra1: "BENEVENGO", squadra2: "ASTON BIRRA", risultato1: 0 , risultato2: 0 },
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "DRINK TEAM", risultato1: 0, risultato2: 0 },
            { squadra1: "AS TROMBA", squadra2: "TEAMCHIAPPETTO", risultato1: 0, risultato2: 0 },
            
        ],
    },
    
    // ...
    {
        giornata: 38,
        partite: [
            { squadra1: "TEAMCHIAPPETTO", squadra2: "BENEVENGO", risultato1: 0, risultato2: 0 },
            { squadra1: "DRINK TEAM", squadra2: "AS TROMBA", risultato1: 0, risultato2: 0 },
            { squadra1: "ASTON BIRRA", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 0, risultato2: 0 },
        ],
    },
];

const giornataSelezionata = document.getElementById("giornata-selezionata");
for (let i = 1; i <= calendario.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Giornata ${i}`;
    giornataSelezionata.appendChild(option);
}
const partecipanti = ['AS TROMBA - Alfonso ', 'ASTON BIRRA - Simone ', 'BENEVENGO - Brandol ', 'DRINK TEAM - Alessandro ' , 'MIGNOTTINGHAM FOREST FC - Roberto ' , 'TEAMCHIAPPETTO - Alessio'  ];
const rose = {
    "AS TROMBA": {
        portieri: ['MUSSO', 'ROSSI', 'SPORTIELLO'],
        difensori: ['KIM', 'SCALVINI', 'ACERBI', 'BECAO', 'PARISI','BRADARIC', 'GABBIA','VALERI'],
        centrocampisti: ['PELLEGRINI', 'POGBA', 'VLASIC', 'PESSINA', 'KOOPMEINERS','FAGIOLI', 'SABIRI','BASIC','VOLPATO'],
        attaccanti: ['LAUTARO MARTINEZ', 'EL SHAARAWY', 'IBRAHIMOVIC', 'OKEREKE', 'HOJLUND','SATRIANO', 'DE LUCA'],
    },
    "ASTON BIRRA": {
        portieri: ['SIRIGU', 'CEROFOLINI', 'TERRACCIANO'],
        difensori: ['DI LORENZO', 'CARLOS AUGUSTO', 'ROMAGNOLI', 'HOLM', 'FERRARI','MAHELE', 'UDOGIE'],
        centrocampisti: ['DE KETELAERE', 'NICO GONZALEZ', 'ZACCAGNI', 'BARELLA', 'ZIELINSKI','STREFEZZA', 'THORSTVEDT'],
        attaccanti: ['DIA', 'CAPUTO', 'ZAPATA', 'DZEKO', 'CAPRARI','MILIK', 'SOULE'],
    },
    "BENEVENGO": {
        portieri: ['RUI PATRICIO', 'BOER', 'SVILAR'],
        difensori: ['CUADRADO', 'DODO', 'HATEBOER', 'CAMBIASO', 'CELIK','DJIMSITI', 'LYKOGIANNIS'],
        centrocampisti: ['FELIPE ANDERSON', 'MIRANCHUK', 'CALHANOGLU', 'TONALI', 'DJURICIC','SENSI', 'BEKALO','RICCI'],
        attaccanti: ['DYBALA', 'BERARDI', 'VLAHOVIC', 'SANABRIA', 'CIURRIA','REBIC', 'SHOMURODOV'],
    },
    "DRINK TEAM": {
        portieri: ['MERET', 'GOLLINI', 'MARFELLA'],
        difensori: ['DUMFRIES', 'TOMORI', 'POSCH', 'LAZZARI', 'PEREZ','HYSAJ', 'IGOR'],
        centrocampisti: ['DI MARIA', 'LUIS ALBERTO', 'CHIESA', 'BROZOVIC', 'BONAVENTURA','GONZALEZ J', 'MAXI LOPEZ','MATIC','SAELEMAEKERS'],
        attaccanti: ['ABRAHAM', 'OSIMHEN', 'ORIGI', 'KVARATSKHELIA', 'PEDRO','KOUME', 'ALVAREZ'],
    },
    "MIGNOTTINGHAM FOREST FC": {
        portieri: ['MAIGNAN', 'MILINKOVIC-SAVIC', 'TATARUSANU'],
        difensori: ['SMALLING', 'RRHAMANI', 'THEO HERNANDEZ', 'BASTONI', 'LUCA PELLEGRINI','NUYTINCK'],
        centrocampisti: ['MILINKOVIC-SAVIC', 'ELMAS', 'FRATTESI', 'MKHITARYAN', 'WIJNALDUM','SAMARDZIC', 'J EDERSON'],
        attaccanti: ['IMMOBILE', 'GIROUD', 'ARNAUTOVIC', 'LAURIENTE', 'LOOKMAN'],
    },
    "TEAMCHIAPPETTO": {
        portieri: ['SZCZESNY', 'ONANA', 'PERIN'],
        difensori: ['MARIO RUI', 'DI MARCO', 'MARUSIC', 'ZORTEA', 'TOLJAN','EBOSSE','RUGGERI','BIJOL','BIRINDELLI'],
        centrocampisti: ['KOSTIC', 'PEREYRA', 'BAJRAMI', 'POLITANO', 'FERGUSON','RADONJIC', 'MESSIAS','LOBOTKA','BALDANZI'],
        attaccanti: ['LUKAKU', 'LEAO', 'BETO', 'NZOLA', 'LOZANO','PINAMONTI','PICCOLI'],
    },
};
// Esempio di dati della classifica
const classifica = [
    {
      posizione: 1,
      squadra: 'MIGHOTTINGHAN FOREST FC',
      punti: 59,
      vinte: 16,
      pareggiate: 9,
      perse: 11,
      golFatti: 61,
      golSubiti: 48,
      puntiTotali: 2602,
    },
    {
      posizione: 2,
      squadra: 'TEAM CHIAPPETTO',
      punti: 57,
      vinte: 16,
      pareggiate: 9,
      perse: 11,
      golFatti: 59,
      golSubiti: 54,
      puntiTotali: 2602.5,
    },
    
    {
      posizione: 3,
      squadra: 'DRINK TEAM',
      punti: 56,
      vinte: 17,
      pareggiate: 6,
      perse: 13,
      golFatti: 64,
      golSubiti: 56,
      puntiTotali: 2632.5,
    },
  
  {
      posizione: 4,
      squadra: 'ASTON BIRRA',
      punti: 48,
      vinte: 14,
      pareggiate: 6,
      perse: 16,
      golFatti: 56,
      golSubiti: 59,
      puntiTotali: 2593.5,
    },
  {
      posizione: 5,
      squadra: 'BENEVENGO',
      punti: 43,
      vinte: 12,
      pareggiate: 7,
      perse: 17,
      golFatti: 51,
      golSubiti: 65,
      puntiTotali: 2541,
    },
  {
      posizione: 6,
      squadra: 'AS TROMBA',
      punti: 37,
      vinte: 8,
      pareggiate: 13,
      perse: 15,
      golFatti: 51,
      golSubiti: 60,
      puntiTotali: 2551.5,
    },
    // ... altre squadre
  ];
function aggiornaVotiGiocatori() {
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api-football-v1.p.rapidapi.com/v3/players?id=276&season=2020',
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cb71c1adbdmshf0e1ca1b94c35afp1ebf60jsn57e7c8790332',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  $.ajax(settings).done(function (response) {
    // Elabora i dati dell'API e crea un'output HTML
    let output = '';
    response.data.forEach(function (giocatore) {
      output += `<p>${giocatore.firstname} ${giocatore.lastname}: ${giocatore.rating}</p>`;
    });

    // Aggiorna il contenuto del div 'voti-giocatori' con i nuovi voti
    $('#voti-giocatori').html(output);
  }).fail(function (error) {
    console.error('Errore durante il recupero dei dati:', error);
  });
}

// Aggiorna i voti dei giocatori ogni 60 secondi (1 minuto)
setInterval(aggiornaVotiGiocatori, 60000);


  // Funzione per popolare la tabella della classifica
function popolaTabellaClassifica() {
    const corpoTabellaClassifica = document.getElementById('corpo-tabella-classifica');
  
    // Pulisci le righe esistenti
    corpoTabellaClassifica.innerHTML = '';
  
    classifica.forEach((squadra) => {
      const riga = document.createElement('tr');
  
      // Creare e aggiungere le celle per ogni dato nella riga
      Object.values(squadra).forEach((valore) => {
        const cella = document.createElement('td');
        cella.textContent = valore;
        riga.appendChild(cella);
      });
  
      // Aggiungi la riga al corpo della tabella
      corpoTabellaClassifica.appendChild(riga);
    });
  }
  
  

// Funzione per mostrare le partite della giornata selezionata
function mostraPartite(giornata) {
    const partiteGiornata = document.getElementById("partite-giornata");
    partiteGiornata.innerHTML = "";

    calendario[giornata - 1].partite.forEach((partita) => {
        const li = document.createElement("li");
        li.textContent = `${partita.squadra1} ${partita.risultato1} - ${partita.risultato2} ${partita.squadra2}`;
        partiteGiornata.appendChild(li);
    });
}

// Funzione per popolare la lista dei partecipanti
function aggiornaListaPartecipanti() {
    const listaPartecipanti = document.getElementById('lista-partecipanti');
    listaPartecipanti.innerHTML = '';
    partecipanti.forEach(partecipante => {
        const li = document.createElement('li');
        li.textContent = partecipante;
        listaPartecipanti.appendChild(li);
    });
}

// Funzione per popolare il menu a tendina delle squadre
function aggiornaSelectSquadre() {
    const selectSquadra = document.getElementById('squadra-selezionata');
    Object.keys(rose).forEach(squadra => {
        const option = document.createElement('option');
        option.value = squadra;
        option.textContent = squadra;
        selectSquadra.appendChild(option);
    });

    selectSquadra.addEventListener('change', (e) => {
        const squadraSelezionata = e.target.value;
        aggiornaListaGiocatori(squadraSelezionata);
    });
}

function aggiornaListaGiocatori(squadraSelezionata) {
    const listaGiocatori = document.getElementById('lista-giocatori');
    listaGiocatori.innerHTML = '';

    if (!squadraSelezionata || !rose[squadraSelezionata]) {
        return;
    }

    const ruoli = ['portieri', 'difensori', 'centrocampisti', 'attaccanti'];

    ruoli.forEach(ruolo => {
        const li = document.createElement('li');
        li.textContent = ruolo.toUpperCase();
        li.style.fontWeight = 'bold';
        listaGiocatori.appendChild(li);

        rose[squadraSelezionata][ruolo].forEach(giocatore => {
            const liGiocatore = document.createElement('li');
            liGiocatore.textContent = giocatore;
            listaGiocatori.appendChild(liGiocatore);
        });
    });
}

function aggiornaClassifica() {
    const corpoTabellaClassifica = document.getElementById('corpo-tabella-classifica');
    corpoTabellaClassifica.innerHTML = '';

    const squadreOrdinate = Object.keys(classifica).sort((a, b) => classifica[b] - classifica[a]);

    squadreOrdinate.forEach((squadra, index) => {
        const tr = document.createElement('tr');

        const tdPosizione = document.createElement('td');
        tdPosizione.textContent = index + 1;
        tr.appendChild(tdPosizione);

        const tdSquadra = document.createElement('td');
        tdSquadra.textContent = squadra;
        tr.appendChild(tdSquadra);

        const tdPunti = document.createElement('td');
        tdPunti.textContent = classifica[squadra];
        tr.appendChild(tdPunti);

        corpoTabellaClassifica.appendChild(tr);
    });
}

// ...
// Le altre funzioni e variabili esistenti
// ...
function mostraFormazioniLive() {
  const formazioniLiveContainer = document.getElementById("formazioni-live-container");
  formazioniLiveContainer.innerHTML = "";
  function mostraFormazioniLive() {
    // Recupera i dati dal localStorage
    const sfide = JSON.parse(localStorage.getItem('sfide')) || [];
  
    // ...
  }
  
  const sfide = [
  {
    fantallenatore1: "BENEVENGO",
    fantallenatore2: "ASTON BIRRA",
    formazione1: {
      titolari:["da inserire1", "da inserire2", "da inserire3", "da inserire4", "da inserire5", "da inserire6", "da inserire7", "da inserire8", "da inserire9", "da inserire10", "da inserire11"] ,
      panchinari:["da inserire12", "da inserire13", "da inserire14", "da inserire15", "da inserire16", "da inserire17", "da inserire18", "da inserire19", "da inserire20", "da inserire21", "da inserire22", "da inserire23", "da inserire24"] ,
    //voti: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      voti: [0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
    },
    formazione2: {
      titolari: ["P1 - Terracciano", "D2 - Carlos Augusto", "D3 - Di Lorenzo", "D4 - Romagnoli A", "C5 - Barella", "C6 - Zielinski", "C7 - Zaccagni", "C8 - Strefezza", "A9 - Dia", "A10 - Caprari", "A11 - Caputo"],
      panchinari: ["P12 - Cerofolini", "P13 - Sirigu", "D14 - Ferrari G", "D15 - Maehle", "D16 - Udogie", "D17 - Holm", "C18 - Gonzalez N", "C19 - De Ketelaere", "C20 - Thorstvedt", "A21 - Dzeko", "A22 - Milik", "A23 - Soule", "A24 - Zapata D"],
    //voti: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      voti: [0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
    }
  },
    {
    fantallenatore1: "MIGNOTTINGHAM FOREST FC",
    fantallenatore2: "DRINK TEAM",
    formazione1: {
      titolari: ["P1 - Maignan", "D2 - Smalling", "D3 - Hernandez T", "D4 - Bastoni", "C5 - Milinkovic-Savic", "C6 - Frattesi", "C7 - Elmas", "C8 - Samardzic", "A9 - Giroud", "A10 - Immobile", "A11 - Arnautovic"],
      panchinari: ["P12 - Tatarusanu", "P13 - Milinkovic-Savic V", "D14 - Rrahmani", "D15 - Pellegrini Lu", "D16 - Nuytinck", "C17 - Wijnaldum", "C18 - Ederson J", "A19 - Lookman","un","un","un","un","un"],

      //voti: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
        voti: [0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
    },
    formazione2: {
       titolari: ["P1 - Meret", "D2 - Posch", "D3 - Dumfries", "D4 - Tomori", "C5 - Bonaventura", "C6 - Chiesa", "C7 - Matic", "C8 - Luis Alberto", "A9 - Kvaratskhelia", "A10 - Abraham", "A11 - Osimhen"] ,
      panchinari: ["P12 - Gollini", "P13 - Marfella", "D14 - Lazzari M", "D15 - Hysaj", "D16 - Perez N", "D17 - Igor", "C18 - Di Maria", "C19 - Brozovic", "C20 - Lopez M", "C21 - Saelemaekers", "A22 - Pedro R", "A23 - Origi", "A24 - Alvarez A"] ,
      //voti: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

        voti: [0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
    }
  },
  {
    fantallenatore1: "AS TROMBA ",
    fantallenatore2: "TEAMCHIAPPETTO",
    formazione1: {
      titolari: ["P1 - Musso", "D2 - Parisi F", "D3 - Scalvini", "D4 - Acerbi", "D5 - Kim", "C6 - Koopmeiners", "C7 - Pellegrini", "C8 - Pessina", "A9 - Hojlund", "A10 - Okereke", "A11 - Martinez L"],
      panchinari: ["P12 - Sportiello", "P13 - Rossi F", "D14 - Becao", "D15 - Valeri", "D16 - Bradaric D", "D17 - Gabbia", "C18 - Volpato C", "C19 - Pogba", "C20 - Vlasic", "C21 - Sabiri", "C22 - Fagioli", "C23 - Basic", "A24 - El Shaarawy", "A25 - Ibrahimovic", "A26 - Satriano", "A27 - De Luca"],
    //voti: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
      voti: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
       
    },
    formazione2: {
      titolari: ["P1 - Onana", "D2 - Toljan", "D3 - Dimarco", "D4 - Birindelli", "C5 - Lobotka", "C6 - Pereyra", "C7 - Bajrami", "C8 - Politano", "A9 - Lukaku R", "A10 - Leao", "A11 - Nzola"],
      panchinari: ["P12 - Szczesny", "P13 - Perin", "D14 - Zortea", "D15 - Marusic", "D16 - Mario Rui", "D17 - Bijol", "C18 - Kostic", "C19 - Ferguson", "C20 - Messias", "A21 - Pinamonti", "A22 - Beto", "A23 - Piccoli"],
     //voti: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
       voti: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
    }
  }
  ];

  sfide.forEach((sfida) => {
    const table = document.createElement("table");
    const updateScores = () => {
      sommaTitolari1Cell.textContent = "Somma Titolari: " + sfida.formazione1.voti.slice(0, sfida.formazione1.titolari.length).reduce((a, b) => a + b, 0);
      sommaTitolari2Cell.textContent = "Somma Titolari: " + sfida.formazione2.voti.slice(0, sfida.formazione2.titolari.length).reduce((a, b) => a + b, 0);
    };
    const sommaTitolari1 = sfida.formazione1.voti.slice(0, sfida.formazione1.titolari.length).reduce((a, b) => a + b, 0);
    const sommaTitolari2 = sfida.formazione2.voti.slice(0, sfida.formazione2.titolari.length).reduce((a, b) => a + b, 0);
    const tuttiIGiocatori = [
  ...sfida.formazione1.titolari,
  ...sfida.formazione1.panchinari,
  ...sfida.formazione2.titolari,
  ...sfida.formazione2.panchinari,
];

   //... codice precedente ...

table.innerHTML = `
<caption>${sfida.fantallenatore1} vs ${sfida.fantallenatore2}</caption>
<thead>
  <tr>
    <td colspan="2">Titolari</td>
    <td colspan="2">Titolari</td>
  </tr>
  ${sfida.formazione1.titolari.map((giocatore, index) => `
    <tr>
      <td class="titolari-nome">${giocatore}</td>
      <td class="titolari-voto lampeggiare" contenteditable="true">${sfida.formazione1.voti[index]}</td>
      <td class="titolari-nome">${sfida.formazione2.titolari[index]}</td>
      <td class="titolari-voto lampeggiare" contenteditable="true">${sfida.formazione2.voti[index]}</td>
    </tr>
  `).join("")}
  <tr>
    <td colspan="2">Panchinari</td>
    <td colspan="2">Panchinari</td>
  </tr>
  ${sfida.formazione1.panchinari.map((giocatore, index) => `
    <tr>
      <td class="panchinari-nome">${giocatore}</td>
      <td class="panchinari-voto" contenteditable="true">${sfida.formazione1.voti[sfida.formazione1.titolari.length + index]}</td>
      <td class="panchinari-nome">${sfida.formazione2.panchinari[index]}</td>
      <td class="panchinari-voto" contenteditable="true">${sfida.formazione2.voti[sfida.formazione2.titolari.length + index]}</td>
    </tr>
  `).join("")}
  <tr>
    <td colspan="2" class="somma-titolari">Somma Titolari: ${sommaTitolari1}</td>
    <td colspan="2" class="somma-titolari">Somma Titolari: ${sommaTitolari2}</td>
  </tbody>
`;

const celleModificabili = table.querySelectorAll("[contenteditable='true']");

celleModificabili.forEach((cell, index) => {
  cell.addEventListener('blur', (e) => {
    const nuovoVoto = parseFloat(e.target.textContent);
    if (!isNaN(nuovoVoto)) {
      if (cell.className.includes('titolari-voto')) {
        sfida.formazione1.voti[index] = nuovoVoto;
      } else {
        sfida.formazione1.voti[sfida.formazione1.titolari.length + index] = nuovoVoto;
      }
      // Salva le modifiche nel localStorage
      localStorage.setItem('sfide', JSON.stringify(sfide));
    }
  });
});

const sommaTitolari1Cell = table.querySelector('.somma-titolari-1');
    const sommaTitolari2Cell = table.querySelector('.somma-titolari-2');

    const titolariVotiCells = table.getElementsByClassName('titolari-voto');
    Array.from(titolariVotiCells).forEach((cell, index) => {
      cell.addEventListener('input', (e) => {
        const nuovoVoto = parseFloat(e.target.textContent);
        if (!isNaN(nuovoVoto)) {
          sfida.formazione1.voti[index] = nuovoVoto;
          updateScores();
        }
      });
    });


    const panchinariVotiCells = table.getElementsByClassName('panchinari-voto');
    Array.from(panchinariVotiCells).forEach((cell, index) => {
      cell.addEventListener('input', (e) => {
        const nuovoVoto = parseFloat(e.target.textContent);
        if (!isNaN(nuovoVoto)) {
          sfida.formazione2.voti[index] = nuovoVoto;
          updateScores();
        }
      });
    });
    formazioniLiveContainer.appendChild(table);
  });
// Aggiorna i voti dei giocatori
  aggiornaVotiGiocatori();
}
function mostraSezione(idSezione) {
  const sezioni = document.querySelectorAll('main > section');
  for (const sezione of sezioni) {
    sezione.style.display = 'none';
  }
  document.getElementById(idSezione).style.display = 'block';
}

// Event listeners per i pulsanti
document.getElementById("btn-formazioni-live").addEventListener("click", () => {
  mostraSezione("formazioni-live");
  mostraFormazioniLive();
});
document.getElementById('btn-classifica').addEventListener('click', () => mostraSezione('classifiche'));
document.getElementById('btn-calendario').addEventListener('click', () => mostraSezione('calendario'));
document.getElementById('btn-fantallenatori').addEventListener('click', () => mostraSezione('fantallenatori'));
document.getElementById('btn-rose-calciatori').addEventListener('click', () => mostraSezione('rose-giocatori'));
document.getElementById("btn-regolamento").addEventListener('click', () => mostraSezione('regolamento'));
document.getElementById('btn-fantamilioni').addEventListener('click', () => {
  mostraSezione('situazione-fantamilioni');
  // Assicurati che il percorso dell'immagine sia corretto. Potrebbe essere necessario aggiungere il percorso della cartella, ad esempio 'immagini/fantamilioni.jpg'
  document.getElementById('immagine-fantamilioni').src = 'fantamilioni.jpg';
});

document.getElementById('btn-asta').addEventListener('click', () => {
    // Mostra la sezione Asta
    sections.forEach((section) => {
      if (section.id === 'asta') {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  
    // Carica il file XLSX dal server Vercel
    fetch('https://fantacalcio-alessio995.vercel.app/FANTACALCIO_MERCATO_GENNAIO_22.xlsx') // Sostituisci con l'URL del tuo file XLSX su Vercel
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonTable = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
        const container = document.getElementById('asta-container');
        hot = new Handsontable(container, {
            data: jsonTable,
            rowHeaders: true,
            colHeaders: true,
            dropdownMenu: true,
            contextMenu: true,
            licenseKey: 'non-commercial-and-evaluation',
            stretchH: 'all', // Aggiungi questa riga per adattare la larghezza delle colonne al contenitore
            autoRowSize: true, // Aggiungi questa riga per adattare automaticamente l'altezza delle righe
          });
      })
      .catch((error) => {
        console.error('Error fetching the XLSX file:', error);
      });
  });
  



// Aggiungi un listener per l'evento "change" al menu a discesa delle giornate
giornataSelezionata.addEventListener("change", (e) => {
  mostraPartite(e.target.value);
});




  
  /// Inizializzazione delle funzioni
  


// Inizializzazione delle funzioni
aggiornaListaPartecipanti();
aggiornaSelectSquadre();
aggiornaClassifica();
mostraPartite(1);
popolaTabellaClassifica();
mostraFormazioniLive()
