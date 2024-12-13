import React, { useState, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import axios from 'axios';

const Chart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Technical skills across projects',
        backgroundColor: [],
        borderColor: [],
        data: [],
      },
    ],
  });

  const languageColors = {
    'JavaScript': ['#ffe119', '#cc9f17'],
    'HTML': ['#4363d8', '#324ea8'],
    'CSS': ['#42d4f4', '#31a2c6'],
    'Python': ['#911eb4', '#701a88'],
    'C#': ['#f58231', '#e37127'],
    'FLASK': ['#3cb44b', '#2a8f36'],
    'React': ['#e6194B', '#bf2130']
  };

  useEffect(() => {
    const repos = ['E-COMMERCE-BOOK-STORE', 'PORTFOLIO'];
    const languageData = {};

    const fetchRepoLanguages = async (repo) => {
      const response = await axios.get(`https://api.github.com/repos/SAHIL8569/${repo}/languages`);
      return response.data;
    };

    const aggregateData = async () => {
      const promises = repos.map(repo => fetchRepoLanguages(repo));
      const results = await Promise.all(promises);

      results.forEach(repoLanguages => {
        for (const [key, value] of Object.entries(repoLanguages)) {
          if (languageData[key]) {
            languageData[key] += value;
          } else {
            languageData[key] = value;
          }
        }
      });

      const backgroundColors = [];
      const borderColors = [];
      Object.keys(languageData).forEach(lang => {
        if (languageColors[lang]) {
          backgroundColors.push(languageColors[lang][0]);
          borderColors.push(languageColors[lang][1]);
        } else {
          backgroundColors.push('#ddd');
          borderColors.push('#ccc');
        }
      });

      setData({
        labels: Object.keys(languageData),
        datasets: [{
          ...data.datasets[0],
          data: Object.values(languageData),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
        }],
      });
    };

    aggregateData();
  }, []);

  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <CDBContainer style={{ padding: "30px 0px 50px" }}>
      <h3 className="mt-5">My Professional Skills Across Projects</h3>
      <HorizontalBar data={data} options={options} />
    </CDBContainer>
  );
};

export default Chart;
