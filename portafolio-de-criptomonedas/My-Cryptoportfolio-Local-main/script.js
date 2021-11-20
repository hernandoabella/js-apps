const portfolio = {
  "fiat": "EUR",
  "token":
    [
      {
        "cryptoTicker": "BTC",
        "cryptoName": "Bitcoin",
        "cryptoQty": "0.5",
        "cryptoInvestedSum": "4000"
      },
      {
        "cryptoTicker": "ADA",
        "cryptoName": "Cardano",
        "cryptoQty": "25000",
        "cryptoInvestedSum": "1000"
      },
      {
        "cryptoTicker": "ETH",
        "cryptoName": "Ethereum",
        "cryptoQty": "15",
        "cryptoInvestedSum": "1500"
      },
      {
        "cryptoTicker": "XMR",
        "cryptoName": "Monero",
        "cryptoQty": "50",
        "cryptoInvestedSum": "1000"
      }
    ]
};

const fiats = [
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "BRL", name: "Brazilian real", symbol: "R$" },
  { code: "CAD", name: "Canadian dollar", symbol: "$" },
  { code: "CHF", name: "Swiss franc", symbol: "Fr." },
  { code: "CLP", name: "Chilean peso", symbol: "$" },
  { code: "CNY", name: "Chinese yuan", symbol: "¥" },
  { code: "CZK", name: "Czech koruna", symbol: "Kč" },
  { code: "DKK", name: "Danish krone", symbol: "kr" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "Pound sterling", symbol: "£" },
  { code: "HKD", name: "Hong Kong dollar", symbol: "$" },
  { code: "HUF", name: "Hungarian forint", symbol: "Ft" },
  { code: "IDR", name: "Indonesian rupiah", symbol: "Rp" },
  { code: "ILS", name: "Israeli new shekel", symbol: "₪" },
  { code: "INR", name: "Indian rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese yen", symbol: "¥" },
  { code: "KRW", name: "South Korean won", symbol: "₩" },
  { code: "MXN", name: "Mexican peso", symbol: "$" },
  { code: "MYR", name: "Malaysian ringgit", symbol: "RM" },
  { code: "NOK", name: "Norwegian krone", symbol: "kr" },
  { code: "NZD", name: "New Zealand dollar", symbol: "$" },
  { code: "PHP", name: "Philippine peso", symbol: "₱" },
  { code: "PKR", name: "Pakistani rupee", symbol: "Rs" },
  { code: "PLN", name: "Polish złoty", symbol: "zł" },
  { code: "RUB", name: "Russian ruble", symbol: "₽" },
  { code: "SEK", name: "Swedish krona", symbol: "kr" },
  { code: "SGD", name: "Singapore dollar", symbol: "S$" },
  { code: "THB", name: "Thai baht", symbol: "฿" },
  { code: "TRY", name: "Turkish lira", symbol: "₺" },
  { code: "TWD", name: "New Taiwan dollar", symbol: "NT$" },
  { code: "USD", name: "United States dollar", symbol: "$" },
  { code: "ZAR", name: "South African rand", symbol: "R" }
];

// Descarga los precios actuales de las monedas desde una API externa. Luego llama a la función displayPortfolio
function downloadCoinPrices() {
  // El arreglo "allTickers" está lleno de todos los tickers criptográficos.
  let allTickers = portfolio.token.map(item => item.cryptoTicker);
  // console.log('allTicker: ' + allTickers);

  // Crear una petición URL de API
  let coinAPI = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + allTickers + "&tsyms=" + portfolio.fiat;
  // console.log('coinAPI: ' + coinAPI);

  // Oculta, busca y muestra 2 líneas a continuación para mostrar la cartera con los precios de demostración guardados localmente
  // coinPrices = coinpricesExample;
  // displayPortfolio();

  //*

  fetch(coinAPI)
    .then(handleErrors)
    .then(res => {
    // console.log(res.clone());
    // res.json() no se puede usar 2 veces en el callback. Usa res.clone() (mira https://stackoverflow.com/q/46742251/5263954)
      return res.json();
    })
    .then(prices => {
      // console.log(prices);
      coinPrices = prices;
      displayPortfolio();
      // createChartData();
      // Una vez que las tablas estén completamente renderizadas, ejecute la función de traducción para traducir la aplicación
      // let index = languages.indexOf(userLang);
      // changeAppLanguage(index);
    })
    .catch(error => {
        console.error('Hubo un error al descargar los precios de las monedas.:', error.message);
    });
    
    //*/
}

// Manejo de errores usando fetch
function handleErrors(response) {
  // console.log(response);
  if (!response.ok) {
    throw Error(response.statusText);
  }
    return response;
}

