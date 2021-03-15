export const getLast  = async() =>{

    const resp = await  fetch('http://localhost:8080/last-tickets');
    const data = resp.json();
    return data;
}
