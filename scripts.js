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
            { squadra1: "DRINK TEAM", squadra2: "AS TROMBA", risultato1: 0 , risultato2: 0 },
            { squadra1: "TEAM CHIAPPETTO", squadra2: "BENEVENGO", risultato1: 0, risultato2: 0 },
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "ASTON BIRRA", risultato1: 0, risultato2: 0 },
        
        ],
    },
    {
        giornata: 33,
        partite: [
            { squadra1: "ASTON BIRRA", squadra2: "DRINK TEAM", risultato1: 0 , risultato2: 0 },
            { squadra1: "BENEVENGO", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 0, risultato2: 0 },
            { squadra1: "AS TROMBA", squadra2: "TEAMCHIAPPETTO", risultato1: 0, risultato2: 0 },
            
        ],
    },
    {
        giornata: 34,
        partite: [
            { squadra1: "DRINK TEAM", squadra2: "TEAMCHIAPPETTO", risultato1: 0 , risultato2: 0 },
            { squadra1: "MIGNOTTINGHAM FOREST FC", squadra2: "AS TROMBA", risultato1: 0, risultato2: 0 },
            { squadra1: "ASTON BIRRA", squadra2: "BENEVENGO", risultato1: 0, risultato2: 0 },
            
        ],
    },
    {
        giornata: 35,
        partite: [
            { squadra1: "BENEVENGO", squadra2: "DRINK TEAM", risultato1: 0 , risultato2: 0 },
            { squadra1: "AS TROMBA", squadra2: "ASTON BIRRA", risultato1: 0, risultato2: 0 },
            { squadra1: "TEAMCHIAPPETTO", squadra2: "MIGNOTTINGHAM FOREST FC", risultato1: 0, risultato2: 0 },
            
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
      squadra: 'DRINK TEAM',
      punti: 56,
      vinte: 17,
      pareggiate: 6,
      perse: 9,
      golFatti: 59,
      golSubiti: 46,
      puntiTotali: 2352,
    },
  {
      posizione: 2,
      squadra: 'MIGHOTTINGHAN FOREST FC',
      punti: 54,
      vinte: 15,
      pareggiate: 7,
      perse: 10,
      golFatti: 55,
      golSubiti: 40,
      puntiTotali: 2320,
    },
  {
      posizione: 3,
      squadra: 'TEAM CHIAPPETTO',
      punti: 53,
      vinte: 15,
      pareggiate: 8,
      perse: 9,
      golFatti: 52,
      golSubiti: 44,
      puntiTotali: 2318,
    },
  {
      posizione: 4,
      squadra: 'ASTON BIRRA',
      punti: 42,
      vinte: 12,
      pareggiate: 6,
      perse: 14,
      golFatti: 50,
      golSubiti: 51,
      puntiTotali: 2311,
    },
  {
      posizione: 5,
      squadra: 'BENEVENGO',
      punti: 33,
      vinte: 9,
      pareggiate: 6,
      perse: 17,
      golFatti: 42,
      golSubiti: 62,
      puntiTotali: 2248.5,
    },
  {
      posizione: 6,
      squadra: 'AS TROMBA',
      punti: 29,
      vinte: 6,
      pareggiate: 11,
      perse: 15,
      golFatti: 43,
      golSubiti: 58,
      puntiTotali: 2257,
    },
    // ... altre squadre
  ];
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
    fantallenatore1: "ASTON BIRRA",
    fantallenatore2: "DRINK TEAM",
    formazione1: {
      titolari: ["P - Terracciano", "D - Carlos Augusto", "D - Di Lorenzo", "D - Maehle", "C - Gonzalez N", "C - Zaccagni", "C - Zielinski", "C - Barella", "A - Dia", "A - Zapata D", "A - Milik"],
      panchinari: ["P - Sirigu", "P - Cerofolini", "D - Udogie", "D - Ferrari G", "D - Romagnoli A", "D - Holm", "C - De Ketelaere", "C - Thorstvedt", "C - Strefezza", "A - Caputo", "A - Dzeko", "A - Caprari", "A - Soule"],

      voti: [6, 6, 6, 6, 6,6,6,6,6,6,6]
    },
    formazione2: {
      titolari: [],
      panchinari: [],
      voti: [6, 6, 6, 6, 6,6,6,6,6,6,6]
    }
  },
    {
    fantallenatore1: "BENEVENGO",
    fantallenatore2: "MIGNOTTINGHAM FOREST FC",
    formazione1: {
      titolari:  ["P - Rui Patricio", "D - Dodo D", "D - Cuadrado", "D - Celik", "C - Miranchuk", "C - Calhanoglu", "C - Felipe Anderson", "C - Tonali", "A - Sanabria", "A - Vlahovic", "A - Dybala"],
      panchinari: ["P - Boer", "P - Svilar", "D - Cambiaso", "D - Djimsiti", "D - Hateboer", "D - Lykogiannis", "C - Ricci S", "C - Sensi", "C - Brekalo", "C - Djuricic", "A - Berardi", "A - Ciurria", "A - Shomurodov", "A - Rebic"],

      voti: [6, 6, 6, 6, 6,6,6,6,6,6,6]
    },
    formazione2: {
       titolari:  ["P - Maignan", "D - Rrahmani", "D - Hernandez T", "D - Bastoni", "C - Milinkovic-Savic", "C - Mkhitaryan", "C - Elmas", "C - Ederson J", "A - Immobile", "A - Giroud", "A - Lookman"],
      panchinari:  ["P - Tatarusanu", "P - Milinkovic-Savic V", "D - Pellegrini Lu", "D - Smalling", "D - Nuytinck", "C - Frattesi", "C - Samardzic", "C - Wijnaldum", "A - Lauriente'", "A - Arnautovic"],
      voti: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    }
  },
  {
    fantallenatore1: "AS TROMBA",
    fantallenatore2: "TEAM CHIAPPETTO",
    formazione1: {
      titolari: ["P - Musso", "D - Becao", "D - Scalvini", "D - Acerbi", "D - Kim", "C - Koopmeiners", "C - Pellegrini", "C - Fagioli", "A - Martinez L", "A - Hojlund", "A - El Shaarawy"],
      panchinari: ["P - Sportiello", "P - Rossi F", "D - Valeri", "D - Parisi F", "D - Bradaric D", "D - Gabbia", "C - Vlasic", "C - Pessina", "C - Pogba", "C - Sabiri", "C - Volpato C", "C - Basic", "A - Okereke", "A - Ibrahimovic", "A - Satriano", "A - De Luca"],
      voti: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    formazione2: {
      titolari: ["P - Onana", "D - Marusic", "D - Dimarco", "D - Toljan", "C - Baldanzi", "C - Messias", "C - Kostic", "C - Pereyra", "A - Leao", "A - Lukaku R", "A - Beto"],
      panchinari: ["P - Szczesny", "P - Perin", "D - Zortea", "D - Birindelli", "D - Bijol", "C - Lobotka", "C - Ferguson", "C - Politano", "C - Radonjic", "C - Bajrami", "A - Nzola", "A - Lozano", "A - Piccoli"],
      voti: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    }
  }
  ];

  sfide.forEach((sfida) => {
    const table = document.createElement("table");
    const sommaTitolari1 = sfida.formazione1.voti.slice(0, sfida.formazione1.titolari.length).reduce((a, b) => a + b, 0);
    const sommaTitolari2 = sfida.formazione2.voti.slice(0, sfida.formazione2.titolari.length).reduce((a, b) => a + b, 0);
    table.innerHTML = `
      <caption>${sfida.fantallenatore1} vs ${sfida.fantallenatore2}</caption>
      <thead>
        <tr>
          <th colspan="2">${sfida.fantallenatore1}</th>
          <th colspan="2">${sfida.fantallenatore2}</th>
        </tr>
        <tr>
          <th>Giocatori</th>
          <th>Voto</th>
          <th>Giocatori</th>
          <th>Voto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="2">Titolari</td>
          <td colspan="2">Titolari</td>
        </tr>
        ${sfida.formazione1.titolari.map((giocatore, index) => `
          <tr class="titolari">
            <td>${giocatore}</td>
            <td>${sfida.formazione1.voti[index]}</td>
            <td>${sfida.formazione2.titolari[index]}</td>
            <td>${sfida.formazione2.voti[index]}</td>
          </tr>
        `).join("")}
        <tr>
          <td>Somma Totale</td>
          <td>${sommaTitolari1}</td>
          <td>Somma Totale</td>
          <td>${sommaTitolari2}</td>
        </tr>
        <tr>
          <td colspan="2">Panchinari</td>
          <td colspan="2">Panchinari</td>
        </tr>
        ${sfida.formazione1.panchinari.map((giocatore, index) => `
          <tr>
            <td>${giocatore}</td>
            <td>${sfida.formazione1.voti[sfida.formazione1.titolari.length + index]}</td>
            <td>${sfida.formazione2.panchinari[index]}</td>
            <td>${sfida.formazione2.voti[sfida.formazione2.titolari.length + index]}</td>
          </tr>
        `).join("")}
      </tbody>
    `;
    formazioniLiveContainer.appendChild(table);
  });
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
