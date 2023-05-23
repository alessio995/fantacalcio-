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
            { squadra1: "AS TROMBA", squadra2: "BENEVENGO", risultato1: 1 , risultato2: 1 },
            { squadra1: "TEAMCHIAPPETTO", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 2, risultato2: 3 },
            { squadra1: "DRINK TEAM", squadra2: "ASTON BIRRA", risultato1: 1, risultato2: 2 },
            
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

  const sfide = [
  {
    fantallenatore1: "AS TROMBA",
    fantallenatore2: "BENEVENGO",
    formazione1: {
      titolari: ["P - Musso", "D - Parisi", "D - Scalvini", "D - Valeri", "D - Kim", "C - Koopmeiners", "C - Pellegrini", "C - Fagioli", "C - Vlasic", "A - Martinez L", "A - Okereke"],
      panchinari: ["P - Sportiello", "P - Rossi F", "D - Becao", "D - Acerbi", "D - Bradaric D", "D - Gabbia", "C - Volpato", "C - Pessina", "C - Pogba", "C - Sabiri","A - Hojlund", "A - Ibrahimovic", "A - Satriano", "A - De Luca"],
      

      voti: [0, 0, 5.5, 5, 7,5.5,0,0,6,6,5,5,0,0,0,0,0,0,10,0,0,10,0,0,0]
    },
    formazione2: {
      titolari: ["P - RUI PATRICIO", "D - CAMBIASO", "D - DODO D", "D - CELIK", "C - CALHANOGLU", "C - TONALI", "C - FELIPE ANDERSON", "C - RICCI S", "A - BERARDI", "A - VLAHOVIC", "A - DYBALA"],
      panchinari: ["P - BOER", "P - SVILAR", "D - CUADRADO", "D - HATEBOER", "D - DJIMSITI", "D - LYKOGIANNIS", "C - MIRANCHUK", "C - DJURICIC", "C - BREKALO", "C - SENSI", "A - CIURRIA", "A - REBIC", "A - SHOMURODOV", "A - SANABRIA"],
      voti: [0,6.5,0,0,0,8.5,5,6,9.5,0,0,0,0,0,0,6.5,0,6,0,0,5.5,10,0,0,0]
    }
  },
    {
    fantallenatore1: "TEAMCHIAPPETTO",
    fantallenatore2: "MIGNOTTINGHAM FOREST FC",
    formazione1: {
      titolari: ["P - SZCZESNY", "D - TOLJAN", "D - DIMARCO", "D - BIJOL", "C - PEREYRA", "C - BAJRAMI", "C - FERGUSON", "C - MESSIAS", "A - LUKAKU R", "A - LEAO", "A - NZOLA"],
      panchinari: ["P - PERIN", "P - ONANA", "D - ZORTEA", "D - MARUSIC", "D - MARIO RUI", "D - BIRINDELLI", "C - KOSTIC", "C - POLITANO", "C - LOBOTKA", "A - BETO", "A - PINAMONTI", "A - PICCOLI"],

      voti: [0, 6, 7.5, 5, 6,6,10.5,6,10,12,6,0,6,0,0,0,7.5,0,0,0,0,6,0]
    },
    formazione2: {
       titolari:  ["P - MAIGNAN", "D - SMALLING", "D - HERNANDEZ T", "D - RRAHMANI", "C - MILINKOVIC-SAVIC", "C - FRATTESI", "C - WIJNALDUM", "C - ELMAS", "A - GIROUD", "A - IMMOBILE", "A - ARNAUTOVIC"],
      panchinari:  ["P - TATARUSANU", "P - MILINKOVIC-SAVIC V", "D - BASTONI", "D - PELLEGRINI LU", "D - NUYTINCK", "C - SAMARDZIC", "C - EDERSON J", "A - LOOKMAN", "A - LAURIENTE"],
      voti: [5, 0, 5.5, 6.5, 5.5,6.5,0,5.5,16.5,9,10.5,0,0,0,0,5,0,6,7.5,0]
    }
  },
  {
    fantallenatore1: "DRINK TEAM ",
    fantallenatore2: "ASTON BIRRA",
    formazione1: {
      titolari: ["P - MERET", "D - DUMFRIES", "D - TOMORI", "D - POSCH", "C - BROZOVIC", "C - SAELEMAEKERS", "C - LUIS ALBERTO", "C - DI MARIA", "A - KVARATSKHELIA", "A - OSIMHEN", "A - ABRAHAM"],
      panchinari: ["P - GOLLINI", "P - MARFELLA", "D - PEREZ N", "D - LAZZARI M", "D - HYSAJ", "D - IGOR", "C - CHIESA", "C - LOPEZ M", "C - MATIC", "C - GONZALEZ J", "A - PEDRO R", "A - ORIGI", "A - ALVAREZ A"],
      voti: [5, 6, 6.5, 10, 5.5,6.5,7,0,7,5.5,0,0,0,0,0,0,0,0,6.5,0,0,0,0,0]
    },
    formazione2: {
      titolari: ["P - TERRACCIANO", "D - DI LORENZO", "D - CARLOS AUGUSTO", "D - MAEHLE", "C - BARELLA", "C - ZIELINSKI", "C - ZACCAGNI", "C - STREFEZZA", "A - DIA", "A - MILIK", "A - CAPRARI"],
      panchinari: ["P - SIRIGU", "P - CEROFOLINI", "D - ROMAGNOLI A", "D - UDOGIE", "D - FERRARI G", "D - HOLM", "C - GONZALEZ N", "C - DE KETELAERE", "C - THORSTVEDT", "A - DZEKO", "A - CAPUTO", "A - ZAPATA D", "A - SOULE"],
      voti: [0, 10.5, 6.5, 6, 6.5,7.5,6.5,6,0,0,5.5,0,0,0,0,6,0,0,0,5.5,0,0,0,0]
    }
  }
  ];

  sfide.forEach((sfida) => {
    const table = document.createElement("table");
    const sommaTitolari1 = sfida.formazione1.voti.slice(0, sfida.formazione1.titolari.length).reduce((a, b) => a + b, 0);
    const sommaTitolari2 = sfida.formazione2.voti.slice(0, sfida.formazione2.titolari.length).reduce((a, b) => a + b, 0);
    const tuttiIGiocatori = [
  ...sfida.formazione1.titolari,
  ...sfida.formazione1.panchinari,
  ...sfida.formazione2.titolari,
  ...sfida.formazione2.panchinari,
];

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
    <td class="titolari-voto lampeggiare">${sfida.formazione1.voti[index]}</td>
    <td class="titolari-nome">${sfida.formazione2.titolari[index]}</td>
    <td class="titolari-voto lampeggiare">${sfida.formazione2.voti[index]}</td>
  </tr>
`).join("")}
<tr>
  <td colspan="2">Panchinari</td>
  <td colspan="2">Panchinari</td>

</tr>
${sfida.formazione1.panchinari.map((giocatore, index) => `
  <tr>
    <td class="panchinari-nome">${giocatore}</td>
    <td class="panchinari-voto">${sfida.formazione1.voti[sfida.formazione1.titolari.length + index]}</td>
    <td class="panchinari-nome">${sfida.formazione2.panchinari[index]}</td>
    <td class="panchinari-voto">${sfida.formazione2.voti[sfida.formazione2.titolari.length + index]}</td>
  </tr>
`).join("")}
<tr>
  <td colspan="2" class="somma-titolari">Somma Titolari: ${sommaTitolari1}</td>
  <td colspan="2" class="somma-titolari">Somma Titolari: ${sommaTitolari2}</td>
      </tbody>
    `;
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
