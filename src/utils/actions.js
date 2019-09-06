export default (name, payload) => {
  switch (name) {
  case 'removeTitle':
    console.log('HERE')
    return {
      type: 'REMOVE_TITLE',
      payload,
    };
  case 'changedSelectedMenuItem':
    console.log('THERE')
    return {
      type: 'CHANGE_SELECTED_MENU_ITEM',
      payload,
    }
  }
}

// export const dispatchRemoveTitle = (payload) => ({
//   type: 'REMOVE_TITLE',
//   payload,
// });

// export const dispatchChangedSelectedMenuItem = (payload) => ({
//   type: 'CHANGE_SELECTED_MENU_ITEM',
//   payload,
// });
