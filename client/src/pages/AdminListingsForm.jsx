import { zodResolver } from '@hookform/resolvers/zod'
import { useForm} from 'react-hook-form';
import { listingSchema } from '@shared/index.js'
import { useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import api from '../../axios';

const AdminListingsForm = () => {

    const navigate = useNavigate();
    const {register ,reset ,handleSubmit ,formState:{errors} } = useForm({resolver: zodResolver(listingSchema),defaultValues:{}})
    const [imageFiles, setImageFiles] = useState([]);
    const [imagePreview, setImagePreview] = useState([]);
   

    const handleImages = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles(prev => [...prev,...files]);

        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreview(prev => [...prev,...previews])
    }

    const removeImage = (index) => {
        URL.revokeObjectURL(imagePreview[index]);
        setImageFiles(prev => prev.filter((_, i) => i !== index));
        setImagePreview(prev => prev.filter((_, i) => i !== index));
            
    }

    const onSubmit = async (data) => {
        const formData = new FormData();
        imageFiles.forEach(file => formData.append('image',file));

        Object.keys(data).forEach(key => formData.append(key,data[key]))
        try {
            const response = await api.post('/admin/listing', formData);
            navigate('/admin/dashboard');
        } catch (err) {
            console.log(err.response?.data || err.message);
        }

    }           
    return (
        <div className='flex-1 flex '>
            <div className='flex flex-col w-full justify-start items-start m-5'>
                <div className='border border-gray-300 shadow-xl rounded-xl p-5 object-cover h-min w-3xl'>
                    <span className='text-2xl font-medium'> Add a New Property </span>
                    <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'  >
                        
                        <input placeholder='Title' {...register('title')}  className='w-75 border-0 bg-gray-100 outline-transparent rounded-lg mt-4 p-2'/>
                        <p className='text-red-500 text-sm '>{errors.title?.message}</p>
                        <br/>
                        <textarea
                            id="description"
                            rows="4"
                            className="peer w-120 border-0 bg-gray-100 outline-transparent rounded-lg px-3 pt-2"
                            placeholder="Description"
                            {...register('description')} 
                        />
                        <p className='text-red-500 text-sm '>{errors.description?.message}</p>
                        <br/>
                        <input placeholder='Location' {...register('location')}  className='w-75 border-0 bg-gray-100 outline-transparent rounded-lg my-2 p-2'/>
                        <br/>
                        <p className='text-red-500 text-sm '>{errors.location?.message}</p>
                        <input placeholder='Price' {...register('price')}  className='w-50 border-0 bg-gray-100 outline-transparent rounded-lg my-4 p-2'/>
                        
                        <select {...register('currency')}  className='ml-3 p-2 border-0  bg-gray-100 outline-transparent rounded-lg'>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                        </select>
                        <br/>
                        <p className='text-red-500 text-sm '>{errors.price?.message}</p>
                        
                        <input
                        type="file"
                        multiple    
                        onChange={handleImages}
                        className="hidden"
                        id="file-upload"
                        />

                        <label
                        htmlFor="file-upload"
                        className="cursor-pointer mt-2 flex-row px-4 py-2 bg-blue-500 text-white rounded inline-block"
                        >
                        Choose Files
                        </label>

                        <p className="text-sm text-gray-700 mt-2">
                        {imageFiles.length > 0
                            ? `${imageFiles.length} file(s) selected`
                            : "No files selected"}
                        </p>
                        

                        <div className="mt-4 flex flex-wrap gap-4">
                            {imagePreview.map((url, index) => (
                                <div key={index} className="relative w-24 h-24 rounded-md overflow-hidden">
                                <img
                                    src={url}
                                    alt={`preview-${index}`}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => removeImage(index)}
                                    className="absolute top-1 right-1"
                                >
                                    <img src="/trash.svg" className="w-4 h-4" />
                                </button>
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-start py-4'>
                            <Button type='submit' title='Submit'/>
                        </div>
                            
                        
                    </form>
                </div>
            </div>
        </div>  
        )
}

export default AdminListingsForm
