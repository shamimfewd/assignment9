import { toast } from "react-toastify";

const getDataFromLocalStorage = () => {
  const getData = localStorage.getItem("property");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const setDataInLocalStorage = (parsId) => {
  const stroedData = getDataFromLocalStorage();
  const exist = stroedData.find((id) => id === parsId);
  if (exist) {
    toast("property already Exist on wish list");
  } else {
    stroedData.push(parsId);
    localStorage.setItem("property", JSON.stringify(stroedData));
    toast.success("property added to book list");
  }
};

export { getDataFromLocalStorage, setDataInLocalStorage };
