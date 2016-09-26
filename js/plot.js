/**
 * @param {Array<datetime>} times - Mätpunkternas tidpunkt t.ex ['2016-11-04 03:00', '2016-11-04 04:00', '2016-11-04 05:00']
 * @param {Array<number>} claims - Antal anmälningar vid varje tidsintervall t.ex [54, 23, 79]
 * @return {Array<object>} Array med ett element som följer Plotly krav av data
 */
function toTodayData(times, claims)
{
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
}

/**
 * @param {Array<datetime>} xdata - Mätpunkternas tidpunkt t.ex ['2016-11-05', '2016-11-06', '2016-11-07']
 * @param {Array<number>} mega - Antal anmälningar som är skickade till mega vid varje tidsintervall t.ex [20, 43, 87]
 * @param {Array<number>} kw - Antal anmälningar som inte är skickade till mega vid varje tidsintervall [10, 23, 12]
 * @return {Array<object>} Array med två element som följer Plotly krav av data
 */
function toWeekData(times, megaClaims, kwClaims)
{
  var megaTexts;
  megaClaims.forEach(function(claim) {
    this.megaTexts.add('sparad i mega');
  }, this);

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

  var kw = {
    x: times,
    y: kwClaims,
    text: ['vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan'],
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


  var data = [
    {
      x: ['2016-11-04 03:00', '2016-11-04 04:00', '2016-11-04 05:00'],
      y: [54, 23, 79],
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

  var layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    yaxis: {
      gridcolor: 'rgba(255,255,255,0.3)'
    },
    font:{
      color: 'white',
      family: 'PT Sans Narrow, sans-serif',
    },
    margin: {
      t: 20,
      r: 20,
      b: 18,
      l: 20,
      pad: 2
    },
    height: 250,
    xaxis: {
      tickformat: '%H:%M',
      gridcolor: 'rgba(255,255,255,0.3)'
    }
  }

  Plotly.newPlot('todayAgs', data, layout);







var mega = {
  x: ['2016-09-19', '2016-09-20', '2016-09-21', '2016-09-22', '2016-09-23', '2016-09-24', '2016-09-25'],
  y: [87, 90, 68, 76, 70, 10, 5],
  text: ['sparad i mega','sparad i mega','sparad i mega','sparad i mega','sparad i mega','sparad i mega','sparad i mega'],
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

var kw = {
  x: ['2016-09-19', '2016-09-20', '2016-09-21', '2016-09-22', '2016-09-23', '2016-09-24', '2016-09-25'],
  y: [4, 10, 15, 29, 34, 50, 60],
  text: ['vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan','vänta på bekräftan'],
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

var weekData = [mega, kw];

var weekLayout = {
  barmode: 'stack',
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  yaxis: {
    color: 'white'
  },
  font:{
    color: 'white',
    family: 'PT Sans Narrow, sans-serif',
  },
  margin: {
    t: 20,
    r: 20,
    b: 35,
    l: 20,
    pad: 2
  },
  height: 250
};

Plotly.newPlot('weekAgs', weekData, weekLayout);