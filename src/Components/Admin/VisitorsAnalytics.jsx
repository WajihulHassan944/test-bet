import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const VisitorsAnalytics = ({ onResetStats }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [visitorType, setVisitorType] = useState('All'); // 'All' or 'Unique'
  const [clicksData, setClicksData] = useState({});
  const [uniqueClicksData, setUniqueClicksData] = useState({});
  const [totalClicks, setTotalClicks] = useState(0);
  const [allClicks, setAllClicks] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const filterOptions = ['All','Today', 'This Week', 'This Month', 'This Year'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fantasymmadness-game-server-three.vercel.app/get-total-clicks');
        const data = await response.json();
        const stats = data.stats;

        setClicksData(stats.clicksByDate || {});
        setUniqueClicksData(stats.clicksByDate || {});
        setAllClicks(stats.allClicks || 0);
        setTotalClicks(stats.totalClicks || 0);
        
        setFilteredData(Object.entries(visitorType === 'All' ? stats.allClicksByDate || {} : stats.clicksByDate || {}));
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchData();
  }, [visitorType]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);

    const dataToUse = visitorType === 'All' ? clicksData : uniqueClicksData;

    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const oneDayMs = 24 * 60 * 60 * 1000;
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 1)).toISOString().split('T')[0];
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    const startOfYear = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];

    const filtered = Object.entries(dataToUse).filter(([date]) => {
      if (filter === 'Today') return date === today;
      if (filter === 'This Week') return date >= startOfWeek && date <= today;
      if (filter === 'This Month') return date >= startOfMonth && date <= today;
      if (filter === 'This Year') return date >= startOfYear && date <= today;
      return true;
    });

    setFilteredData(filtered);
  };

  const handleVisitorTypeChange = (type) => {
    setVisitorType(type);
    setFilteredData(Object.entries(type === 'All' ? clicksData : uniqueClicksData));
  };

  const handleResetClick = () => {
    if (window.confirm('Are you sure you want to reset all visitor stats?')) {
      onResetStats();
    }
  };

  const graphData = {
    labels: filteredData.map(([date]) => date),
    datasets: [
      {
        label: `${visitorType} Visitors`,
        data: filteredData.map(([, clicks]) => clicks),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const totalClicksToDisplay =
    selectedFilter === 'All'
      ? visitorType === 'All' ? allClicks : totalClicks
      : filteredData.reduce((sum, [, clicks]) => sum + clicks, 0);


      const handleResetAllVisitors = async () => {
        const confirmReset = window.confirm('Are you sure you want to reset all visitor stats?');
        if (!confirmReset) return;
      
        try {
          const res = await fetch('https://fantasymmadness-game-server-three.vercel.app/reset-all-visitors', {
            method: 'POST',
          });
          const data = await res.json();
          alert(data.message);
          window.location.reload(); // Optional: refresh to reflect changes
        } catch (error) {
          console.error('Error resetting all visitors:', error);
          alert('Failed to reset all visitor stats.');
        }
      };
      
      const handleResetUniqueVisitors = async () => {
        const confirmReset = window.confirm('Are you sure you want to reset unique visitor stats?');
        if (!confirmReset) return;
      
        try {
          const res = await fetch('https://fantasymmadness-game-server-three.vercel.app/reset-unique-visitors', {
            method: 'POST',
          });
          const data = await res.json();
          alert(data.message);
          window.location.reload(); // Optional: refresh to reflect changes
        } catch (error) {
          console.error('Error resetting unique visitors:', error);
          alert('Failed to reset unique visitor stats.');
        }
      };
      


  return (
    <div className='visitorsAnalyticsWrapper'>
      <div className='visitorwrapper'>
        <h1>Visitor Analytics</h1>
        <div className='flexed-div'>
          <button className='resetStatsBtn' onClick={handleResetClick}>
            Reset All Stats
          </button>
          <button
            className='resetStatsBtn'
            style={visitorType === 'All' ? { boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' } : {}}
            onClick={() => handleVisitorTypeChange('All')}
          >
            All Visitors
          </button>
          <button
            className='resetStatsBtn'
            style={visitorType === 'Unique' ? { boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' } : {}}
            onClick={() => handleVisitorTypeChange('Unique')}
          >
            Unique Visitors
          </button>
        </div>

        <div className='graphWrapper'>
          <Line data={graphData} />
        </div>

        <div className='filterOptions'>
          <h3>Stats for :</h3>
          <div className='filters'>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filterBtn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className='filteredStats'>
          <h2>
            Total {visitorType} Visitors for {selectedFilter} : {totalClicksToDisplay}
          </h2>
        </div>
        <div className='flexed-div'>
  <button className='reset-btns-bottom' onClick={handleResetAllVisitors}>Reset All visitors</button>
  <button className='reset-btns-bottom' onClick={handleResetUniqueVisitors}>Reset Unique visitors</button>
</div>


      </div>
    </div>
  );
};

export default VisitorsAnalytics;
