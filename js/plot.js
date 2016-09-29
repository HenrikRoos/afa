/**
 * @param {Array<datetime>} times - Mätpunkternas tidpunkt t.ex ['2016-11-04 03:00', '2016-11-04 04:00', '2016-11-04 05:00']
 * @param {Array<number>} claims - Antal anmälningar vid varje tidsintervall t.ex [54, 23, 79]
 * @return {Array<object>} Array med ett element som följer Plotly krav av data
 */
function toTodayData(times, claims) {
  return [
    {
      x: times,
      y: claims,
      type: 'scatter',
      line: {
        color: 'rgba(255,255,255,0.9)'
      },
      marker: {
        size: 10,
        color: 'rgba(255,255,255,0.7)'
      }
    }
  ];
};

/**
 * @return {Object} Konfiguration för layout anpassat för today layout
 */
function getTodayLayout() {
  return {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    yaxis: {
      gridcolor: 'rgba(255,255,255,0.3)'
    },
    font: {
      color: 'white',
      family: 'PT Sans Narrow, sans-serif',
    },
    margin: {
      t: 20,
      r: 20,
      b: 25,
      l: 20,
      pad: 2
    },
    xaxis: {
      tickformat: '%H:%M',
      gridcolor: 'rgba(255,255,255,0.3)'
    }
  }
};

/**
 * @param {Array<datetime>} xdata - Mätpunkternas tidpunkt t.ex ['2016-11-05', '2016-11-06', '2016-11-07']
 * @param {Array<number>} mega - Antal anmälningar som är skickade till mega vid varje tidsintervall t.ex [20, 43, 87]
 * @param {Array<number>} kw - Antal anmälningar som inte är skickade till mega vid varje tidsintervall [10, 23, 12]
 * @return {Array<object>} Array med två element som följer Plotly krav av data
 */
function toWeekData(times, megaClaims, kwClaims) {
  var megaTexts = [];
  megaClaims.forEach(function (claim) {megaTexts.push('sparad i mega')});

  var mega = {
    x: times,
    y: megaClaims,
    text: megaTexts,
    type: 'bar',
    showlegend: false,
    hoverinfo: 'y+text',
    marker: {
      color: 'rgba(130,180,70,0.8)',
      line: {
        color: 'rgba(130,180,70,1)',
        width: 1
      }
    }
  };

  var kwTexts = [];
  megaClaims.forEach(function (claim) { kwTexts.push('vänta på bekräftan')});

  var kw = {
    x: times,
    y: kwClaims,
    text: kwTexts,
    type: 'bar',
    hoverinfo: 'y+text',
    showlegend: false,
    marker: {
      color: 'rgba(255,150,0,0.6)',
      line: {
        color: 'rgba(255,150,0,0.8)',
        width: 1
      }
    }
  };
  return [mega, kw];
}

/**
 * @return {object} Konfiguration för layout anpassat för week layout
 */
function getWeekLayout() {
  return {
    barmode: 'stack',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    yaxis: {
      color: 'white'
    },
    font: {
      color: 'white',
      family: 'PT Sans Narrow, sans-serif',
    },
    margin: {
      t: 20,
      r: 20,
      b: 35,
      l: 22,
      pad: 2
    }
  }
};

/**
 * Rita ut text + diagramet för idag vyn
 * @oaram {string} id - Namnet på Div:en som today div:en skall vara barn i
 * @param {Array<datetime>} times - Mätpunkternas tidpunkt t.ex ['2016-11-04 03:00', '2016-11-04 04:00', '2016-11-04 05:00']
 * @param {Array<number>} claims - Antal anmälningar vid varje tidsintervall t.ex [54, 23, 79]
 */
function drawToday(id, times, claims)
{
  var ags = document.getElementById(id).getElementsByClassName("today")[0];

  var sum = claims.reduce(function(a, b) { return a + b; }, 0);
  var strong = document.createElement("strong");
  strong.appendChild(document.createTextNode(sum));
  ags.appendChild(strong);
  ags.appendChild(document.createTextNode(" anmälningar hittils idag"));

  var plotDiv = document.createElement("div");
  ags.appendChild(plotDiv);
  Plotly.newPlot(plotDiv, toTodayData(times, claims), getTodayLayout());
}

/**
 * Rita ut text + diagramet för en vecka
 * @oaram {string} id - Namnet på Div:en som today div:en skall vara barn i
 * @param {Array<datetime>} times - Mätpunkternas tidpunkt t.ex ['2016-11-04 03:00', '2016-11-04 04:00', '2016-11-04 05:00']
 * @param {Array<number>} mega - Antal anmälningar som är skickade till mega vid varje tidsintervall t.ex [20, 43, 87]
 * @param {Array<number>} kw - Antal anmälningar som inte är skickade till mega vid varje tidsintervall [10, 23, 12]
 */
function drawWeek(id, times, mega, kw)
{
  var ags = document.getElementById(id).getElementsByClassName("week")[0];

  var sumMega = mega.reduce(function(a, b) { return a + b; }, 0);
  var sumKw = kw.reduce(function(a, b) { return a + b; }, 0);
  var average = Math.round((sumMega + sumKw) / times.length);
  var strong = document.createElement("strong");
  strong.appendChild(document.createTextNode(average));
  ags.appendChild(strong);
  ags.appendChild(document.createTextNode(" anmälningar i genomsitt per dag"));

  var plotDiv = document.createElement("div");
  ags.appendChild(plotDiv);
  Plotly.newPlot(plotDiv, toWeekData(times, mega, kw), getWeekLayout());
}