// Mostrar portafolio en la página
function displayPortfolio() {
  let myContainer = document.getElementById("display-portfolio");

  // GET-Anfrage una API de cryptocompare
  let thisHTML = "";
  thisHTML += "<table id='portfolio-table'>";
  thisHTML += "<thead>";
  thisHTML += "<tr>";
  thisHTML += "<th id='coin-name' onclick='sortTable(0)' title='Name of Cryptocurrency/Token. Click here to sort alphabetically'>Nombre <div class='arrows-name'><div title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='last-price' onclick='sortTable(1)' title='Last price. Click here to sort.'>Último <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='change-perc' onclick='sortTable(2)' title='Change in percent in the last 24h. Click here to sort.'>Cambio <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='gain-loss-24h' onclick='sortTable(3)' title='Gain/loss in the last 24h. Click here to sort.'>G/P Hoy <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='gain-loss' onclick='sortTable(4)' title='Overall gain/loss. Click here to sort.'>Ganancia / Pérdida <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "</tr>";
  thisHTML += "</thead>";

  let i = 0;
  let overallGainLoss = 0;
  let overallGainLossToday = 0;
  let cryptoStyle = "class='cryptoUp'";
  let fiatSymbol = fiats.find(i => i.code === portfolio.fiat).symbol;

  thisHTML += "<tbody>";
  thisHTML += "<tr>";

  for (i = 0; i < Object.keys(coinPrices['RAW']).length; i++) {
    let cryptoTicker = portfolio.token[i].cryptoTicker;
    let fullName = portfolio.token[i].cryptoName;
    let cryptoQty = portfolio.token[i].cryptoQty;
    let cryptoInvestedSum = portfolio.token[i].cryptoInvestedSum;
    let lastPrice = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['PRICE'];
    let changePct24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGEPCT24HOUR'];
    let change24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGE24HOUR'];
    // let fiatSymbol = coinPrices['DISPLAY'][cryptoTicker][portfolio.fiat]['TOSYMBOL'];

    let cryptoGainLoss = 0;
    let cryptoGainLossToday = 0;
    let cryptoBuyingPrice = 0;

    // Algunos valores de CryptoCompare devuelven "null". Eso rompería ".toFixed" a continuación:
    if (changePct24H != null) {
      changePct24H = changePct24H.toFixed(1).concat(" %"); // Ejemplo: 2.36: toFixed: Solo un dígito después de la coma (2.4). Concat: agrega el signo de porcentaje (2.4%).
    }

    if (cryptoQty != 0) {
      cryptoBuyingPrice = cryptoInvestedSum / cryptoQty;
      cryptoGainLoss = cryptoQty * (lastPrice - cryptoBuyingPrice);
      cryptoGainLossToday = cryptoQty * change24H;
      overallGainLoss += cryptoGainLoss;
      overallGainLossToday += cryptoGainLossToday;
    }

    // El código siguiente asegura que no haya demasiados dígitos después de la coma. parseFloat es necesario, porque lastPrice aparentemente se considera una cadena y toFixed solo funciona con números.
    if (lastPrice < 0.1) {
      lastPrice = parseFloat(lastPrice).toFixed(3);
    } else if (lastPrice < 10) {
      lastPrice = parseFloat(lastPrice).toFixed(2);
    } else {
      lastPrice = parseFloat(lastPrice).toFixed(0);
    }

    thisHTML += "<td><a href='https://coinmarketcap.com/currencies/" + fullName.toLowerCase() + "' target=_blank>" + fullName + "</a></td>";
    thisHTML += "<td>" + lastPrice + " " + fiatSymbol + "</td>";

    // Cambiar el color del número changePct24H y cryptoGainLossToday según el valor (-, 0, + -> red, black, green)
    cryptoStyle = redOrGreen(change24H);

    thisHTML += "<td " + cryptoStyle + ">" + changePct24H + "</td>";
    thisHTML += "<td " + cryptoStyle + ">" + cryptoGainLossToday.toFixed(0) + " " + fiatSymbol + "</td>";

    thisHTML += "<td " + redOrGreen(cryptoGainLoss) + ">" + cryptoGainLoss.toFixed(0) + " " + fiatSymbol + "</td>";
    thisHTML += "</tr>";
  }

    thisHTML += "</tbody>";
    thisHTML += "<tfoot>";
    thisHTML += "<tr>";
    thisHTML += "<td>Total</td>";
    thisHTML += "<td></td>";
    thisHTML += "<td></td>";

    thisHTML += "<td " + redOrGreen(overallGainLossToday) + ">" + add1000Separators(overallGainLossToday.toFixed(0)) + " " + fiatSymbol + "</td>";

    thisHTML += "<td " + redOrGreen(overallGainLoss) + ">" + add1000Separators(overallGainLoss.toFixed(0)) + " " + fiatSymbol + "</td>";
    thisHTML += "</tr>";
    thisHTML += "</tfoot>";
    thisHTML += "</table>";

    myContainer.innerHTML = thisHTML;
}

