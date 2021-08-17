import React from "react";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good + neutral * 0 + bad * -1) / all;
  const positives = (good / all) * 100;

  if (good || neutral || bad) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>
                <StatisticsLine value={good} />
              </td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>
                <StatisticsLine value={neutral} />
              </td>
            </tr>
            <tr>
              <td>bad</td>
              <td>
                <StatisticsLine value={bad} />
              </td>
            </tr>
            <tr>
              <td>all</td>
              <td>
                <StatisticsLine value={all} />
              </td>
            </tr>
            <tr>
              <td>average</td>
              <td>
                <StatisticsLine value={average ? average : 0} />
              </td>
            </tr>
            <tr>
              <td>positives</td>
              <td>
                <StatisticsLine value={positives ? positives : 0} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h3>Statistics</h3>
      <p>no feedback given</p>
    </div>
  );
};

export default Statistics;
