import React from 'react';
import Select from 'react-select';


const roomTypeOptions = [
  { value: 'Standard', label: 'Standard' },
  { value: 'Delux', label: 'Delux' }
];


const occupantsOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
];


const RoomDetails = (props) => {
  // let {
  //   roomType,
  //   onRoomTypeChange,
  //   occupants,
  //   onOccupantsChange

  // } = props;



  return (
    <div>
      <div className="form-group">


        {/* //add Select back here if needed */}
        {/* <label className="select-label">Room Type</label>
        <Select
          selected={roomType}
          onChange={onRoomTypeChange}
          options={roomTypeOptions}
          theme={theme}
        />
        <span>{roomType}</span>
        <label className="select-label">Guests</label>
        <Select
          options={occupantsOptions}
          theme={theme}

        /> */}
        {/* // add Select back here if needed */}
      </div >
    </div >
  );
};

export default RoomDetails;


{/* //theme styles for SELECT REACT COMPONENT */ }
const theme = theme => ({

  ...theme,
  colors: {
    ...theme.colors,
    primary: '#17a2b8',
    borderRadius: 4,
    controlHeight: 38,
    baseUnit: 4,
  }

});
{/* //end theme styles for SELECT react component */ }

