import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const { dragons } = useSelector((state) => state.dragons);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );
  const reservedDragons = dragons.filter(
    (dragons) => dragons.reserved === true,
  );

  return (
    <div>
      <div>
        <span>My Missions</span>
        <ul>
          {reservedMissions.length > 0 ? (
            reservedMissions.map((item) => (
              <li key={item.mission_id}>
                {item.mission_name}
              </li>
            ))
          ) : (
            <li>No Mission</li>
          )}
        </ul>
      </div>
      <div>
        <span>My Dragons</span>
        <ul>
          {reservedDragons.length > 0 ? (
            reservedDragons.map((item) => (
              <li key={item.id}>
                {item.name}
              </li>
            ))
          ) : (
            <li>No Dragon</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
