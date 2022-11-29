import React, { useReducer, useRef } from "react";
import {
  INITIAL_STATE,
  actionType,
  formReducer,
} from "../Reducers/formReducer";

function Form() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    dispatch({
      type: actionType.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
  }
  const tagRef = useRef<HTMLTextAreaElement>(null);
  function handleAddTag() {
    const tags = tagRef.current?.value.split(",");
    dispatch({ type: actionType.ADD_TAG, payload: tags });
  }

  return (
    <div className="flex flex-col gap-y-2 [&>*>*]:bg-zinc-600 [&>*>*]:outline-none text-white font-mono w-[300px]">
      <div>
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div>
        <input
          type="text"
          name="last_name"
          placeholder="Last name"
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div>
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <p className="font-bold">Gender : </p>
      <div>
        <select name="gender" onChange={handleChange} className="w-full">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <p className="text-white font-bold">Tags</p>
      <div>
        <textarea name="tags" className="w-full" ref={tagRef}></textarea>
      </div>

      <button
        className="bg-blue-300 font-bold text-black"
        onClick={handleAddTag}
      >
        Add tags
      </button>
      <div className="flex flex-wrap gap-2 justify-center">
        {state.tags.map((tag) => {
          return (
            <p key={Math.random() * 1000} className="cursor-pointer">
              {tag}{" "}
              <span
                onClick={() =>
                  dispatch({ type: actionType.REMOVE_TAG, payload: tag })
                }
              >
                x
              </span>
            </p>
          );
        })}
      </div>

      <div className="flex justify-between gap-x-2">
        <button
          className="bg-red-400 w-10"
          onClick={() => dispatch({ type: actionType.DECREASE_COUNT })}
        >
          -
        </button>
        <p className="text-white">Quantity( {state.count} )</p>
        <button
          className="bg-red-400 w-10"
          onClick={() => dispatch({ type: actionType.INCREASE_COUNT })}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Form;
