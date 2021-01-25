import { vehicleActionTypes } from "./action";

const vehicles = (
  state = { vehicles_info: [], vehicles_names: {} },
  action
) => {
  switch (action.type) {
    case vehicleActionTypes.INIT_VEHICLES:
      return {
        ...action.data,
      };
    case vehicleActionTypes.SORT_VEHICLES:
      return {
        ...state,
        vehicles_info: [...action.data],
      };
    case vehicleActionTypes.UPDATE_VEHICLE:
      return {
        ...state,
      };
    case vehicleActionTypes.DELETE_VEHICLE:
      return {
        ...state,
        vehicles_info: state.vehicles_info.filter(
          (row) => row.id !== action.id
        ),
      };

    default:
      return state;
  }
};

export default vehicles;
