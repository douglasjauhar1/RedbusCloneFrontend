// export const getOrder = (id) => {
//   console.log(id);
  
//   {
//   type: 'GET_ORDER',
//   id: id,
// }}

export const getOrder = (id) => {
console.log('action',id);

  return {
      type: 'GET_ORDER',
      id
      
      
  }
}