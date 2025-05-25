import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form';
import { listingSchema } from '../../../shared/types';

const ListingsForm = () => {

    const {register,reset,handleSubmit,formState:{errors}} = useForm({resolver: zodResolver(listingSchema),defaultValues:{}})
  return (
    <div className='flex-1 flex '>
        <div className='flex flex-col w-full justify-center bg-amber-400 items-center'>
            <div className='border p-2 m-2 object-cover'>
                <form>
                    
                </form>
            </div>
        </div>
    </div>  
    )
}

export default ListingsForm
