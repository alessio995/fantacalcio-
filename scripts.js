// Inserisci qui la lista dei partecipanti, rose e giocatori
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
const classifica = {
    "AS TROMBA": 28,
    "ASTON BIRRA": 39,
    "BENEVENGO": 30,
    "DRINK TEAM": 55,
    "MIGNOTTINGHAM FOREST FC": 54,
    "TEAMCHIAPPETTO": 53,
};


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

function mostraSezione(sezione) {
    const sezioni = ['classifiche', 'calendario', 'fantallenatori', 'rose-giocatori'];
    sezioni.forEach((id) => {
      const elem = document.getElementById(id);
      if (id === sezione) {
        elem.style.display = 'block';
      } else {
        elem.style.display = 'none';
      }
    });
  }
  
  // Event listeners per i pulsanti
  document.getElementById('btn-classifica').addEventListener('click', () => mostraSezione('classifiche'));
  document.getElementById('btn-calendario').addEventListener('click', () => mostraSezione('calendario'));
  document.getElementById('btn-fantallenatori').addEventListener('click', () => mostraSezione('fantallenatori'));
  document.getElementById('btn-rose-calciatori').addEventListener('click', () => mostraSezione('rose-giocatori'));
  
  // Inizializzazione delle funzioni
  


// Inizializzazione delle funzioni
aggiornaListaPartecipanti();
aggiornaSelectSquadre();
aggiornaClassifica();
