import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { listingSchema } from '../../../shared/types';
import { useState } from 'react';


const ListingsForm = () => {
     const {register ,reset ,handleSubmit ,formState:{errors} } = useForm({resolver: zodResolver(listingSchema),defaultValues:{}})

    const [imageFiles, setImageFiles] = useState([]);
    const [imagePreview, setImagePreview] = useState([]);
   

    const handleImages = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles(prev => [...prev,...files]);

        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreview(prev => [...prev,...previews])
    }

    const onSubmit = async (data) => {
        const formData = new FormData();
        imageFiles.forEach(file => formData.append('image',file));

        Object.keys(data).forEach(key => formData.append(key,data[key]))
        const response = await api.post('/admin/listing',data)

        console.log(response)
    }           
    return (
        <div className='flex-1 flex '>
            <div className='flex flex-col w-full justify-start items-start m-5'>
                <div className='border border-gray-300 shadow-xl rounded-xl p-5 object-cover h-min w-3xl'>
                    <span className='text-2xl font-medium'> Add a New Property </span>
                    <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
                        
                        <input placeholder='Title' className='w-75 border-0 bg-gray-100 outline-transparent rounded-lg my-4 p-2'/>
                        <br/>
                        <textarea
                            id="description"
                            rows="4"
                            className="peer w-120 border-0 bg-gray-100 outline-transparent rounded-lg px-3 pt-6 pb-2 "
                            placeholder="Description"
                           
                        />
                        <br/>
                        <input placeholder='Location' className='w-75 border-0 bg-gray-100 outline-transparent rounded-lg my-4 p-2'/>
                        <br/>
                        <input placeholder='Price' className='w-50 border-0 bg-gray-100 outline-transparent rounded-lg my-4 p-2'/>
                        <select className='ml-3 p-2 border-0 bg-gray-100 outline-transparent rounded-lg'>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                        </select>
                        <br/>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            name='image'
                            onChange={handleImages}
                            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                            />
                        

                    </form>
                    <div className="mt-4 flex flex-wrap gap-4">
                            {imagePreview.map((url, idx) => (
                                <img
                                key={idx}
                                src={url}
                                alt={`preview-${idx}`}
                                className="w-24 h-24 object-cover rounded-md border"
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>  
        )
}

export default ListingsForm
