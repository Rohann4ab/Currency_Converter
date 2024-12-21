function fstring(currency){
    var url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_t4KC9nXE6HvxaO2jj16V7OZ8zt19L2XoWisG9Wht&base_currency=${currency}`;
    return url;
}
export { fstring };