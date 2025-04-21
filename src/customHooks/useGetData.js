import { useEffect } from "react";
import URL from "../URL";
import axios from "axios";

// const useGetData = (path = "", setData) => {
//   useEffect(() => {
//     try {
//       (async () => {
//         const res = await fetch(`${URL}${path}`);
//         if (!res.ok) {
//           throw new Error("Потеряли связь с сервером :(");
//         }
//         const data = await res.json();
//         setData(data);
//       })();
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, []);
// };

const useGetData = (path = "", setData) => {
  useEffect(() => {
    try {
      axios.get(`${URL}${path}`).then((res) => setData(res.data));
    } catch (error) {
      console.log(error.message);
    }
  }, []);
};

export default useGetData;
