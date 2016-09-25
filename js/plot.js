/*
 x: ['2013-11-04 03:00:00', '2013-11-04 05:23:00', '2013-11-04 12:23:00'],
      y: [1, 3, 6],
*/

function drawTodayPlot(id, xdata, ydata)
{
  var data = [
    {
      x: xdata,
      y: ydata,
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

  Plotly.newPlot(id, data, layout);
}






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