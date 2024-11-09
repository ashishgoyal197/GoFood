import { createContext, useContext, useReducer, useState } from "react";

const cartStateContext = createContext();
const cartDisPatchContext = createContext();
export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "UPDATE":
      let arr = [...state];
      // console.log(action.id);

      arr.find((food, index) => {
        // console.log(food);
        if (food.id === action.id && food.size === action.size) {
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + parseInt(food.qty),
            price: action.price + food.price,
          };
          return arr;
        }
      });
      return arr;

    case "DROP":
      let emptArr = [];
      return emptArr;

    default:
      console.log("Error in Reducer");
  }
};

// Auth context

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    localStorage.getItem("authToken") || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartDisPatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDisPatchContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDisPatchContext);
