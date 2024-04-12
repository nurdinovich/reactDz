import { useEffect, useState } from "react"

const EddForm = () =>{
    const [form, setForm] = useState({})

    useEffect(()=>{
         fetch("https://65ddbefedccfcd562f555baa.mockapi.io/items")
         .then((response)=>{
            return response.json()
         }).then((response)=>{
            console.log(response );
            form(form.title)
            form(form.price)
            form(form.oldPrice)
            form(form.image)
         }).catch((error)=>{
            console.log(error.messange);
         })
    },[])
    const handleSubmit=(()=>{

    })
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };
    return (
        <div>
 <form  className="form" onSubmit={handleSubmit}>
                
                <input
                    name="title"
                    onChange={handleChange}
                    defaultValue={form.title || ''}
                    placeholder="title:" type="text" />
                <input
                    name="price"
                    onChange={handleChange}
                    defaultValue={form.price || ''}
                    placeholder="price:" type="text" />
                <input
                    name="oldPrice"
                    onChange={handleChange}
                    defaultValue={form.oldPrice || ''}
                    placeholder="oldPrice:" type="text" />
                <input
                    name="image"
                    onChange={handleChange}
                    defaultValue={form.image || ''}
                    placeholder="imaage:" type="url" />
                <textarea
                    placeholder="description" type="text" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
 export default EddForm