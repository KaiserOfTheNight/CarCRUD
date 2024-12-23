import { legacy_createStore } from "redux";
import reducer from "../Config/Reducer";

const Store = legacy_createStore(reducer)

export default Store;