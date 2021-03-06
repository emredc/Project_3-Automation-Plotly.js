
var pisaTrace = {
    x: pisaDataJSON.map(row => row.countryName),
    y: pisaDataJSON.map(row => row.averageScore),
    text: pisaDataJSON.map(row => row.countryName),
    name: "PISA MATH",
    type: "bar",
    marker:{
      color: ['rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)', 'rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)',
      'rgba(96, 96, 96,1)',
      'rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(255, 128, 0,1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 51, 51, 1)','rgba(255, 51, 51, 1)','rgba(255, 51, 51, 1)','rgba(255, 51, 51, 1)','rgba(255, 51, 51, 1)','rgba(255, 51, 51, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)']
    }
  }; 

  // Combining both traces
  var pisaData = [pisaTrace];
  
  // Apply the group barmode to the layout
  var pisaLayout = {
    title: "PISA MATHEMATICS SCORE",
    barmode: "group",
    annotations: [
    {
      xref: 'paper',
      yref: 'paper',
      x: 1,
      y: 1,
      xanchor: 'top',
      yanchor: 'left',
      text: 'Source: National Center for Education Statistics',
      showarrow: false,
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(150,150,150)'
      }
    }
  ]
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("pisa", pisaData, pisaLayout);