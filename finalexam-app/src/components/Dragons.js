import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon } from '../app/dragon/dragonSlice';

function Dragons() {
  const { dragons } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  return (
    <div>
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <div>
            <h3>{dragon.name}</h3>
            <p>
              {
                dragon.reserved ? (
                  <span>
                    Reserved
                  </span>
                ) : ''
              }
              {dragon.description}
            </p>
            <button
              type="button"
              className={
                    dragon.reserved
                      ? 'py-1 px-3 rounded border-2 text-gray-500 border-gray-500'
                      : 'py-2 px-3 rounded text-white '
                  }
              id={dragon.id}
              onClick={() => {
                dispatch(reserveDragon(dragon.id));
              }}
            >
              {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Dragons;
