import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveMission } from '../app/missions/missionSlice';

function Missions() {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  return (
    <div>
      {missions.length > 1
        ? (
          <table>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission, index) => (
                <tr
                  key={mission.mission_id}
                >
                  <td>
                    {mission.mission_name}
                  </td>
                  <td>{mission.description}</td>
                  <td>
                    <span>
                      {mission.reserved ? 'active member' : 'not a member'}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={
                    mission.reserved
                      ? 'py-1 px-3 rounded border-2 border-pink'
                      : 'py-1 px-3 rounded border-2 border-black'
                  }
                      id={mission.mission_id}
                      onClick={() => {
                        dispatch(reserveMission(missions.mission_id));
                      }}
                    >
                      {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        : <p>loading ...</p>}
    </div>
  );
}

export default Missions;
