export const mergeArrayObjects = (arr1: any[], arr2: any[]) => {
  return arr1.map((item: { station_id: any; }, i: string | number) => {
    if (Number(item.station_id) === Number(arr2[i].station_id)) {
      return Object.assign({}, item, arr2[i]);
    }
 });
};
