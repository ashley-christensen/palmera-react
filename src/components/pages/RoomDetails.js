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
    roomType,
    onRoomTypeChange,
    occupants,
    onOccupantsChange
  } = props;

  const handleChange = (e) => {
    onRoomTypeChange(e.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <label className="select-label">Room Type: {roomType} </label>
        <Select
          value={roomType}
          onChange={handleChange}
          options={roomOptions}
          theme={theme}
        />

        <label className="select-label">Guests: {occupants}</label>
        <Select
          value={occupants}
          onDatachange={onOccupantsChange}
          options={occupantOptions}
          theme={theme}
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


