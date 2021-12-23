const fetchData = (res) => {
    return {
        type:'GET_DATA',
        payload: res
    }
}

export { fetchData }