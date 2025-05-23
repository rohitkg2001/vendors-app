import {
  VIEW_INVENTORY,
  UPDATE_INVENTORY,
  COUNT_INVENTORY,
  GET_ALL_INVENTORY,
  SET_TOTAL_INVENTORY_VALUE,
  GET_TODAY_INVENTORY,
  GET_TOTAL_RECEIVED_INVENTORY,
  GET_IN_STOCK,
  GET_CONSUMED,
} from "../constant";

const initialState = {
  inventory: [],
  currentItem: null,
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INVENTORY:
      return { ...state, inventory: action.payload };
    case SET_TOTAL_INVENTORY_VALUE:
      return { ...state, total_inventory_value: action.payload };
    case VIEW_INVENTORY:
      return { ...state, currentItem: action.payload };

    case UPDATE_INVENTORY:
      return { ...state, inventory: action.payload };
    case COUNT_INVENTORY:
      return {
        ...state,
        count: state.inventory.length,
      };
    case GET_TODAY_INVENTORY:
      return { ...state, today_inventory: action.payload };
    case GET_TOTAL_RECEIVED_INVENTORY:
      return { ...state, total_received_inventory: action.payload };

    case GET_IN_STOCK:
      return {
        ...state,
        in_stock: action.payload, // Store 'In Stock' data
      };

    case GET_CONSUMED:
      return {
        ...state,
        consumed: action.payload, // Store 'Consumed' data
      };
    default:
      return state;
  }
};