// Ordena la tabla DISPLAY PORTFOLIO haciendo clic en los encabezados de la tabla
function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0, xGreaterThanY;
  table = document.getElementById("portfolio-table");
  switching = true;
  let arrowDown = document.getElementsByClassName("arrows-name")[n].firstElementChild;
  let arrowUp = document.getElementsByClassName("arrows-name")[n].lastElementChild;

  // Establezca la dirección de clasificación en ascendente:
  dir = "asc";
  /* Haz un bucle que continuará hasta
   no se ha realizado ningún cambio: */
  while (switching) {
  // comience diciendo: no se realiza ningún cambio:
  switching = false;
  rows = table.rows;
  /* Recorra todas las filas de la tabla (excepto el
   primero, que contiene encabezados de tabla y el
   último - pies de tabla): */
  for (i = 1; i < (rows.length - 2); i++) {
  // Comience diciendo que no debería haber cambios:
  shouldSwitch = false;
  xGreaterThanY = false;
  /* Obtenga los dos elementos que desea comparar,
   uno de la fila actual y uno de la siguiente:
   n = 0: comparar cadenas
   n> 0: comparar números */
  if (n === 0) { // Compara cadenas de texto
    x = rows[i].getElementsByTagName("TD")[n].innerText.toLowerCase();
    y = rows[i + 1].getElementsByTagName("TD")[n].innerText.toLowerCase();
    if (x > y) xGreaterThanY = true;
  } else { // Compara números
    x = rows[i].getElementsByTagName("TD")[n].innerText.replace(/[^-0-9.]/g, '');//Regex: Remove everything except numbers, "-" and ".",e.g. "-35.6 %" --> "-35.6"
    y = rows[i + 1].getElementsByTagName("TD")[n].innerText.replace(/[^-0-9.]/g, '');
    if (Number(x) > Number(y)) xGreaterThanY = true;
  }
  /* comprueba si las dos filas deben cambiar de lugar,
   basado en la dirección, asc o desc: */
  if (dir == "asc") {
  // xGreaterThanY = true: cambia filas!
  if (xGreaterThanY) {
      shouldSwitch = true;
      break;
  }
  } else if (dir == "desc") {
  // Si xGreaterThanY = false y los 2 números no son iguales: ¡cambia de fila! 2da condición importante porque si los números son iguales habría un bucle infinito
  if (!xGreaterThanY && Number(x) !== Number(y)) {
      shouldSwitch = true;
      break;
  }
  }
  }
  if (shouldSwitch) {
  /* Si se ha marcado un interruptor, hágalo
   y marque que se ha realizado un cambio: */
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
      // Cada vez que se realiza un cambio, aumente este recuento en 1:
    switchcount++;
  } else {
  /* Si no se ha realizado ningún cambio Y la dirección es "asc",
  establece la dirección en "desc" y ejecuta el ciclo while de nuevo. */
  if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
  }
  }
  }
  // Configure la visualización de flechas de acuerdo con "asc" o "desc"
  showAllArrows(); // Mostrar todas las flechas en el encabezado, que podrían haber estado ocultas durante la operación de clasificación anterior
    if (dir == "asc") arrowDown.classList.remove("triangle-down"); // Cambia la pantalla solo a la flecha ARRIBA.
    else if (dir == "desc") arrowUp.classList.remove("triangle-up"); // Cambia la pantalla solo a la flecha ABAJO.
  }

  // Muestra todas las flechas de clasificación
function showAllArrows() {
  let allArrows = document.getElementsByClassName("arrows-name");
  for (let i = 0; i < allArrows.length; i++) {
    let arrowDown = document.getElementsByClassName("arrows-name")[i].firstElementChild;
    let arrowUp = document.getElementsByClassName("arrows-name")[i].lastElementChild;
    arrowDown.classList.add("triangle-down");
    arrowUp.classList.add("triangle-up");
  }
}

  // Si el valor cae en: red, value rose: green
function redOrGreen(value) {
  let cryptoStyle;
  if (value == 0) {
    cryptoStyle = "";
  } else if (value < 0) {
    cryptoStyle = "class='cryptoDown'";
  } else {
    cryptoStyle = "class='cryptoUp'";
  }
    return cryptoStyle;
}

// Agregue un punto como separador de miles
function add1000Separators(nStr) {
  // Example: nStr = 1427900000.45
  nStr += ''; // Convert input to string
  const x = nStr.split('.'); // Divide la cadena de texto en arreglos [ '1427900000', '45' ]
  let x1 = x[0]; // 1427900000
  const x2 = x.length > 1 ? ',' + x[1] : ''; // ,45
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2'); // 1427900.000 --> 1427.900.000 --> 1.427.900.000
  }
    return x1 + x2; // 1.427.900.000,45
}

downloadCoinPrices();