'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

// Define types for contribution data
type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionData = ContributionDay[][];

// Function to get month names for the last year
const getMonthNames = () => {
  const months: string[] = [];
  const currentDate = new Date();
  for (let i = 0; i < 12; i++) {
    const date = new Date(currentDate);
    date.setMonth(currentDate.getMonth() - i);
    months.unshift(date.toLocaleString('default', { month: 'short' }));
  }
  return months.slice(0, 12);
};

// Map contribution count to level
const getContributionLevel = (count: number): number => {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
};

export default function GitHubContributionsSection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contributionData, setContributionData] = useState<ContributionData>([]);
  const username = 'TheSurjo'; // Your GitHub username
  const months = getMonthNames();

  // Get contribution color based on level
  const getLevelColor = (level: number): string => {
    switch (level) {
      case 0: return 'bg-[#ebedf0] dark:bg-[#161b22]'; // Empty
      case 1: return 'bg-[#9be9a8] dark:bg-[#0e4429]'; // Light
      case 2: return 'bg-[#40c463] dark:bg-[#006d32]'; // Medium
      case 3: return 'bg-[#30a14e] dark:bg-[#26a641]'; // Heavy
      case 4: return 'bg-[#216e39] dark:bg-[#39d353]'; // Very Heavy
      default: return 'bg-[#ebedf0] dark:bg-[#161b22]';
    }
  };

  // Function to fetch contributions for user from GitHub
  const fetchContributions = async (username: string) => {
    try {
      setLoading(true);
      
      // Create start and end dates (1 year of data)
      const endDate = new Date();
      const startDate = new Date(endDate);
      startDate.setFullYear(startDate.getFullYear() - 1);
      
      // Format dates for GitHub API
      const fromDate = startDate.toISOString().split('T')[0];
      const toDate = endDate.toISOString().split('T')[0];
      
      // GitHub API proxy or public contribution data source
      // This uses a public API that scrapes public GitHub profiles
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub contributions');
      }
      
      const data = await response.json();
      
      // Process the contributions data
      if (data.contributions) {
        // Create a full year's data structure (52 weeks × 7 days)
        // This will hold our processed data in the correct format
        const processedData: ContributionData = [];
        
        // Create a map for quick lookup of contributions by date
        const contributionsByDate: Record<string, number> = {};
        data.contributions.forEach((contrib: any) => {
          contributionsByDate[contrib.date] = contrib.count;
        });
        
        // Create the 52 weeks structure from endDate backward
        for (let weekIndex = 0; weekIndex < 52; weekIndex++) {
          const weekData: ContributionDay[] = [];
          
          // For each day in the week (0 = Sunday, 6 = Saturday)
          for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            // Calculate the date for this cell (going backward from endDate)
            // We arrange by column (weekIndex) and row (dayIndex)
            const dayDate = new Date(endDate);
            dayDate.setDate(endDate.getDate() - ((51 - weekIndex) * 7 + (6 - dayIndex)));
            
            const dateStr = dayDate.toISOString().split('T')[0];
            const count = contributionsByDate[dateStr] || 0;
            
            weekData.push({
              date: dateStr,
              count,
              level: getContributionLevel(count)
            });
          }
          
          processedData.push(weekData);
        }
        
        setContributionData(processedData);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error fetching contributions:', err);
      setError('Failed to load GitHub contributions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributions(username);
  }, [username]);

  return (
    <section className="w-full py-16 px-4 md:px-9" id="github-contributions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains mb-2">
            GitHub <span className="text-[--main-color]">Contributions</span>
          </h2>
          <p className="font-jetbrains text-[14px] md:text-[16px] max-w-6xl mx-auto text-opacity-90 mb-6">
            A snapshot of my activity on GitHub
          </p>
          <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[--main-color]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500 dark:text-red-400">{error}</p>
            <button 
              onClick={() => fetchContributions(username)}
              className="mt-4 px-6 py-2 bg-[--main-color] text-white font-medium rounded-full text-[14px] hover:opacity-90 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-fadeIn">
            <div className="p-2 w-full max-w-5xl overflow-auto border border-gray-700 hover:border-[--main-color] transition-all duration-300">
              {/* GitHub Style Contribution Graph */}
              <div className="flex flex-col space-y-2">
                {/* Month labels */}
                <div className="flex text-xs text-gray-400 dark:text-gray-500 ml-8">
                  {months.map((month, idx) => (
                    <div key={`month-${idx}`} className="flex-1 text-center font-jetbrains">{month}</div>
                  ))}
                </div>
                
                {/* Contribution grid */}
                <div className="flex">
                  {/* Contribution cells */}
                  <div className="flex space-x-[2px]">
                    {contributionData.map((week, weekIdx) => (
                      <div key={`week-${weekIdx}`} className="flex flex-col space-y-[2px]">
                        {week.map((day, dayIdx) => (
                          <div
                            key={`day-${weekIdx}-${dayIdx}`}
                            className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(day.level)} hover:scale-125 transition-transform duration-200`}
                            title={`${day.date}: ${day.count} contributions`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Legend */}
                <div className="flex justify-end pt-2 items-center text-xs text-gray-500 dark:text-gray-400 font-jetbrains">
                  <span className="mr-2">Less</span>
                  <div className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(0)}`}></div>
                  <div className={`w-[10px] h-[10px] rounded-sm ml-1 ${getLevelColor(1)}`}></div>
                  <div className={`w-[10px] h-[10px] rounded-sm ml-1 ${getLevelColor(2)}`}></div>
                  <div className={`w-[10px] h-[10px] rounded-sm ml-1 ${getLevelColor(3)}`}></div>
                  <div className={`w-[10px] h-[10px] rounded-sm ml-1 ${getLevelColor(4)}`}></div>
                  <span className="ml-2">More</span>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
                    <Link
                        href={`https://github.com/${username}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-full text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300"
                    >
                        <i className='bx bxl-github'></i>
                        View on GitHub
                    </Link>
                </div>
          </div>
        )}
      </div>
    </section>
  );
} 