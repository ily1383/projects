const convertData = (data, type)=>{
  const converttedData = data[type].map((item)=>{
    return{
        date:item[0],
        [type]:item[1],
    }
  })
  return converttedData;
}
export default convertData