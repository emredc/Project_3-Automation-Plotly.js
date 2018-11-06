var trace1 = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    y: [374.837, 385.819, 396.836, 399.320, 392.509, 380.950, 373.507],
    name: 'Humanities',
    type: 'scatter'
  };
  var trace2 = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    y: [388.585, 412.368, 439.290, 462.677, 487.004, 518.130, 555.545],
    name: 'STEM',
    type: 'scatter'
  };
  var data = [trace1, trace2];
  var layout = {
    title: 'Degree Trends',
    xaxis: {
      title: 'Year',
      titlefont: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: 'Number of Grads',
      titlefont: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      },
     
    }
  };
  Plotly.newPlot('degree', data, layout);