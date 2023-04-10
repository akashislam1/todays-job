import { getJobApplyData } from "../../FakeDb/FakeDb";

export const getFeatureAndAppliedData = async () => {
  const allFeatureData = await fetch("/data.json");
  const featureData = await allFeatureData.json();

  const appliedData = getJobApplyData();
  let jobAppliedArray = [];
  for (const id in appliedData) {
    const foundAppliedData = featureData.find((aData) => aData.id === id);
    if (foundAppliedData) {
      featureData.quantity = appliedData[id];
      jobAppliedArray.push(foundAppliedData);
    }
  }
  return { jobAppliedArray, featureData };
};
