export function setGift ( state, n ) {
  state.gift = n;
}
export function setGiftValues ( state, payload ) {
  state.giftValue = payload.giftValue;
  state.groupGiftName = payload.groupGiftName;
  state.userName = payload.userName;
  state.userEmail = payload.userEmail;
}
