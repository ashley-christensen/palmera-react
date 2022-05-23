import React from 'react';
import Select from 'react-select';

const roomOptions = [
  { value: 'Standard', label: 'Standard' },
  { value: 'Delux', label: 'Delux' }
];

const occupantOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
];


const RoomDetails = (props) => {
  let {
    onRoomTypeChange,
    onOccupantsChange
  } = props;

  const handleChangeRoom = ({ value }) => {
    console.log(value);
    onRoomTypeChange(value);
  };

  const handleChangeOccupants = ({ value }) => {
    console.log(value);
    onOccupantsChange(value);
  };

  return (
    <div>
      <div className="form-group mb-2">
        <span className="form-label mt-3">Room Type </span>

        <Select
          onChange={handleChangeRoom}
          options={roomOptions}
          theme={theme}
          placeholder="Room Type"
        />

        <span className="form-label mt-3">Guests</span>
        <Select
          onChange={handleChangeOccupants}
          options={occupantOptions}
          theme={theme}
          placeholder="Number of Guests"
        />
      </div >
    </div>
  );
};

export default RoomDetails;


{/* //styles for SELECT */ }
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


