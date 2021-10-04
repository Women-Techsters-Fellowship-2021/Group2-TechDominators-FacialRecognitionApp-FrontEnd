// function for parent detail submission 

export const parentSubmit = (values) => {

    const urls = 'https://localhost:5001/api/v1/Parent';

    fetch(urls, {

        method: "POST",
        body: JSON.stringify({
            FullName: values.FullName,
            Email: values.Email,
            PhoneNumber: values.PhoneNumber,
            ParentPhoto: values.ParentPhoto
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => {
            console.log('Error message: ', error);
        });
}