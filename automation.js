var data = [{
  values: [8, 33, 16, 28, 15],
  labels: ['High-Risk', 'Moderately High-Risk', 'Moderate-Risk', 'Moderately Low-Risk','Low-Risk'],
  textposition: 'outside',
  name: "How Automation will Effect the Jobs",
  domain: {column: 1},
  name: '',
  hoverinfo: 'label+percent+name',
  type: 'pie'
}];

var layout = {
    annotations: [
  
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: 1.1,
        xanchor: 'center',
        yanchor: 'top',
        text: 'How Automation will Effect the Job Market',
        font:{
          family: 'Arial',
          size: 25,
          color: 'rgb(37,37,37)'
        },
        showarrow: false
      },
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: -0.1,
        xanchor: 'center',
        yanchor: 'top',
        text: 'Source: Bureau of Labor Statistics',
        text1: 'Information Technology & Innovation Foundation', 
        showarrow: false,
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(150,150,150)'
        }
      }
    ],
    height: 600,
    width: 600,
    grid: {rows: -1, columns: 2}
  };


Plotly.newPlot('automation', data, layout);

