var pisaScience = {
    x: pisascienceJSON.map(row => row.countryName),
    y: pisascienceJSON.map(row => row.averageScore),
    text: pisascienceJSON.map(row => row.countryName),
    name: "PISA SCIENCE",
    type: "bar",
    marker:{
      color: ['rgba(0, 153, 0, 1)', 'rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 153, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)', 'rgba(0, 204, 0, 1)', 'rgba(0, 204, 0, 1)', 'rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)', 'rgba(0, 204, 0, 1)', 'rgba(0, 204, 0, 1)','rgba(0, 204, 0, 1)',
      'rgba(96,96,96,1)',
      'rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(204, 204, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 128, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 0, 1)']
    }
  }; 

  // Combining both traces
  var pisaScienceData = [pisaScience];
  
  // Apply the group barmode to the layout
  var pisaLayout = {
    title: "PISA SCIENCE SCORE",
    barmode: "group",
    annotations: [
      // {
      //   xref: 'paper',
      //   yref: 'paper',
      //   x: 0.0,
      //   y: 1.05,
      //   xanchor: 'left',
      //   yanchor: 'bottom',
      //   text: 'From High School to College Enrollment',
      //   font:{
      //     family: 'Arial',
      //     size: 20,
      //     color: 'rgb(37,37,37)'
      //   },
      //   showarrow: false
      // },
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
  Plotly.newPlot("pisaScience", pisaScienceData, pisaLayout);