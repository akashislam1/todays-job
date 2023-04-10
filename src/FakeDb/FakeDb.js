const addToDb = (id) => {
  let jobApplyData = getJobApplyData();

  const quantity = jobApplyData[id];
  if (!quantity) {
    jobApplyData[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    jobApplyData[id] = newQuantity;
  }
  localStorage.setItem("jobApplyData", JSON.stringify(jobApplyData));
};

const getJobApplyData = () => {
  let jobApplyData = {};
  const storedApplyData = localStorage.getItem("jobApplyData");
  if (storedApplyData) {
    jobApplyData = JSON.parse(storedApplyData);
  }
  return jobApplyData;
};

export { addToDb, getJobApplyData };
