import { server } from "../../config";
 
export default typeof window === "undefined" ? server : window.global;
